from django.test import SimpleTestCase, TestCase
from django.urls import reverse

from core.models import AvailabilityStatus, FuelBrand, FuelPrice, FuelType, Station, StationAvailability, StationUpdate, Order, OrderStatus


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
