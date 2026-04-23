from django.test import SimpleTestCase
from django.urls import reverse


class ApiRootViewTests(SimpleTestCase):
    def test_api_root_returns_service_metadata(self):
        response = self.client.get(reverse("api:root"))

        self.assertEqual(response.status_code, 200)
        payload = response.json()

        self.assertEqual(payload["service"], "go-fuel-backend")
        self.assertEqual(payload["status"], "ok")
        self.assertIn("healthcheck", payload["endpoints"])
        self.assertIn("prices", payload["endpoints"])
        self.assertIn("stations", payload["endpoints"])
        self.assertIn("admin", payload["endpoints"])
        self.assertIn("core", payload["apps"])
