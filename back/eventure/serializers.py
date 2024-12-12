from rest_framework import serializers
from .models import (
    Utilisateur, Organisateur, Lieu, TypeEvenement, Evenement,
    Inscription, Notification, Rappel, Programme, Espace, Message
)

class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = '__all__'

class OrganisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organisateur
        fields = '__all__'

class LieuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lieu
        fields = '__all__'

class TypeEvenementSerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeEvenement
        fields = '__all__'

class EvenementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evenement
        fields = '__all__'

class InscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscription
        fields = '__all__'

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

class RappelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rappel
        fields = '__all__'

class ProgrammeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Programme
        fields = '__all__'

class EspaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Espace
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'