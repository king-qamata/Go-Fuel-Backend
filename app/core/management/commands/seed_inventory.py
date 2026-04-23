from django.core.management.base import BaseCommand
from django.utils import timezone
from core.models import FuelInventory, Station

class Command(BaseCommand):
    help = 'Seed demo fuel inventory data for testing'

    def handle(self, *args, **options):
        # Get the first station or create a demo one
        station = Station.objects.first()
        if not station:
            self.stdout.write(self.style.WARNING('No stations found. Please create a station first.'))
            return

        # Create demo inventory data
        inventory_data = [
            {
                'fuel_type': 'petrol',
                'current_stock_litres': 8500.0,
                'tank_capacity_litres': 10000.0,
                'reorder_point_litres': 1000.0,
            },
            {
                'fuel_type': 'diesel',
                'current_stock_litres': 6500.0,
                'tank_capacity_litres': 8000.0,
                'reorder_point_litres': 800.0,
            },
            {
                'fuel_type': 'gas',
                'current_stock_litres': 200.0,
                'tank_capacity_litres': 2000.0,
                'reorder_point_litres': 200.0,
            },
        ]

        for data in inventory_data:
            inventory, created = FuelInventory.objects.get_or_create(
                station=station,
                fuel_type=data['fuel_type'],
                defaults=data
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created inventory for {data["fuel_type"]}'))
            else:
                # Update existing inventory
                for key, value in data.items():
                    setattr(inventory, key, value)
                inventory.save()
                self.stdout.write(self.style.SUCCESS(f'Updated inventory for {data["fuel_type"]}'))

        self.stdout.write(self.style.SUCCESS('Demo inventory data seeded successfully!'))