from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
                                        PermissionsMixin

import uuid
from django.conf import settings
from users.models.customers import Customers
from users.models.administrator import Administrator
from django.forms import ModelForm
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.core.mail import send_mail
from django.utils.translation import gettext_lazy as _
# Create your models here.


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('The given email must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    """Custom user model that suppors using email instead of username"""
    email = models.EmailField(max_length=255, unique=True)
    #administrator = models.BooleanField(default=False)
    #moderator = models.BooleanField(default=False)
    #customers = models.BooleanField(default=True)
    #vendors = models.BooleanField(default=False)
    #attendants = models.BooleanField(default=False)
    #managers = models.BooleanField(default=False)
    #age = models.PositiveIntegerField(null=True, blank=True)
    phone_number = models.CharField(max_length=11, blank=True)
    #date_joined = models.DateTimeField(auto_now_add=True)
    #email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)
    #age = models.PositiveIntegerField(null=True, blank=True)
    plate_number = models.CharField(max_length=12, blank=True)
    url_facebook = models.CharField(max_length=50, blank=True)
    url_twitter = models.CharField(max_length=50, blank=True)
    url_linkedin = models.CharField(max_length=50, blank=True)
    url_instagram = models.CharField(max_length=50, blank=True)
    url_custom = models.CharField(max_length=50, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=100, blank=True)
    #current_workplace = models.CharField(max_length=100, blank=True)
    picture = models.ImageField(default='default.jpg', upload_to='profile_pics', max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    #is_oisStaff = models.BooleanField(default=False)
    is_driver = models.BooleanField(default=False)
    is_proDriver = models.BooleanField(default=False)
    is_vendorStaff = models.BooleanField(default=False)
    is_vendor = models.BooleanField(default=False)
    is_logisticVendor = models.BooleanField(default=False) 
    #is_oisguardian = models.BooleanField(default=False) 
    objects = UserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

    def get_full_name(self):
        '''
        Returns the first_name plus the last_name, with a space in between.
        '''
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        '''
        Returns the short name for the user.
        '''
        return self.first_name

    def email_user(self, subject, message, from_email=None, **kwargs):
        '''
        Sends an email to this User.
        '''
        send_mail(subject, message, from_email, [self.email], **kwargs)

    @property
    def is_moderator(self):
        if self.is_administrator:
            return True
        return self.moderator

    @property
    def is_administrator(self):
        Administrator(user=User).save()
        return self.administrator

    @property
    def is_customers(self):
        Customers(user=User).save()
        if self.is_administrator:
            return True
        return self.customers

    @property
    def is_vendors(self):
        if self.is_administrator:
            return True
        return self.vendors

    @property
    def is_managers(self):
        if self.is_administrator:
            return True
        return self.managers

    @property
    def is_attendants(self):
        if self.is_administrator:
            return True
        return self.attendants


class Profile(models.Model):
    image = models.ImageField(blank=True)
    url_facebook = models.CharField(max_length=50, blank=True)
    url_twitter = models.CharField(max_length=50, blank=True)
    url_linkedin = models.CharField(max_length=50, blank=True)
    url_instagram = models.CharField(max_length=50, blank=True)
    url_custom = models.CharField(max_length=50, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=100, blank=True)
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name='user_profile')

    def __str__(self):
        return self.user.email


class ResetPasswordCode(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True, related_name='user_forgot_password')
    code = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)

    class Meta:
        default_related_name = 'reset_password_codes'

    def __str__(self):
        return f'{self.user.email} - {self.code}'  


class LogisticVendorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='logistic_vendor_profile')
    #alumni = models.ForeignKey(OisAlumniProfile, on_delete=models.CASCADE, null=True, blank=True)
    
    def __str__(self):
        return self.user.username
    
    
class FuelVendorProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='fuel_vendor_profile')
    #alumni = models.ForeignKey(OisAlumniProfile, on_delete=models.CASCADE, null=True, blank=True)
    
    def __str__(self):
        return self.user.username

   
class DriverProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='driver_profile')
    bio = models.CharField(max_length=30, blank=True)
    location = models.CharField(max_length=30, blank=True)

    def __str__(self):
        return self.user.username


#class OisStaffProfileForm(ModelForm):
    #class Meta:
        #model = OisStaffProfile
        #fields = ['user', 'bio', 'location']    

  
class ProDriverProfile(models.Model):
    MALE = 'M'
    FEMALE = 'F'
    SEX_CHOICES = (
        (MALE, 'male'),
        (FEMALE, 'female')
    )

    YEAR_OF_GRADUATION = (
        (1999, 'set of 1999'),
        (2000, 'set of 2000'),
        (2001, 'set of 2001'),
        (2002, 'set of 2002'),
        (2003, 'set of 2003'),
        (2004, 'set of 2004'),
        (2005, 'set of 2005'),
        (2006, 'set of 2006'),
        (2007, 'set of 2007'),
        (2008, 'set of 2008'),
        (2009, 'set of 2009'),
        (2010, 'set of 2010'),
        (2011, 'set of 2011'),
        (2012, 'set of 2012'),
        (2013, 'set of 2013'),
        (2014, 'set of 2014'),
        (2015, 'set of 2015'),
        (2016, 'set of 2016'),
        (2017, 'set of 2017'),
        (2018, 'set of 2018'),
        (2019, 'set of 2019')  
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='pro_driver_profile') 
    #gender = models.CharField(max_length=1, choices=SEX_CHOICES, null=True)
    #year_of_graduation = models.CharField(max_length=4, choices=YEAR_OF_GRADUATION, null=True)
    middle_name = models.CharField(max_length=100, blank=True)
    logistics_partner = models.ForeignKey(LogisticVendorProfile, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.user.username


class ProDriverProfileForm(ModelForm):
    class Meta:
        model = ProDriverProfile
        fields = ['user', 'middle_name']


class VendorStaffProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='vendor_Staff_profile')
    fuel_vendor = models.ForeignKey(FuelVendorProfile, on_delete=models.CASCADE, null=True, blank=True)
    
    def __str__(self):
        return self.user.username
    



class VendorProfileForm(ModelForm):
    class Meta:
        model = VendorStaffProfile
        fields = ['user', ]


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
        print('****', created)
        if instance.is_driver:
            DriverProfile.objects.get_or_create(user = instance)
        if instance.is_proDriver:
            ProDriverProfile.objects.get_or_create(user = instance)
        #if instance.is_oisstaff:
            #OisStaffProfile.objects.get_or_create(user = instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    print('_-----')	
    # print(instance.internprofile.bio, instance.internprofile.location)
    if instance.is_driver:
        instance.driver_profile.save()
    if instance.is_proDriver:
        instance.pro_driver_profile.save()
        #if instance.is_oisstaff:
        #instance.ois_staff_profile.save()

