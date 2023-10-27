from django.urls import path
from .views import *


urlpatterns = [
    path("", home, name='home'),
    path('create-quiz/', parse_quiz_view, name='quiz'),
    path('register/', register, name='register'),
    path('login/', login_view, name='login')
]