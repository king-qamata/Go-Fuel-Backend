from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.conf import settings
from decimal import Decimal
from django.db.models import Count, Sum
from django.http import Http404
from django.http import HttpResponse
from django.http import JsonResponse
from django.utils import timezone
from django.urls import reverse
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.cache import cache_page

from core.forms import (
    AttendantRegistrationForm,
    CarForm,
    DispenserForm,
    FuelQuantityForm,
    LoginForm,
    PaymentMethodForm,
    QRLookupForm,
    StationUpdateForm,
)
from core.models import (
    AvailabilityStatus,
    Car,
    FuelInventory,
    FuelPrice,
    FuelType,
    Order,
    OrderStatus,
    PageView,
    Payment,
    Receipt,
    Station,
    StationAvailability,
    StationUpdate,
    UserProfile,
    UserRole,
)
from core.services import (
    FALLBACK_STATIONS,
    DEFAULT_LATITUDE,
    DEFAULT_LONGITUDE,
    get_brand_price_cards,
    get_lowest_price_summary,
    get_nearby_station_cards,
    get_station_card_by_id,
    parse_coordinate,
    paystack_service,
    sms_service,
)


def healthcheck_view(request):
    return JsonResponse(
        {
            "status": "ok",
            "debug": settings.DEBUG,
            "service": "go-fuel-backend",
        }
    )


def landing_page(request):
    latitude = parse_coordinate(request.GET.get("lat"), DEFAULT_LATITUDE)
    longitude = parse_coordinate(request.GET.get("lng"), DEFAULT_LONGITUDE)
    lowest_price_brand = get_lowest_price_summary()
    stations = get_nearby_station_cards(latitude=latitude, longitude=longitude, limit=4)
    return render(
        request,
        "core/landing.html",
        {
            "lowest_price_brand": lowest_price_brand,
            "stations": stations,
            "selected_latitude": latitude,
            "selected_longitude": longitude,
        },
    )


def _get_order_session(request):
    return request.session.get("go_fuel_order", {})


def _save_order_session(request, payload: dict):
    order = _get_order_session(request)
    order.update(payload)
    request.session["go_fuel_order"] = order
    request.session.modified = True


def _clear_order_session_fields(request, *fields: str):
    order = _get_order_session(request)
    changed = False
    for field in fields:
        if field in order:
            order.pop(field, None)
            changed = True
    if changed:
        request.session["go_fuel_order"] = order
        request.session.modified = True


def _order_flow_summary(order: dict) -> dict:
    station_card = None
    if order.get("station_id"):
        station_card = get_station_card_by_id(order["station_id"])

    quantity = order.get("quantity_litres")
    payment_method = order.get("payment_method", "card")
    payment_labels = dict(PaymentMethodForm().fields["method"].choices)

    return {
        "station": station_card,
        "station_label": (
            f"{station_card['station_code']} · {station_card['name']}"
            if station_card
            else "Select a station"
        ),
        "fuel_type": order.get("fuel_type", FuelType.PETROL),
        "dispenser_label": str(order.get("dispenser_number") or "Pick dispenser"),
        "quantity_label": f"{quantity} L" if quantity else "Set quantity",
        "payment_label": payment_labels.get(payment_method, "Choose method"),
        "payment_method": payment_method,
    }


def _json_order_snapshot(request):
    order = _get_order_session(request)
    summary = _order_flow_summary(order)
    return JsonResponse(
        {
            "ok": True,
            "order": {
                "station_id": order.get("station_id"),
                "fuel_type": order.get("fuel_type", FuelType.PETROL),
                "dispenser_number": order.get("dispenser_number"),
                "quantity_litres": order.get("quantity_litres"),
                "payment_method": order.get("payment_method", "card"),
            },
            "summary": {
                "station": summary["station_label"],
                "fuel_type": summary["fuel_type"],
                "dispenser": summary["dispenser_label"],
                "quantity": summary["quantity_label"],
                "payment": summary["payment_label"],
            },
            "selected_station": summary["station"],
        })


def _get_or_create_order_user(request, customer_phone: str | None):
    if customer_phone:
        profile = UserProfile.objects.filter(phone_number=customer_phone).select_related("user").first()
        if profile is not None:
            return profile.user

        username = customer_phone.strip()
        if not User.objects.filter(username=username).exists():
            user = User.objects.create_user(username=username)
            UserProfile.objects.create(user=user, phone_number=username)
            return user

        return User.objects.get(username=username)

    return request.user


