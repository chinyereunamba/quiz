from django.shortcuts import render, redirect
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate, logout


from .models import *
from .forms import *
from .utils.ai import *
from .utils.quiz_parser import *

# Create your views here.

@login_required(login_url='/login')
def home(request):
    model = Quiz.objects.all()
    context = {"quizzes": model}

    return render(request, "base/home.html", context)


def register(request):
    form = CustomUserCreationForm()
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        return redirect('login')
    
    return render(request, 'base/sign_up.html', {'form': form})


def login_view(request):
    if request.method == "POST":
        try:
            email = request.POST.get("email")
            password = request.POST.get("password")

            # Authenticate user based on email and password
            user = authenticate(request, email=email, password=password)

            if user is not None:
                # User authenticated successfully, log them in
                login(request, user)
                return redirect("home")

        except Exception as e:
            print("There was an error")
    return render(request, "base/login.html")


@login_required(login_url="login")
def parse_quiz_view(request):
    if request.method == "POST":
        title = request.POST.get("title")
        description = request.POST.get("description")
        number_of_questions = request.POST.get("number_of_questions")
        duration = request.POST.get("duration")

        quiz = Quiz.objects.create(
            user=request.user,
            title=title,
            description=description,
            number_of_questions=number_of_questions,
            duration=duration,
        )

        number_of_questions = int(number_of_questions) * 2

        quiz_text = get_questions(
            key=settings.AI_API, no=number_of_questions, description=description
        )

        questions_data = parse_quiz_text(quiz_text)

        for question in questions_data:
            question_create = Question.objects.create(
                quiz=quiz, question=question["question_text"]
            )
            options = question["options"]

            option_index = ["A", "B", "C", "D"]

            for option in options:
                correct = False
                for i in option_index:
                    if question["correct_answer"] == i and option_index.index(
                        i
                    ) == options.index(option):
                        correct = True
                AnswerChoice.objects.create(
                    question=question_create, answer=option, is_correct_answer=correct
                )
        return redirect("home")

    return render(request, "base/form.html")
