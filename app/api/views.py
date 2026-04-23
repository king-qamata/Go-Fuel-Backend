from django.http import JsonResponse
from django.urls import reverse


def api_root_view(request):
    return JsonResponse(
        {
            "service": "go-fuel-backend",
            "status": "ok",
            "endpoints": {
                "healthcheck": request.build_absolute_uri(
                    reverse("api:healthcheck")
                ),
                "prices": request.build_absolute_uri(reverse("api:prices")),
                "stations": request.build_absolute_uri(reverse("api:stations")),
                "prices_page": request.build_absolute_uri(reverse("core:prices")),
                "stations_page": request.build_absolute_uri(reverse("core:stations")),
                "admin": request.build_absolute_uri("/admin/"),
            },
            "apps": [
                "api",
                "controller",
                "core",
                "fuelcredit",
                "geolocation",
                "posts",
                "qrcodes",
                "users",
                "votes",
                "walletcredit",
            ],
        }
    )
