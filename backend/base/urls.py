from django.urls import path, include

from dj_rest_auth.urls import LoginView
from rest_framework import routers
from .views import *


router = routers.DefaultRouter()
router.register("quiz_view", QuizzesView)
# router.register("parse_view", ParseQuizView)

urlpatterns = [
    path("", home, name="home"),
    path("api/", include(router.urls)),
    # path("create-quiz/", parse_quiz_view, name="create-quiz"),
    path("api/parse_view/", ParseQuizView.as_view()),
    path("quiz/<slug:slug>/", quiz, name="quiz"),
    path("register/", register, name="register"),
    # path('login/', login_view, name='login'),
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", logout_view, name="logout"),
]