def login_page(request):
    if request.user.is_authenticated:
        return redirect("core:order")

    form = LoginForm(request.POST or None)
    error = None

    if request.method == "POST" and form.is_valid():
        phone_number = form.cleaned_data["phone_number"].strip()
        password = form.cleaned_data["password"]
        profile = UserProfile.objects.filter(phone_number=phone_number).select_related("user").first()
        user = None

        if profile is not None:
            user = authenticate(request, username=profile.user.username, password=password)

        if user is None:
            # fallback to username/password combination if the phone is used as username
            user = authenticate(request, username=phone_number, password=password)

        if user is None:
            # If no user exists yet, create a phone-first account automatically.
            if not User.objects.filter(username=phone_number).exists():
                user = User.objects.create_user(username=phone_number, password=password)
                UserProfile.objects.create(user=user, phone_number=phone_number)

        if user is not None:
            login(request, user)
            UserProfile.objects.get_or_create(
                user=user,
                defaults={"phone_number": phone_number},
            )
            messages.success(request, "Logged in successfully.")
            return redirect("core:order")

        error = "Invalid phone number or password. Please try again."

    return render(request, "core/mobile_login.html", {"form": form, "error": error})


def logout_page(request):
    logout(request)
    messages.success(request, "You have been logged out.")
    return redirect("core:login")


def attendant_register_page(request):
    """Handle attendant registration with admin approval workflow."""
    if request.user.is_authenticated:
        return redirect("core:order")

    form = AttendantRegistrationForm(request.POST or None)
    error = None
    success = False

    if request.method == "POST" and form.is_valid():
        phone_number = form.cleaned_data["phone_number"].strip()
        first_name = form.cleaned_data["first_name"]
        last_name = form.cleaned_data["last_name"]
        email = form.cleaned_data.get("email", "").strip()
        password = form.cleaned_data["password"]
        registration_notes = form.cleaned_data.get("registration_notes", "").strip()

        # Check if phone number already exists
        if UserProfile.objects.filter(phone_number=phone_number).exists():
            error = "This phone number is already registered."
        # Check if username exists
        elif User.objects.filter(username=phone_number).exists():
            error = "This phone number is already in use."
        else:
            try:
                # Create user account
                user = User.objects.create_user(
                    username=phone_number,
                    first_name=first_name,
                    last_name=last_name,
                    email=email,
                    password=password,
                )

                # Create UserProfile with attendant role (not approved yet)
                UserProfile.objects.create(
                    user=user,
                    phone_number=phone_number,
                    role=UserRole.ATTENDANT,
                    is_approved=False,
                    registration_notes=registration_notes,
                )

                success = True
                messages.success(
                    request,
                    "Registration successful! Your account is pending admin approval. "
                    "You will be notified once approved."
                )
                # Redirect to login after successful registration
                return redirect("core:login")

            except Exception as e:
                error = f"Registration failed: {str(e)}"

    return render(
        request,
        "core/attendant_register.html",
        {
            "form": form,
            "error": error,
            "success": success,
        },
    )


def account_page(request):
    profile = None
    cars = []
    recent_orders = []
    if request.user.is_authenticated:
        profile, _ = UserProfile.objects.get_or_create(user=request.user)
        cars = request.user.cars.all()
        recent_orders = request.user.orders.select_related('station', 'receipt').order_by('-created_at')[:5]

    return render(
        request,
        "core/account.html",
        {
            "profile": profile,
            "cars": cars,
            "recent_orders": recent_orders,
        },
    )


def news_page(request):
    return render(request, "core/news.html")


def promotions_page(request):
    return render(request, "core/promotions.html")


def payment_methods_page(request):
    methods = [
        {"code": "card", "name": "Add a payment card", "detail": "Visa, Mastercard, or local debit card", "icon": "💳"},
        {"code": "momo", "name": "Mobile money", "detail": "Momo and wallet options for quick checkout", "icon": "📲"},
        {"code": "voucher", "name": "Voucher", "detail": "Redeem a station voucher or promo code", "icon": "🎟️"},
    ]
    order = _get_order_session(request)
    selected_method = order.get("payment_method", "card")
    payment_labels = dict(PaymentMethodForm().fields["method"].choices)

    if request.method == "POST":
        chosen_method = request.POST.get("method")
        valid_choices = set(payment_labels.keys())
        if chosen_method in valid_choices:
            _save_order_session(request, {"payment_method": chosen_method})
            messages.success(request, f"Payment method set to {payment_labels[chosen_method]}.")
            return redirect("core:payment")
        messages.error(request, "Please choose a valid payment method.")

    return render(
        request,
        "core/payment_methods.html",
        {
            "methods": methods,
            "selected_method": selected_method,
            "payment_labels": payment_labels,
        },
    )


