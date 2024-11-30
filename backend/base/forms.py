from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import *


class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ['email', 'name', 'password1', 'password2']
        widgets = {
            "password": forms.PasswordInput(),
        }


class QuizForm(forms.ModelForm):
    title = forms.CharField(max_length=250)
    description = forms.Textarea()

    class Meta:
        model = Quiz
        fields = ("title", "description", "number_of_questions", "duration")


class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ["quiz", "question"]
