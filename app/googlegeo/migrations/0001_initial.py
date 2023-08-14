# Generated by Django 4.1.7 on 2023-08-03 11:35

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="FootballClubs",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200, unique=True)),
                ("attendance", models.IntegerField(blank=True, null=True)),
                ("stadium", models.CharField(blank=True, max_length=200, null=True)),
                ("zipcode", models.CharField(blank=True, max_length=200, null=True)),
                ("city", models.CharField(blank=True, max_length=200, null=True)),
                ("country", models.CharField(blank=True, max_length=200, null=True)),
                ("adress", models.CharField(blank=True, max_length=200, null=True)),
                ("latitude", models.CharField(blank=True, max_length=200, null=True)),
                ("longitude", models.CharField(blank=True, max_length=200, null=True)),
            ],
        ),
    ]
