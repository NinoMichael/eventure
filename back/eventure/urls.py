from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UtilisateurViewSet, OrganisateurViewSet, LieuViewSet, TypeEvenementViewSet,
    EvenementViewSet, InscriptionViewSet, NotificationViewSet, RappelViewSet,
    ProgrammeViewSet, EspaceViewSet, MessageViewSet
)

router = DefaultRouter()
router.register(r'utilisateurs', UtilisateurViewSet, basename='utilisateur')
router.register(r'organisateurs', OrganisateurViewSet, basename='organisateur')
router.register(r'lieux', LieuViewSet, basename='lieu')
router.register(r'types-evenements', TypeEvenementViewSet, basename='type-evenement')
router.register(r'evenements', EvenementViewSet, basename='evenement')
router.register(r'inscriptions', InscriptionViewSet, basename='inscription')
router.register(r'notifications', NotificationViewSet, basename='notification')
router.register(r'rappels', RappelViewSet, basename='rappel')
router.register(r'programmes', ProgrammeViewSet, basename='programme')
router.register(r'espaces', EspaceViewSet, basename='espace')
router.register(r'messages', MessageViewSet, basename='message')

urlpatterns = [
    path('api/', include(router.urls)),
]
