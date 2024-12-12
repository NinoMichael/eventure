from django.shortcuts import render
from rest_framework import viewsets
from .models import (
    Utilisateur, Organisateur, Lieu, TypeEvenement, Evenement,
    Inscription, Notification, Rappel, Programme, Espace, Message
)
from .serializers import (
    UtilisateurSerializer, OrganisateurSerializer, LieuSerializer, TypeEvenementSerializer,
    EvenementSerializer, InscriptionSerializer, NotificationSerializer, RappelSerializer,
    ProgrammeSerializer, EspaceSerializer, MessageSerializer
)
# Create your views here.
class UtilisateurViewSet(viewsets.ModelViewSet):
    queryset = Utilisateur.objects.all()
    serializer_class = UtilisateurSerializer

class OrganisateurViewSet(viewsets.ModelViewSet):
    queryset = Organisateur.objects.all()
    serializer_class = OrganisateurSerializer

class LieuViewSet(viewsets.ModelViewSet):
    queryset = Lieu.objects.all()
    serializer_class = LieuSerializer

class TypeEvenementViewSet(viewsets.ModelViewSet):
    queryset = TypeEvenement.objects.all()
    serializer_class = TypeEvenementSerializer

class EvenementViewSet(viewsets.ModelViewSet):
    queryset = Evenement.objects.all()
    serializer_class = EvenementSerializer

class InscriptionViewSet(viewsets.ModelViewSet):
    queryset = Inscription.objects.all()
    serializer_class = InscriptionSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer

class RappelViewSet(viewsets.ModelViewSet):
    queryset = Rappel.objects.all()
    serializer_class = RappelSerializer

class ProgrammeViewSet(viewsets.ModelViewSet):
    queryset = Programme.objects.all()
    serializer_class = ProgrammeSerializer

class EspaceViewSet(viewsets.ModelViewSet):
    queryset = Espace.objects.all()
    serializer_class = EspaceSerializer

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
