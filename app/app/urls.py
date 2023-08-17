"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.contrib import admin
from django.urls import path, include, re_path
#from search import views as search_views
from wagtail.admin import urls as wagtailadmin_urls
from wagtail import urls as wagtail_urls
from wagtail.documents import urls as wagtaildocs_urls
from users.views.customers import CustomerWaitListView 
from core.views.custom_user import HomePageView, AboutPageView
from users.views.drivers import (CustomUserSignUpView,
                                 DriverProfileView,
                                 ProDriverProfileView,
                                 VendorStaffProfileView
                                )
from django.views.generic import TemplateView
from django.contrib.auth import views as auth_views
from longclaw import urls as longclaw_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('accounts/', include('django.contrib.auth.urls')),
    path('api/v1/', include('api.urls')),
    path('api-auth/', include('rest_framework.urls')),
    re_path(r'^wadmin/', include(wagtailadmin_urls)),
    re_path(r'^documents/', include(wagtaildocs_urls)),
    #re_path(r'^search/$', search_views.search, name='search'),
    #path('', include('users.urls')),
   # path('signup/', CustomUserSignUpView.as_view(), name='signup'),
    #path('signup/customers', CustomerWaitListView.as_view(), name='signup_customer'),
    path("login", auth_views.LoginView.as_view(), name="login"),
    path("logout", auth_views.LogoutView.as_view(), name="logout"),
    path('accounts/', include('allauth.urls')),
    path('accounts/signup/driver', DriverProfileView.as_view(), name='signup_driver'),
    path('accounts/signup/prodriver', ProDriverProfileView.as_view(), name='signup_prodriver'),
    path('accounts/signup/vendor', VendorStaffProfileView.as_view(), name='signup_vendor'),
    path('', HomePageView.as_view(), name='home'),
    path('', include(longclaw_urls)),
    path('', include(wagtail_urls)),
    #path('about/', AboutPageView.as_view(), name='about'),
    #path('', include('waitinglist.urls'), name='waitinglist'),
    #path('', include('cohorts.urls'), name='cohorts'),
    
    
]

if settings.DEBUG:
    from django.conf.urls.static import static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    # Serve static and media files from development server
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)