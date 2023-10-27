from django.shortcuts import render
from django.conf import settings
from .models import *
from .forms import *
from .utils.ai import *
from .utils.quiz_parser import *

# Create your views here.


def home(request):
    model = Quiz.objects.all()
    context = {"quizzes": model}

    return render(request, "base/home.html", context)


def parse_quiz_view(request):
    if request.method == "POST":
        title = request.POST.get("title")
        description = request.POST.get("description")
        number_of_questions = request.POST.get("number_of_questions")
        duration = request.POST.get("duration")

        quiz = Quiz.objects.create(
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
                    if question["correct_answer"] == i and option_index.index(i) == options.index(option):

                        correct = True
                AnswerChoice.objects.create(
                    question=question_create, answer=option, is_correct_answer=correct
                )

    return render(request, "base/form.html")
