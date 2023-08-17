from django import forms
from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
#from users.models.drivers import CustomUser, OisStaffProfile, OisAlumniProfile, OisAlumniGuardianProfile
from core.models import User, ProDriverProfile, VendorStaffProfile, DriverProfile, LogisticVendorProfile, FuelVendorProfile
from django.utils.translation import gettext_lazy as _
from django.db import transaction
#from allauth.account.forms import SignupForm
from allauth.account.adapter import DefaultAccountAdapter
from django.contrib.auth import get_user_model
from allauth.account.utils import user_username, user_email, user_field
#from multiupload.fields import MultiFileField
 
class CustomUserCreationForm(UserCreationForm):
    #email = forms.CharField(max_length=254, required=True, widget=forms.EmailInput())
    #url_facebook = forms.CharField(max_length=50, required=False, label=_(u'Facebook'))
    #url_twitter = forms.CharField(max_length=50, required=False, label=_(u'Twitter'))
    #url_instagram = forms.CharField(max_length=50, required=False, label=_(u'Instagram'))
    #url_custom = forms.CharField(max_length=50, required=False, label=_(u'Website'))
 
    class Meta(UserCreationForm.Meta):
        model = User
        exclude = ('username', )
        fields = UserCreationForm.Meta.fields
        #fields = "__all__"  
        #('email', 'first_name', 'last_name','date_of_birth', 'phone_number', 
        #'location', 'address', 'current_workplace', 'age', 'url_facebook', 
        #'url_twitter','url_instagram', 'url_custom', 'is_oisalumni', 
        #'is_oisStaff', 'is_oisguardian', )


#class CustomUserCreationForm(SignupForm):
    #def save(self, request):
        # Ensure you call the parent class's save.
        # .save() returns a User object.
        #user = super(CustomUserCreationForm, self).save(request)
        # Add your own processing here.
        # You must return the original result.
        #user.is_oisAlumni = False
        #user.is_oisStaff = False
        #return user

#class SignupForm(forms.Form):
    #first_name = forms.CharField(max_length=30)
    #last_name = forms.CharField(max_length=30)
    #age = forms.IntegerField(max_value=100)

    #class Meta:
        #model = get_user_model() # use this function for swapping user model

    #def save(self, user):
        #user.first_name = self.cleaned_data['first_name']
        #user.last_name = self.cleaned_data['last_name']
        #user.age = self.cleaned_data['age']
        #user.save()



#class CustomUserCreationForm(SignupForm):

    #def signup(self, request, user):
        #user = super().save(commit=False)
        #user.is_oisalumni = True
        #user.first_name = self.cleaned_data['first_name']
        #user.last_name = self.cleaned_data['last_name']
        #user.save()
        #return user
    #def save(self, request):
        #user = super(CustomUserCreationForm, self).save(request)
        #return user
class CustomUserAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=True):
        """
        This is called when saving user via allauth registration.
        We override this to set additional data on user object.
        """
        # Do not persist the user yet so we pass commit=False
        # (last argument)
        user = super(CustomUserAccountAdapter, self).save_user(request, user, form, commit=False)
        #data = form.cleaned_data
        #user.age = form.cleaned_data.get('age')
        #user.date_of_birth = form.cleaned_data.get('date_of_birth')
        instance = get_user_model()
        #user = self.request.user
        #if user.user_type == 1:
        #if user.user_type == 'OIS Staff':
            #oisStaff = True 
        #if user.user_type == 'OIS Alumni':
            #oisAlumni = True 
        #if user.user_type == 'OIS Guardian':
            #oisGuardian = True
        
        driver = instance.is_driver
        proDriver = instance.proDriver
        vendorStaff = instance.is_vendorStaff
        if driver:
            user_field(user, 'is_driver', driver)
        if proDriver:
            user_field(user, 'is_proDriver', proDriver)
        if vendorStaff:
            user_field(user, 'is_vendorStaff', vendorStaff)
        user.save()
        return user

#class SignupForm(forms.ModelForms):
    #first_name = forms.CharField(max_length=30, label='First Name')
    #last_name = forms.CharField(max_length=30, label='Last Name')

    #class Meta(UserCreationForm.Meta):
        #model = CustomUser
    #def save(self, request):
        #user = super().save(commit=False)
        #user.is_oisStaff = True
        #user.first_name = self.cleaned_data['first_name']
        #user.last_name = self.cleaned_data['last_name']
        #user.save()
        #user = super(CustomUserCreationForm, self).save(request)
        #return user
