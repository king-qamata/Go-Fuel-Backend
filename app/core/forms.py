from django import forms
from django.contrib.auth.models import User

from core.models import AvailabilityStatus, Car, FuelType, UserProfile, UserRole


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
    dispenser_number = forms.TypedChoiceField(
        choices=[(str(i), str(i)) for i in range(1, 6)],
        coerce=int,
        required=False,
        initial="1",
    )


class FuelQuantityForm(forms.Form):
    quantity_litres = forms.DecimalField(max_digits=5, decimal_places=2, min_value=0.1)
    amount = forms.DecimalField(max_digits=10, decimal_places=2, required=False)


class PaymentMethodForm(forms.Form):
    method = forms.ChoiceField(
        choices=[
            ("momo", "Momo"),
            ("card", "Card"),
            ("voucher", "Voucher"),
            ("cash", "Cash"),
        ],
        initial="card",
    )


class QRLookupForm(forms.Form):
    qr_code = forms.CharField(
        max_length=32,
        label="QR Code",
        widget=forms.TextInput(attrs={"placeholder": "Enter QR code"}),
    )


class AttendantRegistrationForm(forms.Form):
    """Form for attendant registration with admin approval workflow."""
    
    first_name = forms.CharField(
        max_length=150,
        label="First Name",
        widget=forms.TextInput(attrs={"placeholder": "First name"}),
    )
    last_name = forms.CharField(
        max_length=150,
        label="Last Name",
        widget=forms.TextInput(attrs={"placeholder": "Last name"}),
    )
    phone_number = forms.CharField(
        max_length=20,
        label="Phone Number",
        widget=forms.TextInput(attrs={"type": "tel", "placeholder": "+234 801 234 5678"}),
    )
    email = forms.EmailField(
        required=False,
        label="Email Address",
        widget=forms.EmailInput(attrs={"placeholder": "your.email@example.com"}),
    )
    password = forms.CharField(
        label="Password",
        widget=forms.PasswordInput(attrs={"placeholder": "Enter a secure password", "minlength": "8"}),
    )
    password_confirm = forms.CharField(
        label="Confirm Password",
        widget=forms.PasswordInput(attrs={"placeholder": "Confirm your password", "minlength": "8"}),
    )
    station = forms.CharField(
        max_length=200,
        label="Station Name",
        required=False,
        widget=forms.TextInput(attrs={"placeholder": "Name of station you work at"}),
    )
    registration_notes = forms.CharField(
        max_length=500,
        label="Additional Information",
        required=False,
        widget=forms.Textarea(attrs={
            "rows": 3,
            "placeholder": "Tell us about your experience or any relevant details"
        }),
    )

    def clean(self):
        """Validate password confirmation and phone number format."""
        cleaned_data = super().clean()
        password = cleaned_data.get("password")
        password_confirm = cleaned_data.get("password_confirm")

        if password and password_confirm:
            if password != password_confirm:
                raise forms.ValidationError("Passwords do not match.")

        phone = cleaned_data.get("phone_number")
        if phone:
            # Basic validation: should contain at least 10 digits
            digits_only = ''.join(filter(str.isdigit, phone))
            if len(digits_only) < 10:
                raise forms.ValidationError(
                    "Phone number must contain at least 10 digits."
                )

        return cleaned_data
