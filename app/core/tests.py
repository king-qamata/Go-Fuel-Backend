from django.test import SimpleTestCase, TestCase
from django.urls import reverse
from unittest.mock import patch

from core.models import AvailabilityStatus, FuelBrand, FuelPrice, FuelType, Station, StationAvailability, StationUpdate, Order, OrderStatus, Receipt, UserProfile, UserRole


class HealthcheckViewTests(SimpleTestCase):
    def test_healthcheck_returns_expected_payload(self):
        response = self.client.get(reverse("api:healthcheck"))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.json(),
            {
                "status": "ok",
                "debug": False,
                "service": "go-fuel-backend",
            },
        )


from django.contrib.auth.models import User


class OrderModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpass')
        self.brand = FuelBrand.objects.create(name="Test Brand")
        self.station = Station.objects.create(
            brand=self.brand,
            name="Test Station",
            address="Test Address",
            latitude=0.0,
            longitude=0.0,
        )

    def test_order_status_default(self):
        # Test that order status defaults to pending
        order = Order.objects.create(
            user=self.user,
            station=self.station,
            fuel_type='petrol',
            quantity_litres=10,
            price_per_litre=100,
        )
        self.assertEqual(order.status, OrderStatus.PENDING)

    def test_order_calculation(self):
        order = Order(
            user=self.user,
            station=self.station,
            fuel_type='petrol',
            quantity_litres=10,
            price_per_litre=100,
        )
        order.save()
        self.assertEqual(order.subtotal, 1000)
        self.assertEqual(order.vat_amount, 75)  # 7.5%
        self.assertEqual(order.service_charge, 150)
        self.assertEqual(order.total_amount, 1225)


