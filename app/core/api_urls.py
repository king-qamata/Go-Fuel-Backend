from django.urls import path

from core.views import healthcheck_view, prices_api_view, stations_api_view


urlpatterns = [
    path("health/", healthcheck_view, name="healthcheck"),
    path("prices/", prices_api_view, name="prices"),
    path("stations/nearby/", stations_api_view, name="stations"),
]
