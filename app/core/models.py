from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.text import slugify


class FuelType(models.TextChoices):
    PETROL = "petrol", "Petrol"
    DIESEL = "diesel", "Diesel"
    GAS = "gas", "Gas"


class AvailabilityStatus(models.TextChoices):
    AVAILABLE = "available", "Available"
    LOW_STOCK = "low_stock", "Low stock"
    UNAVAILABLE = "unavailable", "Unavailable"


class OrderStatus(models.TextChoices):
    PENDING = "pending", "Pending"
    CONFIRMED = "confirmed", "Confirmed"
    DISPENSING = "dispensing", "Dispensing"
    COMPLETED = "completed", "Completed"
    CANCELLED = "cancelled", "Cancelled"


class FuelBrand(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=120, unique=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["name"]

    def save(self, *args, **kwargs):
        self.name = self.name.strip()
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class FuelPrice(models.Model):
    brand = models.ForeignKey(
        FuelBrand,
        on_delete=models.CASCADE,
        related_name="prices",
    )
    fuel_type = models.CharField(
        max_length=20,
        choices=FuelType.choices,
        default=FuelType.PETROL,
    )
    price_per_litre = models.DecimalField(max_digits=10, decimal_places=2)
    source_note = models.CharField(max_length=255, blank=True)
    reported_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ["price_per_litre", "-reported_at"]
        indexes = [
            models.Index(fields=["fuel_type", "price_per_litre"]),
            models.Index(fields=["brand", "reported_at"]),
        ]

    def __str__(self):
        return f"{self.brand.name} {self.get_fuel_type_display()} N{self.price_per_litre}/L"


class Station(models.Model):
    brand = models.ForeignKey(
        FuelBrand,
        on_delete=models.CASCADE,
        related_name="stations",
    )
    name = models.CharField(max_length=140)
    address = models.CharField(max_length=255)
    area = models.CharField(max_length=120, blank=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["name"]

    def save(self, *args, **kwargs):
        self.name = self.name.strip()
        self.address = ", ".join(
            segment.strip().title() for segment in self.address.split(",") if segment.strip()
        )
        self.area = self.area.strip().title()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class StationAvailability(models.Model):
    station = models.ForeignKey(
        Station,
        on_delete=models.CASCADE,
        related_name="availabilities",
    )
    fuel_type = models.CharField(
        max_length=20,
        choices=FuelType.choices,
        default=FuelType.PETROL,
    )
    status = models.CharField(
        max_length=20,
        choices=AvailabilityStatus.choices,
        default=AvailabilityStatus.AVAILABLE,
    )
    notes = models.CharField(max_length=255, blank=True)
    last_confirmed_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ["status", "-last_confirmed_at"]
        unique_together = ("station", "fuel_type")

    def save(self, *args, **kwargs):
        self.notes = self.notes.strip()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.station.name} {self.get_fuel_type_display()} {self.get_status_display()}"


class StationUpdate(models.Model):
    station = models.ForeignKey(
        Station,
        on_delete=models.CASCADE,
        related_name="updates",
    )
    reporter_name = models.CharField(max_length=120)
    fuel_type = models.CharField(
        max_length=20,
        choices=FuelType.choices,
        default=FuelType.PETROL,
    )
    status = models.CharField(
        max_length=20,
        choices=AvailabilityStatus.choices,
    )
    price_per_litre = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    note = models.CharField(max_length=255)
    source = models.CharField(max_length=20, default="crowd")
    is_verified = models.BooleanField(default=False)
    reported_at = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ["-reported_at"]

    def save(self, *args, **kwargs):
        self.reporter_name = self.reporter_name.strip()
        self.note = self.note.strip()
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.station.name} update by {self.reporter_name}"


class Car(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="cars",
    )
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    fuel_type = models.CharField(
        max_length=20,
        choices=FuelType.choices,
        default=FuelType.PETROL,
    )
    tank_capacity = models.DecimalField(max_digits=5, decimal_places=1)
    is_default = models.BooleanField(default=False)

    class Meta:
        ordering = ["-is_default", "make", "model"]

    def __str__(self):
        return f"{self.make} {self.model}"


