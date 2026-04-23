from django.contrib import admin
from core.models import (
    Car,
    FuelBrand,
    FuelInventory,
    FuelPrice,
    Order,
    PageView,
    Payment,
    Receipt,
    Station,
    StationAvailability,
    StationUpdate,
    UserProfile,
    UserRole,
)


@admin.register(FuelBrand)
class FuelBrandAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "is_active")
    list_filter = ("is_active",)
    search_fields = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}


@admin.register(FuelPrice)
class FuelPriceAdmin(admin.ModelAdmin):
    list_display = ("brand", "fuel_type", "price_per_litre", "reported_at")
    list_filter = ("fuel_type", "brand")
    search_fields = ("brand__name", "source_note")
    ordering = ("price_per_litre", "-reported_at")


@admin.register(Station)
class StationAdmin(admin.ModelAdmin):
    list_display = ("name", "brand", "area", "is_active")
    list_filter = ("brand", "is_active", "area")
    search_fields = ("name", "address", "area", "brand__name")


@admin.register(StationAvailability)
class StationAvailabilityAdmin(admin.ModelAdmin):
    list_display = ("station", "fuel_type", "status", "last_confirmed_at")
    list_filter = ("fuel_type", "status", "station__brand")
    search_fields = ("station__name", "notes")


@admin.register(StationUpdate)
class StationUpdateAdmin(admin.ModelAdmin):
    list_display = ("station", "fuel_type", "status", "reporter_name", "source", "is_verified", "reported_at")
    list_filter = ("fuel_type", "status", "source", "is_verified")
    search_fields = ("station__name", "reporter_name", "note")
    ordering = ("-reported_at",)


@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ("user", "make", "model", "fuel_type", "tank_capacity", "is_default")
    list_filter = ("fuel_type", "is_default")
    search_fields = ("user__username", "make", "model")


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "attendant", "station", "fuel_type", "quantity_litres", "subtotal", "vat_amount", "service_charge", "total_amount", "status", "created_at")
    list_filter = ("fuel_type", "status", "station__brand")
    search_fields = ("user__username", "station__name", "car__make", "car__model")
    ordering = ("-created_at",)


@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
    list_display = ("order", "method", "amount", "is_successful", "paid_at")
    list_filter = ("method", "is_successful")
    search_fields = ("order__id", "order__user__username", "transaction_id")


@admin.register(PageView)
class PageViewAdmin(admin.ModelAdmin):
    list_display = ("user", "page", "timestamp", "ip_address")
    list_filter = ("page", "timestamp")
    search_fields = ("user__username", "page")


@admin.register(Receipt)
class ReceiptAdmin(admin.ModelAdmin):
    list_display = ("order", "qr_code", "total_amount", "paid_at", "created_at")
    list_filter = ("paid_at",)
    search_fields = ("order__id", "qr_code")


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "phone_number", "role", "station", "is_approved", "created_at")
    list_filter = ("role", "station", "is_approved")
    search_fields = ("user__username", "user__email", "phone_number")
    ordering = ("-user__date_joined",)

    fieldsets = (
        ("User Information", {
            "fields": ("user", "phone_number", "balance")
        }),
        ("Role & Permissions", {
            "fields": ("role", "station", "is_approved"),
            "description": "Assign user roles and station assignments. For attendants, approval is required before they can access the system."
        }),
    )

    def get_queryset(self, request):
        return super().get_queryset(request).select_related('user', 'station')

    def created_at(self, obj):
        return obj.user.date_joined
    created_at.admin_order_field = 'user__date_joined'
    created_at.short_description = 'Joined'


@admin.register(FuelInventory)
class FuelInventoryAdmin(admin.ModelAdmin):
    list_display = ("station", "fuel_type", "current_stock_litres", "tank_capacity_litres", "stock_percentage", "get_status_display", "last_updated")
    list_filter = ("fuel_type", "station")
    search_fields = ("station__name",)
    readonly_fields = ("stock_percentage", "get_status_display", "last_updated")

    fieldsets = (
        ("Station & Fuel", {
            "fields": ("station", "fuel_type")
        }),
        ("Stock Information", {
            "fields": ("current_stock_litres", "tank_capacity_litres", "reorder_point_litres")
        }),
        ("Status & Updates", {
            "fields": ("stock_percentage", "get_status_display", "updated_by", "last_updated"),
            "classes": ("collapse",)
        }),
    )

    def get_status_display(self, obj):
        return obj.get_status_display()
    get_status_display.short_description = "Status"