class DriverProfileForm(CustomUserCreationForm):
    #first_name = forms.CharField(max_length=30, label='First Name')
    #last_name = forms.CharField(max_length=30, label='Last Name')

    email = forms.EmailField(max_length=50, help_text='Required. Inform a valid email address.',
        widget=forms.EmailInput(
            attrs={
                "placeholder": "Email",
                "class": "form-control" "icon-envelope", 
                #"class": "input-group mb-3",
                #"class": "input-group-prepend",
                #"class": "input-group-text",
                #"class": "icon-envelope"
            }
        ))
        #email=forms.EmailField(forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Email'}), max_length=64, help_text='Enter a valid email address')

    password1 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password",
                "class": "form-control"
            }
        ))
    password2 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password check",
                "class": "form-control"
            }
        ))
    class Meta(CustomUserCreationForm.Meta):
        model = User
        fields = CustomUserCreationForm.Meta.fields + ('first_name', 'last_name', 'email', 'password1', 'password2', 'plate_number')
        #fields = '__all__'
        #exclude = ('username',)

    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_driver = True
        DriverProfile.objects.create(user=user)
        if commit:
            user.save()
        return user

#class OisStaffProfileForm(CustomUserAccountAdapter):    
    #def save_user(self, request, user, form, commit=True):
        
        #user = super(CustomUserAccountAdapter, self).save_user(request, user, form, commit=False)
        #user.is_oisStaff = True


 
class ProDriverProfileForm(CustomUserCreationForm):
    first_name = forms.CharField(max_length=30, label='First Name')
    last_name = forms.CharField(max_length=30, label='Last Name')
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
    #gender = forms.CharField(
        #widget=forms.Select(choices=SEX_CHOICES)
        
    #)
    #year_of_graduation = forms.CharField(
        #widget=forms.Select(choices=YEAR_OF_GRADUATION)
     
    #)
    #date_of_birth = forms.DateField(required=False)

    logistics_partner = forms.ModelChoiceField(
        queryset = LogisticVendorProfile.objects.all(),
        )

    #title = forms.CharField(
        #max_length=3,
        #widget=forms.Select(choices=TITLE_CHOICES)'logistics_partner'
    
    class Meta(CustomUserCreationForm.Meta):
        model = User
        fields = CustomUserCreationForm.Meta.fields + ('first_name', 'last_name', 'email', 'password1', 'password2', 'plate_number', )
        #fields = '__all__'

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_proDriver = True
        #ProDriverProfile.gender.add(*self.cleaned_data.get('gender'))
        #ProDriverProfile.year_of_graduation.add(*self.cleaned_data.get('year_of_graduation'))
        #user.date_of_birth = date_of_birth
        user.save()
        #oisAlumniProfile = OisAlumniProfile.objects.create(user=user)
        
        return user
    
    #def signup(self, request, user):
        #user = super().save(commit=False)
        #user.is_oisalumni = True
        #user.first_name = self.cleaned_data['first_name']
        #user.last_name = self.cleaned_data['last_name']
        #user.save()
        #return user

        #profile = OisAlumniProfile()
        #profile.user = user
        #profile.gender = self.cleaned_data['gender']
        #profile.year_of_graduation = self.cleaned_data['year_of_graduation']
        #profile.save()
        #return user


#class OisAlumniProfileForm(SignupForm):
    #first_name = forms.CharField(max_length=30, label='First Name')
    #last_name = forms.CharField(max_length=30, label='Last Name')

    #class Meta(SignupForm.Meta):
        #model = CustomUser
    #def signup(self, request, user):
        #user = super().save(commit=False)
        #user.is_oisAlumni = True
        #user.first_name = self.cleaned_data['first_name']
        #user.last_name = self.cleaned_data['last_name']
        #user.save()
        #return user
class VendorStaffProfileForm(UserCreationForm):
    fuel_vendor = forms.ModelMultipleChoiceField(
        queryset=FuelVendorProfile.objects.all(),
        )
    class Meta(CustomUserCreationForm.Meta):
        model = User
        fields = CustomUserCreationForm.Meta.fields + ('first_name', 'last_name', 'email', 'password1', 'password2', )

    @transaction.atomic
    def save(self):
        user = super().save(commit=False)
        user.is_vendorStaff = True
        user.save()
        #student = Student.objects.create(user=user)
        #student.interests.add(*self.cleaned_data.get('interests'))
        return user


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')




