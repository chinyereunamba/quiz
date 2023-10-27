from django import forms
from .models import *


class CustomUserCreationForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ["email_address", "password", "first_name", "last_name"]
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
