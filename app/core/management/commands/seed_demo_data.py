from django.core.management.base import BaseCommand
from django.utils.text import slugify

from core.models import AvailabilityStatus, FuelBrand, FuelPrice, FuelType, Station, StationAvailability


class Command(BaseCommand):
    help = "Seed demo fuel brands, prices, stations, and availability records for GoFuel."

    def handle(self, *args, **options):
        brands = [
            {"name": "NNPC", "slug": "nnpc", "price": "870.00"},
            {"name": "MRS", "slug": "mrs", "price": "885.00"},
            {"name": "TotalEnergies", "slug": "totalenergies", "price": "895.00"},
            {"name": "Mobil", "slug": "mobil", "price": "910.00"},
        ]

        seeded_brands = {}
        for item in brands:
            slug = slugify(item["name"])
            brand, _ = FuelBrand.objects.update_or_create(
                slug=slug,
                defaults={
                    "name": item["name"],
                    "is_active": True,
                },
            )
            FuelPrice.objects.update_or_create(
                brand=brand,
                fuel_type=FuelType.PETROL,
                defaults={
                    "price_per_litre": item["price"],
                    "source_note": "Seeded demo data",
                },
            )
            seeded_brands[item["slug"]] = brand

        stations = [
            {
                "brand": "nnpc",
                "name": "NNPC Mega Station Ikeja",
                "address": "1 Allen Avenue, Ikeja",
                "area": "Ikeja",
                "latitude": "6.601900",
                "longitude": "3.351400",
                "status": AvailabilityStatus.AVAILABLE,
                "notes": "Premium Motor Spirit confirmed 18 mins ago",
            },
            {
                "brand": "nnpc",
                "name": "NNPC Ojodu Service Point",
                "address": "12 Ojodu Road, Lagos",
                "area": "Ojodu",
                "latitude": "6.630100",
                "longitude": "3.362200",
                "status": AvailabilityStatus.LOW_STOCK,
                "notes": "Queues building, stock may finish this evening",
            },
            {
                "brand": "nnpc",
                "name": "NNPC Maryland Express",
                "address": "5 Ikorodu Road, Maryland",
                "area": "Maryland",
                "latitude": "6.573200",
                "longitude": "3.367500",
                "status": AvailabilityStatus.UNAVAILABLE,
                "notes": "No active fuel availability report yet",
            },
            {
                "brand": "mrs",
                "name": "MRS Lekki Phase 1",
                "address": "14 Admiralty Way, Lekki",
                "area": "Lekki",
                "latitude": "6.447800",
                "longitude": "3.472900",
                "status": AvailabilityStatus.AVAILABLE,
                "notes": "Strong supply reported this morning",
            },
            {
                "brand": "totalenergies",
                "name": "TotalEnergies Yaba",
                "address": "33 Herbert Macaulay Way, Yaba",
                "area": "Yaba",
                "latitude": "6.509500",
                "longitude": "3.370900",
                "status": AvailabilityStatus.AVAILABLE,
                "notes": "Fuel available with moderate queue",
            },
            {
                "brand": "mobil",
                "name": "Mobil Surulere Central",
                "address": "21 Adeniran Ogunsanya, Surulere",
                "area": "Surulere",
                "latitude": "6.500400",
                "longitude": "3.348600",
                "status": AvailabilityStatus.AVAILABLE,
                "notes": "Regular availability check passed",
            },
        ]

        for item in stations:
            station, _ = Station.objects.update_or_create(
                name=item["name"],
                defaults={
                    "brand": seeded_brands[item["brand"]],
                    "address": item["address"],
                    "area": item["area"],
                    "latitude": item["latitude"],
                    "longitude": item["longitude"],
                    "is_active": True,
                },
            )
            StationAvailability.objects.update_or_create(
                station=station,
                fuel_type=FuelType.PETROL,
                defaults={
                    "status": item["status"],
                    "notes": item["notes"],
                },
            )

        self.stdout.write(self.style.SUCCESS("Demo GoFuel data seeded successfully."))
