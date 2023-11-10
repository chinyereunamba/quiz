from typing import Any
from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin,
)

from django.utils.translation import gettext_lazy as _

# Create your models here.


class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password, **extra_fields):
        if not email:
            raise ValueError(_("Users must have an email address"))

        email = self.normalize_email(email=email).lower()
        user = self.model(email=email, username=username, **extra_fields)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password, **extra_fields):
        user = self.create_user(
            email=email, username=username, password=password, **extra_fields
        )

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True

        user.save(using=self._db)

        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_("email address"), max_length=80, unique=True)
    username = models.CharField(_("username"), max_length=40, unique=True, blank=True)
    first_name = models.CharField(_("first name"), max_length=125, blank=True)
    last_name = models.CharField(_("last name"), max_length=125, blank=True)

    date_joined = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    last_login = models.DateTimeField(auto_now=True, blank=True, null=True)

    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = 'User'
        ordering = ["email"]

    def __str__(self) -> str:
        return self.email

    def has_module_perms(self, app_label):
        return True

    def has_perm(self, obj=None):
        return self.is_admin


class Quiz(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    title = models.CharField(
        max_length=250, blank=False, null=False, help_text="Title of your quiz"
    )
    description = models.TextField(blank=False, null=False)
    number_of_questions = models.IntegerField(default=5)
    duration = models.PositiveIntegerField(default=5)
    date_created = models.DateTimeField(auto_now_add=True)

    slug = models.SlugField(blank=True, null=True)

    def __str__(self) -> str:
        return self.title

    def save(self, *args, **kwargs):
        if self.slug == None:
            slug = slugify(self.title)
            has_slug = Quiz.objects.filter(slug=slug).exists()
            count = 1
            while has_slug:
                count += 1
                slug = f"{slugify(self.title)}-{count}"
                has_slug = Quiz.objects.filter(slug=slug).exists()

            self.slug = slug

        return super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = "Quizzes"


class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    question = models.TextField(blank=False, null=False)
    date_created = models.DateField(auto_now_add=True, blank=True)

    def __str__(self) -> str:
        return f"{self.question} in {self.quiz}"


class AnswerChoice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    option_1 = models.CharField(max_length=500)
    option_2 = models.CharField(max_length=500)
    option_3 = models.CharField(max_length=500)
    option_4 = models.CharField(max_length=500)
    ANSWER_CHOICES = [
        ('A', 'A'),
        ('B', 'B'),
        ('C', 'C'),
        ('D', 'D'),
    ]
    correct_answer = models.CharField(
        choices=ANSWER_CHOICES, max_length=125, blank=True
    )

    def __str__(self) -> str:
        return f"answer for {self.question}"
