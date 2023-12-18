from rest_framework import routers
from base.views import QuizzesView


router = routers.DefaultRouter()
router.register("quiz_view", QuizzesView)