from __future__ import annotations

from decimal import Decimal
from decimal import InvalidOperation

from core.models import AvailabilityStatus, FuelBrand, FuelPrice, FuelType, Station, StationAvailability


DEFAULT_LATITUDE = Decimal("6.601838")
DEFAULT_LONGITUDE = Decimal("3.351486")


FALLBACK_LOWEST_PRICE_BRAND = {
    "brand": "NNPC",
    "price": 870,
    "change": "-25 today",
    "availability": "2 of 3 stations confirmed in stock",
}

FALLBACK_BRANDS = [
    {"name": "NNPC", "price": "N870/L", "availability": "2 of 3 near you"},
    {"name": "MRS", "price": "N885/L", "availability": "3 of 3 near you"},
    {"name": "TotalEnergies", "price": "N895/L", "availability": "1 of 3 near you"},
    {"name": "Mobil", "price": "N910/L", "availability": "3 of 3 near you"},
]

FALLBACK_STATIONS = [
    {
        "id": None,
        "station_code": "2001",
        "name": "NNPC Mega Station Ikeja",
        "distance": "1.2 km",
        "price": "N870/L",
        "availability": "Available",
        "inventory_note": "Premium Motor Spirit confirmed 18 mins ago",
        "status_tone": "available",
        "latitude": 6.601900,
        "longitude": 3.351400,
    },
    {
        "id": None,
        "station_code": "2002",
        "name": "NNPC Ojodu Service Point",
        "distance": "2.8 km",
        "price": "N870/L",
        "availability": "Low stock",
        "inventory_note": "Queues building, stock may finish this evening",
        "status_tone": "warning",
        "latitude": 6.630100,
        "longitude": 3.362200,
    },
    {
        "id": None,
        "station_code": "2003",
        "name": "NNPC Maryland Express",
        "distance": "4.1 km",
        "price": "N870/L",
        "availability": "Unavailable",
        "inventory_note": "No active fuel availability report yet",
        "status_tone": "empty",
        "latitude": 6.573200,
        "longitude": 3.367500,
    },
]


def _status_tone(status: str) -> str:
    if status == AvailabilityStatus.AVAILABLE:
        return "available"
    if status == AvailabilityStatus.LOW_STOCK:
        return "warning"
    return "empty"


def parse_coordinate(value: str | None, default: Decimal) -> Decimal:
    if value in (None, ""):
        return default
    try:
        return Decimal(value)
    except (InvalidOperation, TypeError):
        return default


def _distance_km(station: Station, latitude: Decimal, longitude: Decimal) -> float:
    lat_diff = float(Decimal(station.latitude) - latitude)
    lng_diff = float(Decimal(station.longitude) - longitude)
    return ((lat_diff ** 2 + lng_diff ** 2) ** 0.5) * 111


def _latest_price_for_brand(brand: FuelBrand, fuel_type: str) -> FuelPrice | None:
    return (
        brand.prices.filter(fuel_type=fuel_type)
        .order_by("price_per_litre", "-reported_at")
        .first()
    )


def _latest_availability_for_station(station: Station, fuel_type: str) -> StationAvailability | None:
    return (
        station.availabilities.filter(fuel_type=fuel_type)
        .order_by("-last_confirmed_at")
        .first()
    )


def get_brand_price_cards(fuel_type: str = FuelType.PETROL) -> list[dict]:
    brands = FuelBrand.objects.filter(is_active=True).prefetch_related("prices", "stations__availabilities")
    cards = []

    for brand in brands:
        latest_price = _latest_price_for_brand(brand, fuel_type)
        if latest_price is None:
            continue

        stations = brand.stations.filter(is_active=True)
        in_stock_count = 0
        for station in stations:
            availability = _latest_availability_for_station(station, fuel_type)
            if availability and availability.status != AvailabilityStatus.UNAVAILABLE:
                in_stock_count += 1

        cards.append(
            {
                "name": brand.name,
                "price_value": latest_price.price_per_litre,
                "price": f"N{int(latest_price.price_per_litre)}/L",
                "availability": f"{in_stock_count} of {stations.count()} near you",
            }
        )

    if not cards:
        return FALLBACK_BRANDS

    return sorted(cards, key=lambda card: (card["price_value"], card["name"]))


def get_lowest_price_summary(fuel_type: str = FuelType.PETROL) -> dict:
    brand_cards = get_brand_price_cards(fuel_type=fuel_type)
    if brand_cards and "price_value" in brand_cards[0]:
        winning_card = brand_cards[0]
        return {
            "brand": winning_card["name"],
            "price": int(winning_card["price_value"]),
            "change": "Live price data",
            "availability": winning_card["availability"],
        }
    return FALLBACK_LOWEST_PRICE_BRAND


