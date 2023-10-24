from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import CreateView
from .models import Quiz
from .forms import *

# Create your views here.

def home(request):
    model = Quiz.objects.all()
    context = {
        'quizzes': model
    }

    return render(request, 'base/home.html', context)

class QuizCreateView(CreateView):
    model = Quiz
    fields = "__all__"
    template_name = "base/form.html"
    success_url = 'question'

class QuestionCreateView(CreateView):
    model = Question
    fields = "__all__"
    template_name = "base/form.html"
    success_url = 'answer'

class AnswerCreateView(CreateView):
    model = AnswerChoice
    fields = "__all__"
    template_name = "base/form.html"
    success_url = 'home'
