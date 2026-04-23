from django.urls import include, path

from api.views import api_root_view


app_name = "api"

urlpatterns = [
    path("", api_root_view, name="root"),
    path("", include("core.api_urls")),
]
