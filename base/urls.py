from django.urls import path
from .views import *


urlpatterns = [
    path("", home, name='home'),
    path('create-quiz/', QuizCreateView.as_view(), name='quiz'),
    path('create-question/', QuestionCreateView.as_view(), name='question'),
]