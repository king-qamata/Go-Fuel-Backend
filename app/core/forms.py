from django import forms

from core.models import AvailabilityStatus, Car, FuelType


class LoginForm(forms.Form):
    phone_number = forms.CharField(
        max_length=20,
        label="Phone Number",
        widget=forms.TextInput(
            attrs={"type": "tel", "placeholder": "+234 801 234 5678"}
        ),
    )
    password = forms.CharField(
        label="Password",
        widget=forms.PasswordInput(attrs={"placeholder": "Enter password"}),
    )


class StationUpdateForm(forms.Form):
    reporter_name = forms.CharField(max_length=120)
    fuel_type = forms.ChoiceField(choices=FuelType.choices, initial=FuelType.PETROL)
    status = forms.ChoiceField(choices=AvailabilityStatus.choices)
    price_per_litre = forms.DecimalField(max_digits=10, decimal_places=2, required=False, min_value=0)
    note = forms.CharField(max_length=255, widget=forms.Textarea(attrs={"rows": 3}))


class CarForm(forms.ModelForm):
    class Meta:
        model = Car
        fields = ["make", "model", "fuel_type", "tank_capacity"]


class DispenserForm(forms.Form):
    fuel_type = forms.ChoiceField(choices=FuelType.choices, initial=FuelType.PETROL)
    dispenser_number = forms.IntegerField(required=False, min_value=1)


class FuelQuantityForm(forms.Form):
    quantity_litres = forms.DecimalField(max_digits=5, decimal_places=2, min_value=0.1)
    amount = forms.DecimalField(max_digits=10, decimal_places=2, required=False)


class PaymentMethodForm(forms.Form):
    method = forms.ChoiceField(
        choices=[
            ("card", "Card"),
            ("bank_transfer", "Bank Transfer"),
            ("wallet", "Wallet"),
            ("cash", "Cash"),
        ],
        initial="card",
    )