class OisStaffProfileChangeForm(UserChangeForm):
    class Meta:
        model = User
        fields = UserChangeForm.Meta.fields


class StaffAccountProfileForm(forms.ModelForm):
    city = forms.CharField(max_length=30, required=False,label=_(u'City'))
    postal_code = forms.CharField(max_length=8, required=False, label=_(u'Postal code'))
    street = forms.CharField(max_length=30, required=False, label=_(u'Street'))
    house_number = forms.CharField(max_length=30, required=False, label=_(u'House number'))
    phone_number = forms.CharField(max_length=12, required=True, label=_(u'Phone number'))
    url_facebook = forms.CharField(max_length=50, required=False, label=_(u'Facebook'))
    url_goldenline = forms.CharField(max_length=50, required=False, label=_(u'Goldenline'))
    url_likedin = forms.CharField(max_length=50, required=False, label=_(u'Likedin'))
    url_custom1 = forms.CharField(max_length=50, required=False, label=_(u'Own link'))
    url_custom2 = forms.CharField(max_length=50, required=False, label=_(u'Own link'))
    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name','date_of_birth', 'phone_number', 
        'location', 'address','url_facebook', 'url_twitter','url_instagram', 'url_custom', )
        #exclude = ('user', 'pin_code')

#address, age, current_workplace, date_joined, date_of_birth, email, emailaddress,
#first_name, groups, id, is_active, is_oisStaff, is_oisalumni, is_oisguardian, is_staff, 
#is_superuser, last_login, last_name, location, logentry, ois_alumni_guardian_profile, 
#ois_alumni_profile, ois_staff_profile, password, phone_number, url_custom, url_facebook, 
#url_instagram, url_linkedin, url_twitter, user_permissions, username

class StaffAccountEmailForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ('email',)


class GuardianAccountProfileForm(forms.ModelForm):
    city = forms.CharField(max_length=30, required=False,label=_(u'City'))
    postal_code = forms.CharField(max_length=8, required=False, label=_(u'Postal code'))
    street = forms.CharField(max_length=30, required=False, label=_(u'Street'))
    house_number = forms.CharField(max_length=30, required=False, label=_(u'House number'))
    phone_number = forms.CharField(max_length=12, required=True, label=_(u'Phone number'))
    url_facebook = forms.CharField(max_length=50, required=False, label=_(u'Facebook'))
    url_goldenline = forms.CharField(max_length=50, required=False, label=_(u'Goldenline'))
    url_likedin = forms.CharField(max_length=50, required=False, label=_(u'Likedin'))
    url_custom1 = forms.CharField(max_length=50, required=False, label=_(u'Own link'))
    url_custom2 = forms.CharField(max_length=50, required=False, label=_(u'Own link'))
    class Meta:
        model = VendorStaffProfile
        exclude = ('user', )

class GuardianAccountEmailForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ('email',)





class AlumniAccountProfileForm(forms.ModelForm):
    city = forms.CharField(max_length=30, required=False,label=_(u'City'))
    postal_code = forms.CharField(max_length=8, required=False, label=_(u'Postal code'))
    street = forms.CharField(max_length=30, required=False, label=_(u'Street'))
    house_number = forms.CharField(max_length=30, required=False, label=_(u'House number'))
    phone_number = forms.CharField(max_length=12, required=True, label=_(u'Phone number'))
    url_facebook = forms.CharField(max_length=50, required=False, label=_(u'Facebook'))
    url_goldenline = forms.CharField(max_length=50, required=False, label=_(u'Goldenline'))
    url_likedin = forms.CharField(max_length=50, required=False, label=_(u'Likedin'))
    url_custom1 = forms.CharField(max_length=50, required=False, label=_(u'Own link'))
    url_custom2 = forms.CharField(max_length=50, required=False, label=_(u'Own link'))
    class Meta:
        model = ProDriverProfile
        exclude = ('user', )

class AlumniAccountEmailForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ('email',)


#class ProfessionsForm(forms.ModelForm):
    #class Meta:
        #model = User
        #fields = ('email', 'username',)

#class StaffUploadForm(forms.Form):
    #attachments = MultiFileField(min_num=1, max_num=10, max_file_size=1024*1024*5)
    #class Meta:
        #model = User
        #fields = ('email', 'username',)