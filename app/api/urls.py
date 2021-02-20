from django.urls import include, path
from core.views import AdministratorView, ModeratorView, ModeratorDetail
from rest_framework_swagger.views import get_swagger_view
from rest_framework.documentation import include_docs_urls

schema_view = get_swagger_view(title='Easy App API')

urlpatterns = [
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('swagger-docs', schema_view),
    path('docs/', include_docs_urls(title='Easy App API')),
    path('users/', include('users.urls')),
     # Administrators
    path('administrators', AdministratorView.as_view()),

    # Moderators
    path('moderators', ModeratorView.as_view()),
    path('moderators/<int:pk>', ModeratorDetail.as_view()),
]