class FrontendExperienceTests(TestCase):
    def test_login_page_renders(self):
        response = self.client.get(reverse("core:login"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Customer Login")
        self.assertContains(response, "Phone Number")

    def test_payment_page_renders(self):
        response = self.client.get(reverse("core:payment"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Payment method")
        self.assertContains(response, "NNPC Mega Station Ikeja")

    def test_prices_page_highlights_lowest_price(self):
        response = self.client.get(reverse("core:prices"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Find the lowest fuel price near you")
        self.assertContains(response, "NNPC")
        self.assertContains(response, "Use my location")

    def test_stations_page_lists_three_nearby_stations(self):
        response = self.client.get(reverse("core:stations"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "NNPC Mega Station Ikeja")
        self.assertContains(response, "Refresh with my location")

    def test_landing_page_contains_order_toggle_button(self):
        response = self.client.get(reverse("core:landing"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Order")
        self.assertContains(response, "Open the order page")

    def test_manifest_and_service_worker_are_served(self):
        manifest = self.client.get(reverse("core:manifest"))
        service_worker = self.client.get(reverse("core:service-worker"))

        self.assertEqual(manifest.status_code, 200)
        self.assertEqual(service_worker.status_code, 200)
        self.assertEqual(manifest["Content-Type"], "application/json")
        self.assertEqual(service_worker["Content-Type"], "application/javascript")
        payload = manifest.json()
        self.assertTrue(any(icon["src"].endswith(".png") for icon in payload["icons"]))
        self.assertIn("screenshots", payload)
        self.assertTrue(any(screenshot.get("form_factor") == "wide" for screenshot in payload["screenshots"]))
        self.assertTrue(any("form_factor" not in screenshot or screenshot.get("form_factor") != "wide" for screenshot in payload["screenshots"]))

    def test_payment_methods_page_allows_selection(self):
        session = self.client.session
        session["go_fuel_order"] = {"station_id": 1}
        session.save()

        response = self.client.post(reverse("core:payment-methods"), {"method": "momo"})

        self.assertEqual(response.status_code, 302)
        self.assertEqual(response.url, reverse("core:payment"))

    def test_order_update_page_updates_session_inline(self):
        brand = FuelBrand.objects.create(name="Inline Brand")
        station = Station.objects.create(
            brand=brand,
            name="Inline Station",
            address="1 Inline Street",
            latitude=0.0,
            longitude=0.0,
        )
        session = self.client.session
        session["go_fuel_order"] = {"station_id": station.id}
        session.save()

        response = self.client.post(
            reverse("core:order-update"),
            {
                "field": "quantity",
                "quantity_litres": "18.25",
            },
        )

        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertTrue(payload["ok"])
        self.assertEqual(payload["summary"]["quantity"], "18.25 L")
        self.assertEqual(self.client.session["go_fuel_order"]["quantity_litres"], "18.25")

    def test_qr_camera_page_renders(self):
        response = self.client.get(reverse("core:qr-camera"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Scan receipt QR")

    def test_qr_lookup_redirects_to_receipt(self):
        user = User.objects.create_user(username="qr-user", password="pass")
        brand = FuelBrand.objects.create(name="QR Brand")
        station = Station.objects.create(
            brand=brand,
            name="QR Station",
            address="1 QR Street",
            latitude=0.0,
            longitude=0.0,
        )
        order = Order.objects.create(
            user=user,
            station=station,
            fuel_type=FuelType.PETROL,
            quantity_litres=5,
            price_per_litre=100,
        )
        receipt = Receipt.objects.create(
            order=order,
            qr_code="ABCD1234",
            total_amount=order.total_amount,
            vat_amount=order.vat_amount,
            service_charge=order.service_charge,
        )

        response = self.client.post(reverse("core:qr-lookup"), {"qr_code": "abcd1234"})

        self.assertEqual(response.status_code, 302)
        self.assertEqual(response.url, reverse("core:qr-scan", args=[receipt.qr_code]))

    @patch("core.services.paystack_service.initialize_transaction")
    def test_payment_page_creates_decimal_safe_order(self, mock_initialize_transaction):
        mock_initialize_transaction.return_value = {
            "data": {
                "reference": "order_1",
                "authorization_url": "https://example.com/pay",
            }
        }
        user = User.objects.create_user(username="pay-user", password="pass", email="pay@example.com")
        brand = FuelBrand.objects.create(name="Pay Brand")
        station = Station.objects.create(
            brand=brand,
            name="Pay Station",
            address="1 Pay Street",
            latitude=0.0,
            longitude=0.0,
        )
        FuelPrice.objects.create(
            brand=brand,
            fuel_type=FuelType.PETROL,
            price_per_litre="870.00",
        )
        session = self.client.session
        session["go_fuel_order"] = {
            "station_id": station.id,
            "fuel_type": FuelType.PETROL,
            "dispenser_number": 2,
            "quantity_litres": "12.50",
            "amount": "870.00",
            "payment_method": "card",
        }
        session.save()
        self.client.force_login(user)

        response = self.client.post(reverse("core:payment"), {"method": "card"}, follow=False)

        self.assertEqual(response.status_code, 302)
        self.assertEqual(response.url, "https://example.com/pay")
        order = Order.objects.get(user=user, station=station)
        self.assertEqual(str(order.quantity_litres), "12.50")
        self.assertEqual(str(order.price_per_litre), "870.00")
        self.assertEqual(str(order.subtotal), "10875.00")

    @patch("core.views.sms_service.send_sms")
    def test_attendant_dashboard_uses_authenticated_user_as_order_owner(self, mock_send_sms):
        attendant = User.objects.create_user(username="attendant", password="pass")
        UserProfile.objects.create(user=attendant, phone_number="08000000000", role=UserRole.FUEL_ATTENDANT)
        brand = FuelBrand.objects.create(name="Attendant Brand")
        station = Station.objects.create(
            brand=brand,
            name="Attendant Station",
            address="1 Attendant Road",
            latitude=0.0,
            longitude=0.0,
        )
        FuelPrice.objects.create(
            brand=brand,
            fuel_type=FuelType.PETROL,
            price_per_litre="900.00",
        )
        self.client.force_login(attendant)

        response = self.client.post(
            reverse("core:attendant-dashboard"),
            {
                "quantity": "10",
                "station": station.id,
                "fuel_type": FuelType.PETROL,
                "customer_phone": "",
            },
        )

        self.assertEqual(response.status_code, 200)
        self.assertTrue(Order.objects.filter(attendant=attendant, station=station).exists())

class FuelDataExperienceTests(TestCase):
    def setUp(self):
        self.nnpc = FuelBrand.objects.create(name="NNPC", slug="nnpc")
        self.mrs = FuelBrand.objects.create(name="MRS", slug="mrs")

        FuelPrice.objects.create(
            brand=self.nnpc,
            fuel_type=FuelType.PETROL,
            price_per_litre="870.00",
            source_note="Morning update",
        )
        FuelPrice.objects.create(
            brand=self.mrs,
            fuel_type=FuelType.PETROL,
            price_per_litre="885.00",
            source_note="Morning update",
        )

        station_one = Station.objects.create(
            brand=self.nnpc,
            name="NNPC Mega Station Ikeja",
            address="1 Allen Avenue, Ikeja",
            area="Ikeja",
            latitude="6.601900",
            longitude="3.351400",
        )
        station_two = Station.objects.create(
            brand=self.nnpc,
            name="NNPC Ojodu Service Point",
            address="12 Ojodu Road, Lagos",
            area="Ojodu",
            latitude="6.630100",
            longitude="3.362200",
        )
        station_three = Station.objects.create(
            brand=self.nnpc,
            name="NNPC Maryland Express",
            address="5 Ikorodu Road, Maryland",
            area="Maryland",
            latitude="6.573200",
            longitude="3.367500",
        )

        for station, status, note in [
            (station_one, AvailabilityStatus.AVAILABLE, "Premium Motor Spirit confirmed 18 mins ago"),
            (station_two, AvailabilityStatus.LOW_STOCK, "Queues building, stock may finish this evening"),
            (station_three, AvailabilityStatus.UNAVAILABLE, "No active fuel availability report yet"),
        ]:
            StationAvailability.objects.create(
                station=station,
                fuel_type=FuelType.PETROL,
                status=status,
                notes=note,
            )

    def test_prices_page_uses_database_records(self):
        response = self.client.get(reverse("core:prices"))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "NNPC")
        self.assertContains(response, "N870/L")
        self.assertContains(response, "2 of 3 near you")

    def test_stations_api_returns_three_ranked_stations(self):
        response = self.client.get(reverse("api:stations"))

        self.assertEqual(response.status_code, 200)
        payload = response.json()

        self.assertEqual(payload["lowest_price_brand"]["brand"], "NNPC")
        self.assertEqual(len(payload["stations"]), 3)
        self.assertEqual(payload["stations"][0]["name"], "NNPC Mega Station Ikeja")
        self.assertEqual(payload["stations"][1]["availability"], "Low stock")

    def test_stations_api_accepts_location_coordinates(self):
        response = self.client.get(
            reverse("api:stations"),
            {"lat": "6.573200", "lng": "3.367500"},
        )

        self.assertEqual(response.status_code, 200)
        payload = response.json()

        self.assertEqual(payload["requested_location"]["latitude"], "6.573200")
        self.assertEqual(payload["requested_location"]["longitude"], "3.367500")
        self.assertEqual(payload["stations"][0]["name"], "NNPC Maryland Express")

    def test_station_detail_page_shows_history_and_updates(self):
        station = Station.objects.get(name="NNPC Mega Station Ikeja")
        StationUpdate.objects.create(
            station=station,
            reporter_name="Ada",
            fuel_type=FuelType.PETROL,
            status=AvailabilityStatus.AVAILABLE,
            note="Fuel available and queue is light",
            source="crowd",
        )

        response = self.client.get(
            reverse("core:station-detail", args=[station.id])
        )

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, "Recent price updates")
        self.assertContains(response, "Fuel available and queue is light")
        self.assertContains(response, station.address)

    def test_station_detail_post_creates_update(self):
        station = Station.objects.get(name="NNPC Mega Station Ikeja")
        response = self.client.post(
            reverse("core:station-detail", args=[station.id]),
            {
                "reporter_name": "Kemi",
                "fuel_type": FuelType.PETROL,
                "status": AvailabilityStatus.LOW_STOCK,
                "price_per_litre": "872.00",
                "note": "Stock is running low this afternoon",
            },
            follow=True,
        )

        self.assertEqual(response.status_code, 200)
        self.assertTrue(StationUpdate.objects.filter(station=station, reporter_name="Kemi").exists())
        self.assertTrue(
            FuelPrice.objects.filter(brand=station.brand, price_per_litre="872.00").exists()
        )
