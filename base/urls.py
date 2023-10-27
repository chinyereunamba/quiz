from django.urls import path
from .views import *


urlpatterns = [
    path("", home, name='home'),
    path('create-quiz/', parse_quiz_view, name='quiz'),
]