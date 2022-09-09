from django.contrib import admin
from django.urls import path, include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('',views.home,name="home"),
    path('faith_center',views.faith_center,name="faith_center"),
    path('rani_sati',views.rani_sati,name="rani_sati"),
    path('buddha',views.buddha,name="buddha"),
    path('tridev',views.tridev,name="tridev"),
    path('somnath',views.somnath,name="somnath"),
    path('rishikesh',views.rishikesh,name="rishikesh"),
    path('tirupati',views.tirupati,name="tirupati"),
    path('meenakshi',views.meenakshi,name="meenakshi"),
    path('kanchipuram',views.kanchipuram,name="kanchipuram"),
    path('signup',views.signup,name="signup"),
    path('signin',views.signin,name="signin"),
    path('signout',views.signout,name="signout"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