def order_update_page(request):
    if request.method != "POST":
        return JsonResponse({"ok": False, "error": "Method not allowed"}, status=405)

    field = request.POST.get("field")
    if field == "station":
        station_id = request.POST.get("station_id")
        station = Station.objects.filter(id=station_id, is_active=True).first()
        if station is None:
            return JsonResponse({"ok": False, "error": "Please choose a valid station."}, status=400)
        _save_order_session(request, {"station_id": station.id})
        _clear_order_session_fields(
            request,
            "fuel_type",
            "dispenser_number",
            "quantity_litres",
            "amount",
            "payment_method",
        )
        return _json_order_snapshot(request)

    if field == "dispenser":
        form = DispenserForm(request.POST)
        if not form.is_valid():
            return JsonResponse({"ok": False, "error": "Please choose a valid dispenser."}, status=400)
        _save_order_session(
            request,
            {
                "fuel_type": form.cleaned_data["fuel_type"],
                "dispenser_number": form.cleaned_data["dispenser_number"],
            },
        )
        return _json_order_snapshot(request)

    if field == "quantity":
        form = FuelQuantityForm(request.POST)
        if not form.is_valid():
            return JsonResponse({"ok": False, "error": "Please enter a valid quantity."}, status=400)
        _save_order_session(
            request,
            {
                "quantity_litres": str(form.cleaned_data["quantity_litres"]),
                "amount": str(form.cleaned_data["amount"]) if form.cleaned_data["amount"] else None,
            },
        )
        return _json_order_snapshot(request)

    if field == "payment":
        form = PaymentMethodForm(request.POST)
        if not form.is_valid():
            return JsonResponse({"ok": False, "error": "Please choose a valid payment method."}, status=400)
        _save_order_session(request, {"payment_method": form.cleaned_data["method"]})
        return _json_order_snapshot(request)

    return JsonResponse({"ok": False, "error": "Unknown order step."}, status=400)


def manifest_view(request):
    payload = {
        "name": "GoFuel",
        "short_name": "GoFuel",
        "description": "Mobile fuel ordering and station discovery",
        "start_url": "/",
        "scope": "/",
        "display": "standalone",
        "background_color": "#f8fbff",
        "theme_color": "#163a72",
        "icons": [
            {
                "src": "/static/core/icon-192.png",
                "sizes": "192x192",
                "type": "image/png",
            },
            {
                "src": "/static/core/icon-512.png",
                "sizes": "512x512",
                "type": "image/png",
            },
        ],
        "screenshots": [
            {
                "src": "/static/core/pwa-wide-screenshot.png",
                "sizes": "1280x720",
                "type": "image/png",
                "form_factor": "wide",
                "label": "GoFuel desktop order flow",
            },
            {
                "src": "/static/core/pwa-mobile-screenshot.png",
                "sizes": "390x844",
                "type": "image/png",
                "label": "GoFuel mobile order flow",
            },
        ],
    }
    return JsonResponse(payload, json_dumps_params={"indent": 2})


def service_worker_view(request):
    js = """
const CACHE_NAME = 'gofuel-v1';
const CORE_ASSETS = [
  '/',
  '/mobile/order/',
  '/prices/stations/',
  '/mobile/payment/',
  '/mobile/qr/',
  '/mobile/qr/camera/',
  '/mobile/payment-methods/',
  '/offline/',
  '/static/core/theme.css',
  '/static/core/location.js',
  '/static/core/icon-192.png',
  '/static/core/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          return response;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('/offline/');
          }
          return caches.match('/');
        });
    })
  );
});
"""
    response = HttpResponse(js, content_type="application/javascript")
    response["Cache-Control"] = "no-cache"
    return response


def order_page(request):
    order = _get_order_session(request)
    stations = get_nearby_station_cards(limit=4)
    selected_station = None
    if order.get("station_id"):
        selected_station = get_station_card_by_id(order["station_id"])
    return render(
        request,
        "core/order.html",
        {
            "order": order,
            "stations": stations,
            "selected_station": selected_station,
            "order_summary": _order_flow_summary(order),
        },
    )


def dispenser_page(request):
    form = DispenserForm(request.POST or None)
    order = _get_order_session(request)
    selected_station = None
    if order.get("station_id"):
        selected_station = get_station_card_by_id(order["station_id"])
    if request.method == "POST" and form.is_valid():
        _save_order_session(
            request,
            {
                "fuel_type": form.cleaned_data["fuel_type"],
                "dispenser_number": form.cleaned_data["dispenser_number"],
            },
        )
        return redirect("core:fuel-quantity")

    return render(
        request,
        "core/dispenser.html",
        {
            "form": form,
            "order": order,
            "selected_station": selected_station,
        },
    )


def fuel_quantity_page(request):
    form = FuelQuantityForm(request.POST or None)
    order = _get_order_session(request)
    selected_station = None
    if order.get("station_id"):
        selected_station = get_station_card_by_id(order["station_id"])
    if request.method == "POST" and form.is_valid():
        _save_order_session(
            request,
            {
                "quantity_litres": str(form.cleaned_data["quantity_litres"]),
                "amount": str(form.cleaned_data["amount"])
                if form.cleaned_data["amount"]
                else None,
            },
        )
        return redirect("core:payment")

    return render(
        request,
        "core/fuel_quantity.html",
        {
            "form": form,
            "order": order,
            "selected_station": selected_station,
        },
    )


