from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="FuelBrand",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=100, unique=True)),
                ("slug", models.SlugField(max_length=120, unique=True)),
                ("is_active", models.BooleanField(default=True)),
            ],
            options={"ordering": ["name"]},
        ),
        migrations.CreateModel(
            name="FuelPrice",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("fuel_type", models.CharField(choices=[("petrol", "Petrol"), ("diesel", "Diesel"), ("gas", "Gas")], default="petrol", max_length=20)),
                ("price_per_litre", models.DecimalField(decimal_places=2, max_digits=10)),
                ("source_note", models.CharField(blank=True, max_length=255)),
                ("reported_at", models.DateTimeField(default=django.utils.timezone.now)),
                ("brand", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="prices", to="core.fuelbrand")),
            ],
            options={"ordering": ["price_per_litre", "-reported_at"]},
        ),
        migrations.CreateModel(
            name="Station",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("name", models.CharField(max_length=140)),
                ("address", models.CharField(max_length=255)),
                ("area", models.CharField(blank=True, max_length=120)),
                ("latitude", models.DecimalField(decimal_places=6, max_digits=9)),
                ("longitude", models.DecimalField(decimal_places=6, max_digits=9)),
                ("is_active", models.BooleanField(default=True)),
                ("brand", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="stations", to="core.fuelbrand")),
            ],
            options={"ordering": ["name"]},
        ),
        migrations.CreateModel(
            name="StationAvailability",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("fuel_type", models.CharField(choices=[("petrol", "Petrol"), ("diesel", "Diesel"), ("gas", "Gas")], default="petrol", max_length=20)),
                ("status", models.CharField(choices=[("available", "Available"), ("low_stock", "Low stock"), ("unavailable", "Unavailable")], default="available", max_length=20)),
                ("notes", models.CharField(blank=True, max_length=255)),
                ("last_confirmed_at", models.DateTimeField(default=django.utils.timezone.now)),
                ("station", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="availabilities", to="core.station")),
            ],
            options={"ordering": ["status", "-last_confirmed_at"], "unique_together": {("station", "fuel_type")}},
        ),
        migrations.AddIndex(
            model_name="fuelprice",
            index=models.Index(fields=["fuel_type", "price_per_litre"], name="core_fuelpr_fuel_ty_4f1bb7_idx"),
        ),
        migrations.AddIndex(
            model_name="fuelprice",
            index=models.Index(fields=["brand", "reported_at"], name="core_fuelpr_brand_i_56135a_idx"),
        ),
    ]
