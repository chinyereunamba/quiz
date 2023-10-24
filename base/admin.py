from django.contrib import admin
from .models import *

# Register your models here.


class QuizAdmin(admin.ModelAdmin):
    list_display = ["title", "number_of_questions", "duration", "date_created"]
    readonly_fields = ["date_created"]
    search_fields = ["title"]


class AnswerAdmin(admin.ModelAdmin):
    list_display = ["answer", "is_correct_answer"]


admin.site.register(Quiz, QuizAdmin)
admin.site.register(AnswerChoice, AnswerAdmin)
admin.site.register(Question)
