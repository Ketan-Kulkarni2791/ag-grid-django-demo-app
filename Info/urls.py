from django.urls import path
from . import views

urlpatterns = [
    path('info/', views.PersonalInfoApi),
    path('info/<int:id>/', views.PersonalInfoApi),
]