def add_car_details_page(request):
    form = CarForm(request.POST or None)
    saved_cars = []
    if request.user.is_authenticated and request.method == "POST" and form.is_valid():
        car = form.save(commit=False)
        car.user = request.user
        car.save()
        messages.success(request, "Your car details were saved.")
        return redirect("core:car-details")

    if request.user.is_authenticated:
        saved_cars = request.user.cars.all()

    return render(
        request,
        "core/car_details.html",
        {
            "form": form,
            "saved_cars": saved_cars,
        },
    )


def payment_page(request):
    order_data = _get_order_session(request)
    form = PaymentMethodForm(request.POST or None, initial={"method": order_data.get("payment_method", "card")})
    latitude = parse_coordinate(request.GET.get("lat"), DEFAULT_LATITUDE)
    longitude = parse_coordinate(request.GET.get("lng"), DEFAULT_LONGITUDE)
    lowest_price_brand = get_lowest_price_summary()
    stations = get_nearby_station_cards(latitude=latitude, longitude=longitude)
    selected_station = None

    if order_data.get("station_id"):
        selected_station = get_station_card_by_id(order_data["station_id"])

    if not selected_station:
        selected_station = stations[0] if stations else FALLBACK_STATIONS[0]

    quantity = Decimal(str(order_data.get("quantity_litres", "25"))) if order_data.get("quantity_litres") else Decimal("25")
    price_value = (
        Decimal(str(order_data.get("amount")))
        if order_data.get("amount")
        else Decimal(str(lowest_price_brand["price"]))
    )
    total = price_value * quantity
    payment_choices = [{"value": value, "label": label} for value, label in form.fields["method"].choices]

    if request.method == "POST" and form.is_valid():
        _save_order_session(request, {"payment_method": form.cleaned_data["method"]})
        if request.user.is_authenticated:
            # Calculate order totals
            subtotal = price_value * quantity
            vat_amount = subtotal * Decimal("0.075")  # 7.5% VAT
            service_charge = Decimal("150.00")
            total_amount = subtotal + vat_amount + service_charge

            order = Order.objects.create(
                user=request.user,
                station=Station.objects.filter(id=order_data.get("station_id")).first() or Station.objects.filter(is_active=True).first(),
                fuel_type=order_data.get("fuel_type", FuelType.PETROL),
                quantity_litres=quantity,
                price_per_litre=price_value,
                subtotal=subtotal,
                vat_amount=vat_amount,
                service_charge=service_charge,
                total_amount=total_amount,
                dispenser_number=order_data.get("dispenser_number"),
                notes=order_data.get("notes", ""),
            )

            # Initialize Paystack payment
            try:
                callback_url = request.build_absolute_uri('/payment/callback/')
                payment_init = paystack_service.initialize_transaction(
                    email=request.user.email or f"{request.user.username}@example.com",
                    amount=total_amount,
                    reference=f"order_{order.id}",
                    callback_url=callback_url
                )

                # Create payment record
                Payment.objects.create(
                    order=order,
                    method=form.cleaned_data["method"],
                    amount=total_amount,
                    transaction_id=payment_init['data']['reference'],
                )

                # Redirect to Paystack payment page
                return redirect(payment_init['data']['authorization_url'])

            except Exception as e:
                messages.error(request, f"Payment initialization failed: {str(e)}")
                return redirect("core:payment")
        messages.info(request, "Sign in to save this payment and order.")

    return render(
        request,
        "core/payment.html",
        {
            "form": form,
            "payment_summary": {
                "station": f"{selected_station.get('station_code', '')} {selected_station['name']}".strip(),
                "fuel_type": order_data.get("fuel_type", FuelType.PETROL.label),
                "litres": quantity,
                "price_per_litre": f"N{price_value}",
                "subtotal": f"N{(price_value * quantity):,.2f}",
                "vat": f"N{(price_value * quantity * Decimal('0.075')):,.2f}",
                "service_charge": "N150.00",
                "total": f"N{(price_value * quantity * Decimal('1.075') + Decimal('150')):,.2f}",
            },
            "payment_choices": payment_choices,
            "selected_station_card": get_station_card_by_id(order_data["station_id"]) if order_data.get("station_id") else None,
            "order_data": order_data,
        },
    )


def price_tracker_page(request):
    lowest_price_brand = get_lowest_price_summary()
    brands = get_brand_price_cards()
    return render(
        request,
        "core/prices.html",
        {
            "lowest_price_brand": lowest_price_brand,
            "brands": brands,
        },
    )


