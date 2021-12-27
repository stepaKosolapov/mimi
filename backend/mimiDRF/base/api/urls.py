from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('dialogs/', views.getDialogs),  # to get list of dialogs
    path('messages/<str:pk>/', views.messages),  # to getMessages with pk user
    path('profile/<str:pk>/', views.profile)
]
