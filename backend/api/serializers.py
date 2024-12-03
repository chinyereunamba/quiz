from dj_rest_auth.serializers import LoginSerializer
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from dj_rest_auth.registration.serializers import RegisterSerializer
from django.contrib.auth import get_user_model
from base.models import *

User = get_user_model()


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "first_name", "last_name", "is_admin"]


class CustomRegisterSerializer(RegisterSerializer):
    name = serializers.CharField(required=False)

    def get_cleaned_data(self):
        super(CustomRegisterSerializer, self).get_cleaned_data()
        return {
            "email": self.validated_data.get("email", ""),
            "first_name": self.validated_data.get("first_name", ""),
            "last_name": self.validated_data.get("last_name", ""),
            "username": self.validated_data.get("username", ""),
            "password1": self.validated_data.get("password1", ""),
            "password2": self.validated_data.get("password2", ""),
        }
    
class QuizSerializer(ModelSerializer):
    class Meta:
        model = Quiz
        fields = "__all__"


class QuestionSerializer(ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"


class AnswerChoiceSerializer(ModelSerializer):
    class Meta:
        model = AnswerChoice
        fields = "__all__"
