from django.urls import path, include
from api.urls import router

from dj_rest_auth.urls import LoginView
from .views import *


urlpatterns = [
    path("", home, name="home"),
    path("api/", include(router.urls)),
    path("create-quiz/", parse_quiz_view, name="create-quiz"),
    path("api/parse_view/", ParseQuizView.as_view()),
    path("quiz/<slug:slug>/", quiz, name="quiz"),
    path("register/", register, name="register"),
    path("api/google-login/", GoogleLoginView.as_view(), name="google"),
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", logout_view, name="logout"),
]
