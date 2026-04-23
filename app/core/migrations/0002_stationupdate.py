from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="StationUpdate",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("reporter_name", models.CharField(max_length=120)),
                ("fuel_type", models.CharField(choices=[("petrol", "Petrol"), ("diesel", "Diesel"), ("gas", "Gas")], default="petrol", max_length=20)),
                ("status", models.CharField(choices=[("available", "Available"), ("low_stock", "Low stock"), ("unavailable", "Unavailable")], max_length=20)),
                ("price_per_litre", models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ("note", models.CharField(max_length=255)),
                ("source", models.CharField(default="crowd", max_length=20)),
                ("is_verified", models.BooleanField(default=False)),
                ("reported_at", models.DateTimeField(default=django.utils.timezone.now)),
                ("station", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="updates", to="core.station")),
            ],
            options={"ordering": ["-reported_at"]},
        ),
    ]
