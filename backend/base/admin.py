from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *
from .forms import *

# Register your models here.


class CustomUserAdmin(UserAdmin):
    list_display = [
        "email",
        "username",
        "is_active",
        "is_superuser",
        "date_joined",
        "last_login",
    ]
    search_fields = ["email", "username"]
    readonly_fields = ["id", "date_joined", "last_login"]
    filter_horizontal = ()
    list_filter = ("is_active", 'is_superuser')
    fieldsets = ()

    ordering = ["email"]


class QuizAdmin(admin.ModelAdmin):
    list_display = ["title", "number_of_questions", "duration", "date_created"]
    readonly_fields = ["date_created"]
    search_fields = ["title"]


class AnswerAdmin(admin.ModelAdmin):
    list_display = ["option_1", 'option_2', 'option_3', 'option_4', "correct_answer"]


class QuestionAdmin(admin.ModelAdmin):
    list_display = ["question", "quiz"]


admin.site.register(Quiz, QuizAdmin)
admin.site.register(AnswerChoice, AnswerAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
