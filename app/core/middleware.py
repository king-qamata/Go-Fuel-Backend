import socket
from core.models import PageView


class AnalyticsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)

        # Track page views for HTML responses
        if (
            request.method == "GET"
            and response.status_code == 200
            and "text/html" in response.get("Content-Type", "")
            and not request.path.startswith("/admin/")
            and not request.path.startswith("/api/")
            and not request.path.startswith("/static/")
        ):
            try:
                PageView.objects.create(
                    user=request.user if request.user.is_authenticated else None,
                    page=request.path,
                    user_agent=request.META.get("HTTP_USER_AGENT", ""),
                    ip_address=self.get_client_ip(request),
                )
            except Exception:
                # Don't break the response if analytics fails
                pass

        return response

    def get_client_ip(self, request):
        x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
        if x_forwarded_for:
            ip = x_forwarded_for.split(",")[0]
        else:
            ip = request.META.get("REMOTE_ADDR")
        return ip