def stations_page(request):
    latitude = parse_coordinate(request.GET.get("lat"), DEFAULT_LATITUDE)
    longitude = parse_coordinate(request.GET.get("lng"), DEFAULT_LONGITUDE)
    search_query = request.GET.get("q", "").strip()
    lowest_price_brand = get_lowest_price_summary()
    stations = get_nearby_station_cards(latitude=latitude, longitude=longitude, limit=12)
    if search_query:
        lowered = search_query.lower()
        stations = [
            station
            for station in stations
            if lowered in station["name"].lower()
            or lowered in station["inventory_note"].lower()
            or lowered in station["availability"].lower()
        ]
    return render(
        request,
        "core/stations.html",
        {
            "lowest_price_brand": lowest_price_brand,
            "stations": stations,
            "selected_latitude": latitude,
            "selected_longitude": longitude,
            "search_query": search_query,
        },
    )


def station_detail_page(request, station_id):
    station = get_object_or_404(
        Station.objects.select_related("brand"),
        id=station_id,
        is_active=True,
    )

    if request.method == "POST":
        form = StationUpdateForm(request.POST)
        if form.is_valid():
            update = StationUpdate.objects.create(
                station=station,
                reporter_name=form.cleaned_data["reporter_name"],
                fuel_type=form.cleaned_data["fuel_type"],
                status=form.cleaned_data["status"],
                price_per_litre=form.cleaned_data["price_per_litre"],
                note=form.cleaned_data["note"],
                source="admin" if request.user.is_authenticated and request.user.is_staff else "crowd",
                is_verified=bool(request.user.is_authenticated and request.user.is_staff),
            )

            StationAvailability.objects.update_or_create(
                station=station,
                fuel_type=update.fuel_type,
                defaults={
                    "status": update.status,
                    "notes": update.note,
                    "last_confirmed_at": update.reported_at,
                },
            )

            if update.price_per_litre is not None:
                FuelPrice.objects.create(
                    brand=station.brand,
                    fuel_type=update.fuel_type,
                    price_per_litre=update.price_per_litre,
                    source_note=f"Station update from {station.name}",
                )

            messages.success(request, "Station update submitted successfully.")
            return redirect("core:station-detail", station_id=station.id)
    else:
        form = StationUpdateForm(
            initial={
                "fuel_type": FuelType.PETROL,
                "status": AvailabilityStatus.AVAILABLE,
            }
        )

    station_card = get_station_card_by_id(station.id)
    if station_card is None:
        raise Http404("Station not found")

    price_history = list(
        station.brand.prices.filter(fuel_type=FuelType.PETROL)
        .order_by("-reported_at")[:5]
    )
    recent_updates = list(station.updates.order_by("-reported_at")[:8])
    station_services = [
        "Fueling",
        "Air pump",
        "Mini mart",
        "Restroom",
    ]

    return render(
        request,
        "core/station_detail.html",
        {
            "station": station,
            "station_card": station_card,
            "price_history": price_history,
            "recent_updates": recent_updates,
            "update_form": form,
            "station_services": station_services,
        },
    )


@cache_page(300)
def prices_api_view(request):
    return JsonResponse(
        {
            "lowest_price_brand": get_lowest_price_summary(),
            "brands": get_brand_price_cards(),
        }
    )


@cache_page(300)
def stations_api_view(request):
    latitude = parse_coordinate(request.GET.get("lat"), DEFAULT_LATITUDE)
    longitude = parse_coordinate(request.GET.get("lng"), DEFAULT_LONGITUDE)
    stations = get_nearby_station_cards(latitude=latitude, longitude=longitude)
    for station in stations:
        station["detail_url"] = (
            reverse("core:station-detail", args=[station["id"]])
            if station.get("id")
            else None
        )
    return JsonResponse(
        {
            "lowest_price_brand": get_lowest_price_summary(),
            "stations": stations,
            "requested_location": {
                "latitude": str(latitude),
                "longitude": str(longitude),
            },
        }
    )


def select_station_view(request, station_id):
    station = get_object_or_404(Station, id=station_id, is_active=True)
    _save_order_session(request, {"station_id": station_id})
    _clear_order_session_fields(
        request,
        "fuel_type",
        "dispenser_number",
        "quantity_litres",
        "amount",
        "payment_method",
    )
    return redirect("core:dispenser")


def qr_lookup_page(request):
    form = QRLookupForm(request.POST or None)
    error = None

    if request.method == "POST" and form.is_valid():
        qr_code = form.cleaned_data["qr_code"].strip().upper()
        try:
            receipt = Receipt.objects.get(qr_code=qr_code)
            return redirect("core:qr-scan", qr_code=receipt.qr_code)
        except Receipt.DoesNotExist:
            error = "No receipt found for that QR code."

    return render(
        request,
        "core/qr_lookup.html",
        {
            "form": form,
            "error": error,
        },
    )


def qr_camera_page(request):
    return render(request, "core/qr_camera.html")


