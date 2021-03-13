from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, \
                                        PermissionsMixin

import uuid
from django.conf import settings
from users.models.customers import Customers
from users.models.administrator import Administrator
# Create your models here.

class UserManager(BaseUserManager):
    
    def create_user(self, email, password=None, **extra_fields):
        """Creates and saves a new user"""
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        user_obj.moderator = is_moderator
        user_obj.administrator = is_administrator
        user_obj.customers = is_customers
        user_obj.vendors = is_vendors
        user_obj.attendants = is_attendants
        user_obj.managers = is_managers
        return user

    def create_superuser(self, email, password):
        """Creates and saves a new super user"""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """Custom user model that suppors using email instead of username"""
    email = models.EmailField(max_length=255, unique=True)
    administrator = models.BooleanField(default=False)
    moderator = models.BooleanField(default=False)
    customers = models.BooleanField(default=True)
    vendors = models.BooleanField(default=False)
    attendants = models.BooleanField(default=False)
    managers = models.BooleanField(default=False)
    #age = models.PositiveIntegerField(null=True, blank=True)
    phone_number = models.CharField(max_length=11, blank=True)
    #date_joined = models.DateTimeField(auto_now_add=True)
    #email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'


    @property
    def is_moderator(self):
        if self.is_administrator:
            return True
        return self.moderator

    @property
    def is_administrator(self):
        Administrator(user=user).save()
        return self.administrator

    @property
    def is_customers(self):
        Customers(user=user).save()
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