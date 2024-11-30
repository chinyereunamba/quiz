from rest_framework import routers
from base.views import QuizzesView
from django.urls import path

router = routers.DefaultRouter()
router.register("quiz_view", QuizzesView, basename="quizzes")
