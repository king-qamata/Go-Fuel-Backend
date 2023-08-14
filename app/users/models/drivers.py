from django.contrib.auth.models import AbstractUser, UserManager
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.forms import ModelForm


class CustomUserManager(UserManager):
    pass

class CustomUser(AbstractUser):
    objects = CustomUserManager()
    
    age = models.PositiveIntegerField(null=True, blank=True)
    phone_number = models.CharField(max_length=12, blank=True)
    url_facebook = models.CharField(max_length=50, blank=True)
    url_twitter = models.CharField(max_length=50, blank=True)
    url_linkedin = models.CharField(max_length=50, blank=True)
    url_instagram = models.CharField(max_length=50, blank=True)
    url_custom = models.CharField(max_length=50, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=100, blank=True)
    current_workplace = models.CharField(max_length=100, blank=True)
    picture = models.ImageField(default='default.jpg', upload_to='profile_pics', max_length=255)
    is_oisStaff = models.BooleanField(default=False)
    is_oisalumni = models.BooleanField(default=False) 
    is_oisguardian = models.BooleanField(default=False) 

# class OisStaffProfileForm(ModelForm):
    #class Meta:
        #model = OisStaffProfile
        #fields = ['user', 'bio', 'location']    
   

class OisStaffProfile(models.Model):
	user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, null=True, related_name='ois_staff_profile')
	bio = models.CharField(max_length=30, blank=True)
	location = models.CharField(max_length=30, blank=True)

def __str__(self):
        return self.user.username


#class OisStaffProfileForm(ModelForm):
    #class Meta:
        #model = OisStaffProfile
        #fields = ['user', 'bio', 'location']    
  
class OisAlumniProfile(models.Model):
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
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE,null=True, related_name='ois_alumni_profile') 
    gender = models.CharField(max_length=1, choices=SEX_CHOICES, null=True)
    year_of_graduation = models.CharField(max_length=4, choices=YEAR_OF_GRADUATION, null=True)
    middle_name = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.user.username

class OisAlumniProfileForm(ModelForm):
    class Meta:
        model = OisAlumniProfile
        fields = ['user', 'gender', 'year_of_graduation', 'middle_name']
class OisAlumniGuardianProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, null=True, related_name='ois_alumni_guardian_profile')
    alumni = models.ForeignKey(OisAlumniProfile, on_delete=models.CASCADE, null=True, blank=True)
    
    def __str__(self):
        return self.user.username

class OisAlumniGuardianProfileForm(ModelForm):
    class Meta:
        model = OisAlumniGuardianProfile
        fields = ['user', 'alumni']


@receiver(post_save, sender=CustomUser)
def create_user_profile(sender, instance, created, **kwargs):
	print('****', created)
	if instance.is_oisalumni:
		OisAlumniProfile.objects.get_or_create(user = instance)
	if instance.is_oisguardian:
		OisAlumniGuardianProfile.objects.get_or_create(user = instance)
    #if instance.is_oisstaff:
		#OisStaffProfile.objects.get_or_create(user = instance)


	
@receiver(post_save, sender=CustomUser)
def save_user_profile(sender, instance, **kwargs):

	print('_-----')	
	# print(instance.internprofile.bio, instance.internprofile.location)
	if instance.is_oisalumni:
		instance.ois_alumni_profile.save()
	if instance.is_oisguardian:
		instance.ois_alumni_guardian_profile.save()
        #if instance.is_oisstaff:
		#instance.ois_staff_profile.save()