class Order(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="orders",
    )
    attendant = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="attended_orders",
    )
    car = models.ForeignKey(
        Car,
        blank=True,
        null=True,
        on_delete=models.SET_NULL,
        related_name="orders",
    )
    station = models.ForeignKey(
        Station,
        on_delete=models.CASCADE,
        related_name="orders",
    )
    fuel_type = models.CharField(
        max_length=20,
        choices=FuelType.choices,
        default=FuelType.PETROL,
    )
    quantity_litres = models.DecimalField(max_digits=5, decimal_places=2)
    price_per_litre = models.DecimalField(max_digits=10, decimal_places=2)
    subtotal = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    vat_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    service_charge = models.DecimalField(max_digits=10, decimal_places=2, default=150.0)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(
        max_length=20,
        choices=OrderStatus.choices,
        default=OrderStatus.PENDING,
    )
    dispenser_number = models.PositiveIntegerField(blank=True, null=True)
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def save(self, *args, **kwargs):
        if self.price_per_litre is not None and self.quantity_litres is not None:
            self.subtotal = self.price_per_litre * self.quantity_litres
            self.vat_amount = self.subtotal * 0.075  # 7.5% VAT
            self.total_amount = self.subtotal + self.vat_amount + self.service_charge
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Order #{self.id} for {self.station.name}"


class Payment(models.Model):
    order = models.OneToOneField(
        Order,
        on_delete=models.CASCADE,
        related_name="payment",
    )
    method = models.CharField(
        max_length=20,
        choices=[
            ("card", "Card"),
            ("bank_transfer", "Bank Transfer"),
            ("wallet", "Wallet"),
            ("cash", "Cash"),
        ],
        default="card",
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_id = models.CharField(max_length=100, blank=True)
    is_successful = models.BooleanField(default=False)
    paid_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f"Payment {self.method} for order {self.order.id}"


class UserRole(models.TextChoices):
    CUSTOMER = "customer", "Customer"
    FUEL_ATTENDANT = "fuel_attendant", "Fuel Attendant"
    STATION_MANAGER = "station_manager", "Station Manager"


class Receipt(models.Model):
    order = models.OneToOneField(
        "Order",
        on_delete=models.CASCADE,
        related_name="receipt",
    )
    qr_code = models.CharField(max_length=255, unique=True)
    qr_image = models.ImageField(upload_to='qr_codes/', blank=True, null=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    vat_amount = models.DecimalField(max_digits=10, decimal_places=2)
    service_charge = models.DecimalField(max_digits=10, decimal_places=2, default=150.0)
    created_at = models.DateTimeField(auto_now_add=True)
    paid_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"Receipt for Order {self.order.id}"


class PageView(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    page = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    user_agent = models.TextField(blank=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)

    class Meta:
        ordering = ["-timestamp"]

    def __str__(self):
        return f"{self.page} - {self.timestamp}"


class FuelInventory(models.Model):
    station = models.ForeignKey(
        Station,
        on_delete=models.CASCADE,
        related_name="inventory",
    )
    fuel_type = models.CharField(
        max_length=20,
        choices=FuelType.choices,
        default=FuelType.PETROL,
    )
    current_stock_litres = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0.0,
        help_text="Current stock level in litres"
    )
    tank_capacity_litres = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=10000.0,
        help_text="Maximum tank capacity in litres"
    )
    reorder_point_litres = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=1000.0,
        help_text="Stock level that triggers reorder alert"
    )
    last_updated = models.DateTimeField(auto_now=True)
    updated_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="inventory_updates",
    )

    class Meta:
        ordering = ["station", "fuel_type"]
        unique_together = ("station", "fuel_type")

    @property
    def stock_percentage(self):
        """Returns stock level as percentage of tank capacity"""
        if self.tank_capacity_litres > 0:
            return (self.current_stock_litres / self.tank_capacity_litres) * 100
        return 0

    @property
    def needs_reorder(self):
        """Returns True if stock is below reorder point"""
        return self.current_stock_litres <= self.reorder_point_litres

    @property
    def status(self):
        """Returns availability status based on stock levels"""
        if self.current_stock_litres <= 0:
            return AvailabilityStatus.UNAVAILABLE
        elif self.needs_reorder:
            return AvailabilityStatus.LOW_STOCK
        else:
            return AvailabilityStatus.AVAILABLE

    def __str__(self):
        return f"{self.station.name} {self.get_fuel_type_display()} Inventory"


class UserProfile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="profile",
    )
    phone_number = models.CharField(max_length=20, blank=True)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    role = models.CharField(
        max_length=20,
        choices=UserRole.choices,
        default=UserRole.CUSTOMER,
    )
    station = models.ForeignKey(
        "Station",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="staff",
    )

    def __str__(self):
        return f"{self.user.username} profile"
