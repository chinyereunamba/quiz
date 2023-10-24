from typing import Any
from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin,
)

# Create your models here.


class CustomUserManager(BaseUserManager):
    def create_user(self, email_address, password, *args, **kwargs):
        if not email_address:
            raise ValueError("Users must have an email address")

        email_address = self.normalize_email(email=email_address).lower()
        user = self.model(email_address=email_address, *args, **kwargs)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email_address, password):
        user = self.create_user(email_address=email_address, password=password)

        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True

        user.save(using=self._db)

        return user


class CustomUser(AbstractBaseUser):
    email_address = models.EmailField(
        max_length=80, verbose_name="Email Address", unique=True
    )
    first_name = models.CharField(max_length=125, blank=True)
    last_name = models.CharField(max_length=125, blank=True)

    date_joined = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    last_login = models.DateTimeField(auto_now=True, blank=True, null=True)

    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "email_address"

    class Meta:
        ordering = ['email_address']

    def __str__(self) -> str:
        return self.email_address
    
    def has_module_perms(self, app_label):
        return True

    def has_perm(self, obj=None):
        return self.is_admin


class Quiz(models.Model):
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
    date_created= models.DateField(auto_now_add=True, blank=True)

    def __str__(self) -> str:
        return f"{self.question} in {self.quiz}"


class AnswerChoice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.CharField(max_length=500)
    is_correct_answer = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f"answer for {self.question}"