def attendant_dashboard(request):
    if not request.user.is_authenticated or request.user.profile.role != UserRole.FUEL_ATTENDANT:
        return redirect("core:login")

    if request.method == "POST":
        # Create order from form
        quantity = Decimal(str(request.POST.get("quantity", "0")))
        station_id = request.POST.get("station")
        fuel_type = request.POST.get("fuel_type", FuelType.PETROL)
        customer_phone = request.POST.get("customer_phone")

        station = get_object_or_404(Station, id=station_id)
        price = FuelPrice.objects.filter(brand=station.brand, fuel_type=fuel_type).first()
        if not price:
            messages.error(request, "No price available for this fuel type.")
            return redirect("core:attendant-dashboard")

        order_owner = _get_or_create_order_user(request, customer_phone)
        if order_owner is None:
            messages.error(request, "Please log in before creating an attendant order.")
            return redirect("core:login")

        order = Order.objects.create(
            attendant=request.user,
            user=order_owner,
            station=station,
            fuel_type=fuel_type,
            quantity_litres=quantity,
            price_per_litre=price.price_per_litre,
        )
        order.status = OrderStatus.CONFIRMED
        order.save()

        # Generate QR code
        import uuid
        import qrcode
        from io import BytesIO
        from django.core.files.base import ContentFile

        qr_code_str = str(uuid.uuid4())[:8].upper()
        qr = qrcode.QRCode(version=1, box_size=10, border=5)
        qr.add_data(qr_code_str)
        qr.make(fit=True)
        img = qr.make_image(fill='black', back_color='white')

        buffer = BytesIO()
        img.save(buffer, format='PNG')
        buffer.seek(0)

        receipt = Receipt.objects.create(
            order=order,
            qr_code=qr_code_str,
            total_amount=order.total_amount,
            vat_amount=order.vat_amount,
            service_charge=order.service_charge,
        )
        receipt.qr_image.save(f'qr_{qr_code_str}.png', ContentFile(buffer.getvalue()), save=True)

        # Send SMS notification to customer
        if customer_phone:
            sms_message = f"GoFuel: Order confirmed! {quantity}L {fuel_type.title()} at {station.name}. QR: {qr_code_str}. Total: ₦{order.total_amount:.2f}"
            sms_service.send_sms(customer_phone, sms_message)

        messages.success(request, f"Order created. QR Code: {qr_code_str}. SMS sent to customer.")

        return render(request, "core/attendant_dashboard.html", {
            "qr_code": qr_code_str,
            "order": order,
            "receipt": receipt,
        })

    stations = Station.objects.filter(is_active=True)
    return render(request, "core/attendant_dashboard.html", {
        "stations": stations,
    })


