from django.shortcuts import render, redirect
from django.http import HttpResponse
from users.forms.drivers import CustomUserCreationForm, OisStaffProfileForm, OisAlumniProfileForm, OisAlumniGuardianForm
from django.urls import reverse_lazy
#from users.models.drivers import CustomUser, OisStaffProfile, OisAlumniProfile, OisAlumniGuardianProfile
from core.models import User
from django.contrib import messages
from django.contrib.auth import login, authenticate
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic.edit import CreateView, UpdateView, DeleteView, FormView
from django.views.generic import TemplateView, CreateView
from django.utils.translation import gettext as _
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
#from allauth.account.views import SignupView, LoginView
from allauth.account.signals import user_signed_up
from django.dispatch import receiver




class CustomUserSignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('home')  
    template_name = 'account/signup.html'

#class SignUpView(CustomUserSignUpView):
    #form_class = CustomUserCreationForm
    #success_url = reverse_lazy('home')  
    #template_name = 'account/signup.html'
#def home(request):
    #if request.user.is_authenticated:
        #if request.user.is_teacher:
            #return redirect('teachers:quiz_change_list')
        #else:
            #return redirect('students:quiz_list')
    #return render(request, 'classroom/home.html')
#class OrderListView(ListView):
    #template_name = 'doors/orders/list.html'

    #def get_queryset(self):
        #user = self.request.user
        #if user.user_type == 1:
            #return Order.objects.all()
        #return Order.objects.filter(creator=user.pk)
class DriverProfileView(CreateView):
    msg = None
    success = False
    model = User
    form_class = OisStaffProfileForm
    template_name = 'account/signup_form.html'

    def get_context_data(self,*args,**kwargs):
        kwargs['user_type'] = 'Regular Users'
        return super().get_context_data(*args,**kwargs)

    #def post(self, form, request):
        #form = OisStaffProfileForm(request.POST)
        #return form
      
    def form_valid(self, form):
        user = form.save()
        email = form.cleaned_data.get("email")
        raw_password = form.cleaned_data.get("password1")
        user = authenticate(email=email, password=raw_password)

        msg = 'User created successfully.'
        success = True
        login(self.request, user, backend='django.contrib.auth.backends.ModelBackend')
        #return redirect('home')
        return render(redirect("home"), {"form": form, "msg": msg, "success": success})
#class StaffSocialSignupView(SignupView):
   # model = CustomUser
    #form_class = StaffSocialSignupForm
    #template_name = 'account/signup_form.html'

    #def get_context_data(self, **kwargs):
        #kwargs['user_type'] = 'OIS Staff'
        #return super().get_context_data(**kwargs)

    #def form_valid(self, form):
        #user = form.save()
        #login(self.request, user, backend='django.contrib.auth.backends.ModelBackend')
        #return redirect('home')


#class MyLoginView(LoginView):
    #template_name = 'my_login.html'

class ProDriverProfileView(CreateView):
    model = User
    form_class = OisAlumniProfileForm
    template_name = 'account/signup_form.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'Commercial Drivers'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user, backend='django.contrib.auth.backends.ModelBackend')
        return redirect('home')

#class AlumniSocialSignupView(SignupView):
    #model = CustomUser
    #form_class = AlumniSocialSignupForm
    #template_name = 'account/signup_form.html'

    #def get_context_data(self, **kwargs):
        #kwargs['user_type'] = 'OIS Staff'
        #return super().get_context_data(**kwargs)

    #def form_valid(self, form):
        #user = form.save()
        #login(self.request, user, backend='django.contrib.auth.backends.ModelBackend')
        #return redirect('home')

class VendorProfileView(CreateView):
    model = User
    form_class = OisAlumniGuardianForm
    template_name = 'account/signup_form.html'

    def get_context_data(self, **kwargs):
        kwargs['user_type'] = 'Partner Vendors'
        return super().get_context_data(**kwargs)

    def form_valid(self, form):
        user = form.save()
        login(self.request, user, backend='django.contrib.auth.backends.ModelBackend')
        return redirect('home')

#class StaffUploadfilesView(SuccessMessageMixin, FormView):
    #template_name = 'pages/upload_documents.html'
    #form_class = StaffUploadForm
    #success_url = '/cockpit/professions/'#+self.kwargs['pk']
    #success_message = _('You upload sucessfull')

    #def get_success_url(self):
            #return reverse('professions_update', kwargs={'pk': self.kwargs['pk']})

    #def form_valid(self, form):
        #if user has persmissions
        #for x in Profession.objects.filter(user_profile = self.request.user.profile):
            #print(x)
            #if( x.id == self.kwargs['pk']):
                #for each in form.cleaned_data['attachments']:
                    #Attachment.objects.create(file=each, profession_id=self.kwargs['pk'])
                #return super(UploadView, self).form_valid(form)
        #return HttpResponseForbidden()



class CustomUserPageView(ListView):
    model = User
    template_name = 'pages/connections_home.html'
    paginate_by = 10

class CustomUserDetailView(DetailView):
    model = User
    template_name = 'pages/connections_detail.html'


class CustomUserCreateView(CreateView):
    model = User
    template_name = 'pages/connections_new.html'
    fields = ['username', 'firstname', 'email']


class CustomUserUpdateView(UpdateView):
    model = User
    template_name = 'pages/connections_edit.html'
    fields = ['username', 'firstname', 'email']

class CustomUserDeleteView(DeleteView):
    model = User
    template_name = 'pages/connections_delete.html'
    success_url = reverse_lazy('connections')



@receiver(user_signed_up, sender=User)
def populate_profile(sociallogin, user, **kwargs):

        user.customuser = User()

        if sociallogin.account.provider == 'facebook':
            user_data = user.socialaccount_set.filter(provider='facebook')[0].extra_data
            picture_url = "http://graph.facebook.com/" + sociallogin.account.uid + "/picture?type=large"
            email = user_data['email']
            full_name = user_data['name']

        if sociallogin.account.provider == 'google':
            user_data = user.socialaccount_set.filter(provider='google')[0].extra_data
            picture_url = user_data['picture']
            email = user_data['email']
            full_name = user_data['name']

        if sociallogin.account.provider == 'linkedin_oauth2':
            user_data = user.socialaccount_set.filter(provider='linkedin_oauth2')[0].extra_data
            #linkedin_url = user_data['public-profile-url']
            #email = user_data['email-address']
            #location = user_data['location']
            #birthDate = user_data['birthDate'] 
            #address = user_data['address']
            #websites = user_data['websites']

        #user.customuser.url_linkedin = linkedin_url
        #user.customuser.email = email
        #user.customuser.location = location
        #user.customuser.date_of_birth = birthDate
        #user.customuser.address = address
        #user.customuser.url_custom = websites
       # user.customuser.save()