def get_nearby_station_cards(
    fuel_type: str = FuelType.PETROL,
    latitude: Decimal = DEFAULT_LATITUDE,
    longitude: Decimal = DEFAULT_LONGITUDE,
    limit: int = 3,
) -> list[dict]:
    summary = get_lowest_price_summary(fuel_type=fuel_type)
    brand = FuelBrand.objects.filter(name=summary["brand"], is_active=True).first()
    if brand is None:
        return FALLBACK_STATIONS

    latest_price = _latest_price_for_brand(brand, fuel_type)
    stations = list(brand.stations.filter(is_active=True))
    if not stations:
        return FALLBACK_STATIONS

    ranked_stations = sorted(
        stations,
        key=lambda station: _distance_km(station, latitude, longitude),
    )[:limit]

    cards = []
    for station in ranked_stations:
        distance = _distance_km(station, latitude, longitude)
        availability = _latest_availability_for_station(station, fuel_type)
        status = availability.status if availability else AvailabilityStatus.UNAVAILABLE
        note = availability.notes if availability and availability.notes else "No active fuel availability report yet"
        cards.append(
            {
                "id": station.id,
                "station_code": f"{2000 + station.id}",
                "name": station.name,
                "distance": f"{distance:.1f} km",
                "price": f"N{int(latest_price.price_per_litre)}/L" if latest_price else "N/A",
                "availability": AvailabilityStatus(status).label,
                "inventory_note": note,
                "status_tone": _status_tone(status),
                "latitude": float(station.latitude),
                "longitude": float(station.longitude),
            }
        )

    return cards if cards else FALLBACK_STATIONS


def get_station_card_by_id(
    station_id: int,
    fuel_type: str = FuelType.PETROL,
) -> dict | None:
    station = (
        Station.objects.filter(id=station_id, is_active=True)
        .select_related("brand")
        .first()
    )
    if station is None:
        return None

    latest_price = _latest_price_for_brand(station.brand, fuel_type)
    availability = _latest_availability_for_station(station, fuel_type)
    status = availability.status if availability else AvailabilityStatus.UNAVAILABLE
    note = availability.notes if availability and availability.notes else "No active fuel availability report yet"

    return {
        "id": station.id,
        "station_code": f"{2000 + station.id}",
        "name": station.name,
        "brand": station.brand.name,
        "address": station.address,
        "area": station.area,
        "price": f"N{int(latest_price.price_per_litre)}/L" if latest_price else "N/A",
        "price_value": float(latest_price.price_per_litre) if latest_price else None,
        "availability": AvailabilityStatus(status).label,
        "inventory_note": note,
        "status_tone": _status_tone(status),
        "latitude": float(station.latitude),
        "longitude": float(station.longitude),
    }


# Payment and SMS Services

import requests
from django.conf import settings
import uuid


class PaystackPaymentService:
    """Paystack payment integration service"""

    BASE_URL = "https://api.paystack.co"
    SECRET_KEY = getattr(settings, 'PAYSTACK_SECRET_KEY', '')

    @classmethod
    def initialize_transaction(cls, email, amount, reference=None, callback_url=None):
        """Initialize a payment transaction"""
        if not cls.SECRET_KEY:
            raise ValueError("Paystack secret key not configured")

        if reference is None:
            reference = str(uuid.uuid4())

        url = f"{cls.BASE_URL}/transaction/initialize"
        headers = {
            "Authorization": f"Bearer {cls.SECRET_KEY}",
            "Content-Type": "application/json"
        }

        data = {
            "email": email,
            "amount": int(amount * 100),  # Convert to kobo
            "reference": reference,
            "callback_url": callback_url,
        }

        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()

        return response.json()

    @classmethod
    def verify_transaction(cls, reference):
        """Verify a payment transaction"""
        if not cls.SECRET_KEY:
            raise ValueError("Paystack secret key not configured")

        url = f"{cls.BASE_URL}/transaction/verify/{reference}"
        headers = {
            "Authorization": f"Bearer {cls.SECRET_KEY}",
        }

        response = requests.get(url, headers=headers)
        response.raise_for_status()

        return response.json()

    @classmethod
    def get_transaction_status(cls, reference):
        """Get transaction status"""
        result = cls.verify_transaction(reference)
        return result.get('data', {}).get('status')


class TwilioSMSService:
    """Twilio SMS service for notifications"""

    def __init__(self):
        try:
            from twilio.rest import Client
            self.account_sid = getattr(settings, 'TWILIO_ACCOUNT_SID', '')
            self.auth_token = getattr(settings, 'TWILIO_AUTH_TOKEN', '')
            self.from_number = getattr(settings, 'TWILIO_FROM_NUMBER', '')
            self.client = Client(self.account_sid, self.auth_token) if self.account_sid and self.auth_token else None
        except ImportError:
            self.client = None

    def send_sms(self, to_number, message):
        """Send SMS message"""
        if not self.client:
            print(f"SMS Mock: To {to_number}: {message}")
            return {"status": "mock_sent"}

        try:
            message = self.client.messages.create(
                body=message,
                from_=self.from_number,
                to=to_number
            )
            return {"status": "sent", "sid": message.sid}
        except Exception as e:
            return {"status": "failed", "error": str(e)}


# Global instances
paystack_service = PaystackPaymentService()
sms_service = TwilioSMSService()
