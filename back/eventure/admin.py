from django.contrib import admin
from .models import (
    Utilisateur, Organisateur, Lieu, TypeEvenement, Evenement,
    Inscription, Notification, Rappel, Programme, Espace, Message
)

# Register your models here.

admin.site.register(Utilisateur)
admin.site.register(Organisateur)
admin.site.register(Lieu)
admin.site.register(TypeEvenement)
admin.site.register(Evenement)
admin.site.register(Inscription)
admin.site.register(Notification)
admin.site.register(Rappel)
admin.site.register(Programme)
admin.site.register(Espace)
admin.site.register(Message)
