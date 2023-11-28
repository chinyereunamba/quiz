from django.urls import path

from dj_rest_auth.urls import LoginView, LogoutView

from .views import *


urlpatterns = [
    path("", home, name='home'),
    path('create-quiz/', parse_quiz_view, name='create-quiz'),
    path("quiz/<slug:slug>/", quiz, name='quiz'),
    path('register/', register, name='register'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
]