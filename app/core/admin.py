from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _
#from .models.profile import Profile
#from .models.reset_password_code import ResetPasswordCode
from .models import User, Profile, ResetPasswordCode
from .models import DriverProfile, ProDriverProfile, VendorStaffProfile, LogisticVendorProfile, FuelVendorProfile
#from core import models


class UserAdmin(BaseUserAdmin):
    ordering = ['id']
    list_display = ['email', 'first_name']
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal Info'), {'fields': ('first_name',)}),
        (
            _('Permissions'),
            {'fields': ('is_active', 'is_staff', 'is_superuser')}
        ),
        (_('Important dates'), {'fields': ('last_login',)})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2')
        }),
    )


admin.site.register(User, UserAdmin)
admin.site.register(ProDriverProfile)
admin.site.register(VendorStaffProfile)
admin.site.register(DriverProfile)
admin.site.register(LogisticVendorProfile)
admin.site.register(FuelVendorProfile)


#class UserAdmin(admin.ModelAdmin):
 #   exclude = ('groups', 'user_permissions')


admin.site.register(Profile)
admin.site.register(ResetPasswordCode)
#admin.site.register(User, UserAdmin)