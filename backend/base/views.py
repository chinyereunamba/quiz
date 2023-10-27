from django.shortcuts import render, redirect
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate, logout


from .models import *
from .forms import *
from .utils.ai import *
from .utils.quiz_parser import *

# Create your views here.


@login_required(login_url="/login")
def home(request):
    model = Quiz.objects.filter(user=request.user)
    context = {"quizzes": model}

    return render(request, "base/home.html", context)


def register(request):
    form = CustomUserCreationForm()
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()

    return render(request, "base/sign_up.html", {"form": form})


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


def logout_view(request):
    logout(request)
    return redirect("login")


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

            AnswerChoice.objects.create(
                question=question_create,
                option_1=options[0][3:],
                option_2=options[1],
                option_3=options[2],
                option_4=options[3],
                correct_answer=question["correct_answer"],
            )

        return redirect("home")

    return render(request, "base/form.html")


def quiz(request, slug):
    quiz_model = Quiz.objects.get(slug=slug)
    question = Question.objects.filter(quiz=quiz_model).order_by("?")[
        : quiz_model.number_of_questions
    ]
    answers = AnswerChoice.objects.filter(question__in=question)

    u = []
    for i in question:
        u.append(
            {
                "question": i,
                "answer": {
                    "option_1": AnswerChoice.objects.get(question=i).option_1,
                    "option_2": AnswerChoice.objects.get(question=i).option_2,
                    "option_3": AnswerChoice.objects.get(question=i).option_3,
                    "option_4": AnswerChoice.objects.get(question=i).option_4,
                },
            }
        )

    context = {"quiz": quiz, "questions": question, "answers": answers, "dict": u}

    return render(request, "base/quiz.html", context)
