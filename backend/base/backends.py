from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend


class CaseInsensitiveModelBackend(ModelBackend):
    def authenticate(self, request, name=None, password=None, **kwargs):
        UserModel = get_user_model()
        if name is None:
            name = kwargs.get(UserModel.USERNAME_FIELD)
        try:
            case_insenstive_username_fields = '{}__iexact'.format(
                UserModel.USERNAME_FIELD)
            user = UserModel._default_manager.get(
                **{case_insenstive_username_fields: name})
        except UserModel.DoesNotExist:
            UserModel().set_password(password)
        else:
            if user.check_password(password) and self.user_can_authenticate(user):
                return user
