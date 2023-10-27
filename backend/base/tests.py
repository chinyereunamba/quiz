from django.test import TestCase
from django.contrib.auth import get_user_model

# Create your tests here.


class UserAccountTest(TestCase):
    def test_new_superuser(self):
        db = get_user_model()
        super_user = db.objects.create_superuser(
            email="test@mail.com",
            username="username",
            password="password",
        )
        self.assertEqual(str(super_user), "test@mail.com")
        self.assertEqual(super_user.email, "test@mail.com")
        self.assertEqual(super_user.username, "username")
        # self.assertEqual(super_user.password, 'password')
        self.assertTrue(super_user.is_superuser)
        self.assertTrue(super_user.is_staff)
        self.assertTrue(super_user.is_admin)
        self.assertTrue(super_user.is_active)

        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email="test@mail.com",
                username="username",
                password="password",
                is_superuser=False,
            )

        with self.assertRaises(ValueError):
            db.objects.create_superuser(
                email="", username="username", password="password", is_superuser=True
            )

    def test_new_user(self):
        db = get_user_model()
        user = db.objects.create_user(
            email="test@mail.com",
            username="username",
            password="password",
        )
        self.assertEqual(str(user), "test@mail.com")
        self.assertEqual(user.email, "test@mail.com")
        self.assertEqual(user.username, "username")
        # self.assertEqual(user.password, "password")
        self.assertFalse(user.is_superuser)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_admin)
        self.assertTrue(user.is_active)

        with self.assertRaises(ValueError):
            db.objects.create_user(
                email="test@mail.com",
                username="username",
                password="password",
                is_superuser=True,
            )

        with self.assertRaises(ValueError):
            db.objects.create_user(
                email="test@mail.com",
                username="username",
                password="password",
                is_staff=True,
            )

        with self.assertRaises(ValueError):
            db.objects.create_user(
                email="", username="username", password="password", is_superuser=False
            )
class QuizTest(TestCase):
    pass