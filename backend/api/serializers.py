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
        fields = [
            "id",
            "name",
            "email",
            "is_admin",
            'is_google_account',
        ]


class GoogleAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoogleAccount
        fields = ["google_id", "profile_picture"]


class CustomRegisterSerializer(RegisterSerializer):
    name = serializers.CharField(required=False)

    def get_cleaned_data(self):
        cleaned_data = super().get_cleaned_data()
        cleaned_data["email"] = self.validated_data.get("email", "")
        cleaned_data["name"] = self.validated_data.get("name", "")
        cleaned_data["password1"] = self.validated_data.get("password1", "")
        cleaned_data["password2"] = self.validated_data.get("password2", "")
        return cleaned_data


class CustomLoginSerializer(LoginSerializer):
    username = None  # Remove the username field
    email = serializers.EmailField(required=True)

    def validate(self, attrs):
        # Replace `username` with `email` in the login process
        email = attrs.get("email")
        password = attrs.get("password")

        if email and password:
            user = self.authenticate(email=email, password=password)
            if user:
                if not user.is_active:
                    raise serializers.ValidationError(
                        "User account is disabled.")
                return {
                    "email": user.email,
                    "token": user.auth_token.key,
                }
            else:
                raise serializers.ValidationError("Invalid email or password.")
        else:
            raise serializers.ValidationError(
                "Must include email and password.")

    def authenticate(self, email, password):
        from django.contrib.auth import authenticate

        return authenticate(email=email, password=password)


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
