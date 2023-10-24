from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import *

# Register your models here.

class CustomUserAdmin(UserAdmin):
    list_display = ['email_address', "is_active", 'is_admin', 'is_superuser', 'date_joined', 'last_login']
    search_fields = ['email_address']
    readonly_fields = ['id', 'date_joined', 'last_login']
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

    ordering = ['email_address']

class QuizAdmin(admin.ModelAdmin):
    list_display = ["title", "number_of_questions", "duration", "date_created"]
    readonly_fields = ["date_created"]
    search_fields = ["title"]


class AnswerAdmin(admin.ModelAdmin):
    list_display = ["answer", "is_correct_answer"]

class QuestionAdmin(admin.ModelAdmin):
    list_display = ["question", "quiz"]


admin.site.register(Quiz, QuizAdmin)
admin.site.register(AnswerChoice, AnswerAdmin)
admin.site.register(Question, QuestionAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