def manager_dashboard(request):
    if not request.user.is_authenticated or request.user.profile.role != UserRole.STATION_MANAGER:
        return redirect("core:login")

    station = request.user.profile.station
    if not station:
        messages.error(request, "No station assigned.")
        return redirect("core:account")

    if request.method == "POST":
        if 'update_price' in request.POST:
            fuel_type = request.POST.get("fuel_type")
            price = float(request.POST.get("price", 0))
            FuelPrice.objects.create(
                brand=station.brand,
                fuel_type=fuel_type,
                price_per_litre=price,
                source_note=f"Manager update from {station.name}",
            )
            messages.success(request, "Price updated.")
            return redirect("core:manager-dashboard")

        elif 'update_order' in request.POST:
            order_id = request.POST.get("order_id")
            new_status = request.POST.get("status")
            try:
                order = Order.objects.get(id=order_id, station=station)
                order.status = new_status
                order.save()

                # Send SMS notification for status updates
                from core.services import sms_service
                if order.user and hasattr(order.user, 'profile') and order.user.profile.phone_number:
                    sms_message = f"GoFuel: Order #{order.id} status updated to {order.get_status_display()}"
                    sms_service.send_sms(order.user.profile.phone_number, sms_message)

                messages.success(request, f"Order #{order_id} status updated.")
            except Order.DoesNotExist:
                messages.error(request, "Order not found.")
            return redirect("core:manager-dashboard")

        elif 'update_inventory' in request.POST:
            fuel_type = request.POST.get("fuel_type")
            current_stock = float(request.POST.get("current_stock", 0))
            tank_capacity = float(request.POST.get("tank_capacity", 10000))
            reorder_point = float(request.POST.get("reorder_point", 1000))

            inventory, created = FuelInventory.objects.get_or_create(
                station=station,
                fuel_type=fuel_type,
                defaults={
                    'current_stock_litres': current_stock,
                    'tank_capacity_litres': tank_capacity,
                    'reorder_point_litres': reorder_point,
                    'updated_by': request.user,
                }
            )

            if not created:
                inventory.current_stock_litres = current_stock
                inventory.tank_capacity_litres = tank_capacity
                inventory.reorder_point_litres = reorder_point
                inventory.updated_by = request.user
                inventory.save()

            messages.success(request, f"{fuel_type.title()} inventory updated.")
            return redirect("core:manager-dashboard")

    # Analytics data
    today = timezone.now().date()
    this_month = today.replace(day=1)
    this_week = today - timezone.timedelta(days=today.weekday())
    yesterday = today - timezone.timedelta(days=1)
    last_week = this_week - timezone.timedelta(days=7)

    # Revenue analytics
    monthly_revenue = Order.objects.filter(
        station=station,
        created_at__date__gte=this_month,
        status__in=[OrderStatus.COMPLETED, OrderStatus.CONFIRMED]
    ).aggregate(total=Sum('total_amount'))['total'] or 0

    today_revenue = Order.objects.filter(
        station=station,
        created_at__date=today,
        status__in=[OrderStatus.COMPLETED, OrderStatus.CONFIRMED]
    ).aggregate(total=Sum('total_amount'))['total'] or 0

    yesterday_revenue = Order.objects.filter(
        station=station,
        created_at__date=yesterday,
        status__in=[OrderStatus.COMPLETED, OrderStatus.CONFIRMED]
    ).aggregate(total=Sum('total_amount'))['total'] or 0

    # Weekly revenue
    this_week_revenue = Order.objects.filter(
        station=station,
        created_at__date__gte=this_week,
        status__in=[OrderStatus.COMPLETED, OrderStatus.CONFIRMED]
    ).aggregate(total=Sum('total_amount'))['total'] or 0

    last_week_revenue = Order.objects.filter(
        station=station,
        created_at__date__gte=last_week,
        created_at__date__lt=this_week,
        status__in=[OrderStatus.COMPLETED, OrderStatus.CONFIRMED]
    ).aggregate(total=Sum('total_amount'))['total'] or 0

    # Order statistics
    total_orders_today = Order.objects.filter(station=station, created_at__date=today).count()
    total_orders_yesterday = Order.objects.filter(station=station, created_at__date=yesterday).count()
    pending_orders = Order.objects.filter(station=station, status=OrderStatus.PENDING).count()
    completed_orders_today = Order.objects.filter(
        station=station,
        created_at__date=today,
        status__in=[OrderStatus.COMPLETED, OrderStatus.CONFIRMED]
    ).count()

    # Average order value
    avg_order_value_today = 0
    if total_orders_today > 0:
        avg_order_value_today = today_revenue / total_orders_today

    avg_order_value_month = 0
    monthly_order_count = Order.objects.filter(
        station=station,
        created_at__date__gte=this_month,
        status__in=[OrderStatus.COMPLETED, OrderStatus.CONFIRMED]
    ).count()
    if monthly_order_count > 0:
        avg_order_value_month = monthly_revenue / monthly_order_count

    # Customer analytics
    total_customers_today = Order.objects.filter(
        station=station, created_at__date=today
    ).values('user').distinct().count()

    total_customers_month = Order.objects.filter(
        station=station, created_at__date__gte=this_month
    ).values('user').distinct().count()

    # Top customers this month
    top_customers = Order.objects.filter(
        station=station,
        created_at__date__gte=this_month,
        status__in=[OrderStatus.COMPLETED, OrderStatus.CONFIRMED]
    ).values('user__username', 'user__profile__phone_number').annotate(
        total_spent=Sum('total_amount'),
        order_count=Count('id')
    ).order_by('-total_spent')[:5]

    # Peak hours analysis (last 7 days)
    peak_hours = Order.objects.filter(
        station=station,
        created_at__date__gte=this_week
    ).extra(select={'hour': 'EXTRACT(hour FROM created_at)'}).values('hour').annotate(
        order_count=Count('id')
    ).order_by('-order_count')[:3]

    # Fuel type distribution
    fuel_stats = Order.objects.filter(
        station=station,
        created_at__date__gte=this_month
    ).values('fuel_type').annotate(
        count=Count('id'),
        volume=Sum('quantity_litres'),
        revenue=Sum('total_amount')
    ).order_by('-count')

    # Performance metrics
    conversion_rate = 0
    if total_orders_today > 0:
        conversion_rate = (completed_orders_today / total_orders_today) * 100

    # Revenue growth
    revenue_growth_weekly = 0
    if last_week_revenue > 0:
        revenue_growth_weekly = ((this_week_revenue - last_week_revenue) / last_week_revenue) * 100

    revenue_growth_daily = 0
    if yesterday_revenue > 0:
        revenue_growth_daily = ((today_revenue - yesterday_revenue) / yesterday_revenue) * 100

    # Fuel type distribution
    fuel_stats = Order.objects.filter(
        station=station,
        created_at__date__gte=this_month
    ).values('fuel_type').annotate(
        count=Count('id'),
        volume=Sum('quantity_litres'),
        revenue=Sum('total_amount')
    ).order_by('-count')

    # Inventory data
    inventory = FuelInventory.objects.filter(station=station).select_related('updated_by')
    inventory_summary = []
    for fuel_value, fuel_label in FuelType.choices:
        item = inventory.filter(fuel_type=fuel_value).first()
        inventory_summary.append(
            {
                "fuel_type": fuel_value,
                "label": fuel_label,
                "current_stock": item.current_stock_litres if item else None,
                "updated_at": item.updated_at if item else None,
            }
        )

    # Recent data
    prices = FuelPrice.objects.filter(brand=station.brand).order_by("-reported_at")[:10]
    recent_orders = Order.objects.filter(station=station).select_related('user').order_by("-created_at")[:20]

    # Attendants at this station
    attendants = UserProfile.objects.filter(
        role=UserRole.FUEL_ATTENDANT,
        station=station
    ).select_related('user')

    return render(request, "core/manager_dashboard.html", {
        "station": station,
        "prices": prices,
        "recent_orders": recent_orders,
        "attendants": attendants,
        "inventory": inventory,
        "inventory_summary": inventory_summary,
        "fuel_types": FuelType.choices,
        "analytics": {
            "monthly_revenue": monthly_revenue,
            "today_revenue": today_revenue,
            "yesterday_revenue": yesterday_revenue,
            "this_week_revenue": this_week_revenue,
            "last_week_revenue": last_week_revenue,
            "total_orders_today": total_orders_today,
            "total_orders_yesterday": total_orders_yesterday,
            "pending_orders": pending_orders,
            "completed_orders_today": completed_orders_today,
            "avg_order_value_today": avg_order_value_today,
            "avg_order_value_month": avg_order_value_month,
            "total_customers_today": total_customers_today,
            "total_customers_month": total_customers_month,
            "top_customers": top_customers,
            "peak_hours": peak_hours,
            "fuel_stats": fuel_stats,
            "conversion_rate": conversion_rate,
            "revenue_growth_weekly": revenue_growth_weekly,
            "revenue_growth_daily": revenue_growth_daily,
        },
    })


def qr_scan_page(request, qr_code):
    try:
        receipt = Receipt.objects.get(qr_code=qr_code)
        order = receipt.order
        return render(request, "core/qr_scan.html", {
            "receipt": receipt,
            "order": order,
        })
    except Receipt.DoesNotExist:
        raise Http404("Receipt not found")


def offline_page(request):
    return render(
        request,
        "core/offline.html",
    )


def payment_callback(request):
    """Handle Paystack payment callback"""
    reference = request.GET.get('reference')
    if not reference:
        messages.error(request, "Invalid payment reference")
        return redirect("core:account")

    try:
        from core.services import paystack_service
        verification = paystack_service.verify_transaction(reference)

        if verification['data']['status'] == 'success':
            # Find the payment and update it
            payment = Payment.objects.get(transaction_id=reference)
            payment.is_successful = True
            payment.paid_at = timezone.now()
            payment.save()

            # Update order status
            order = payment.order
            order.status = OrderStatus.CONFIRMED
            order.save()

            # Generate QR code and receipt
            import uuid
            import qrcode
            from io import BytesIO
            from django.core.files.base import ContentFile

            qr_code_str = str(uuid.uuid4())[:8].upper()
            qr = qrcode.QRCode(version=1, box_size=10, border=5)
            qr.add_data(qr_code_str)
            qr.make(fit=True)
            img = qr.make_image(fill='black', back_color='white')

            buffer = BytesIO()
            img.save(buffer, format='PNG')
            buffer.seek(0)

            receipt = Receipt.objects.create(
                order=order,
                qr_code=qr_code_str,
                total_amount=order.total_amount,
                vat_amount=order.vat_amount,
                service_charge=order.service_charge,
                paid_at=timezone.now(),
            )
            receipt.qr_image.save(f'qr_{qr_code_str}.png', ContentFile(buffer.getvalue()), save=True)

            # Send SMS notification
            if order.user and hasattr(order.user, 'profile') and order.user.profile.phone_number:
                sms_message = f"GoFuel: Payment confirmed! Order #{order.id} for {order.quantity_litres}L {order.get_fuel_type_display()}. QR: {qr_code_str}"
                sms_service.send_sms(order.user.profile.phone_number, sms_message)

            messages.success(request, f"Payment successful! Your QR code is: {qr_code_str}")
        else:
            messages.error(request, "Payment was not successful")

    except Payment.DoesNotExist:
        messages.error(request, "Payment record not found")
    except Exception as e:
        messages.error(request, f"Payment verification failed: {str(e)}")

    # Clear session
    if "go_fuel_order" in request.session:
        del request.session["go_fuel_order"]

    return redirect("core:account")
