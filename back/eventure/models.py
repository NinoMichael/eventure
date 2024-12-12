from django.db import models
from django.utils import timezone

# Create your models here.

class Utilisateur(models.Model):
    id_utilisateur = models.AutoField(primary_key=True)
    nom_utilisateur = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    contact = models.CharField(max_length=15)
    mdp = models.CharField(max_length=255)
    img = models.ImageField(upload_to='utilisateurs/', null=True, blank=True)

    class Meta:
        verbose_name = "Utilisateur"

    def __str__(self):
        return self.nom_utilisateur

class Organisateur(models.Model):
    id_organisateur = models.AutoField(primary_key=True)
    nom_organisateur = models.CharField(max_length=100)
    responsable = models.CharField(max_length=100)
    contact = models.CharField(max_length=15)
    mdp = models.CharField(max_length=255)
    email = models.EmailField(unique=True)

    class Meta:
        verbose_name = "Organisateur"

    def __str__(self):
        return self.nom_organisateur

class Lieu(models.Model):
    id_lieu = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()

    class Meta:
        verbose_name = "Lieu"

    def __str__(self):
        return self.nom

class TypeEvenement(models.Model):
    id_type = models.AutoField(primary_key=True)
    intitule = models.CharField(max_length=100)

    class Meta:
        verbose_name = "Type Evenement"

    def __str__(self):
        return self.intitule

class Evenement(models.Model):
    id_evenement = models.AutoField(primary_key=True)
    intitule = models.CharField(max_length=200)
    lieu = models.ForeignKey(Lieu, on_delete=models.CASCADE)
    date_debut = models.DateTimeField()
    date_fin = models.DateTimeField()
    description = models.TextField()
    capacite = models.IntegerField()
    couverture = models.ImageField(upload_to='evenements/', null=True, blank=True)
    type = models.ForeignKey(TypeEvenement, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Evenement"

    def __str__(self):
        return self.intitule

class Inscription(models.Model):
    id_inscription = models.AutoField(primary_key=True)
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    evenement = models.ForeignKey(Evenement, on_delete=models.CASCADE)
    date_inscription = models.DateTimeField(default=timezone.now)
    nb_accompagnateur = models.IntegerField()

    class Meta:
        verbose_name = "Inscription"

    def __str__(self):
        return f"Inscription {self.id_inscription} - {self.utilisateur}"

class Notification(models.Model):
    id_notification = models.AutoField(primary_key=True)
    utilisateur = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
    contenu = models.TextField()
    date = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = "Notification"

    def __str__(self):
        return f"Notification {self.id_notification}"

class Rappel(models.Model):
    id_rappel = models.AutoField(primary_key=True)
    contenu = models.TextField()
    inscription = models.ForeignKey(Inscription, on_delete=models.CASCADE)
    date = models.DateTimeField()

    class Meta:
        verbose_name = "Rappel"

    def __str__(self):
        return f"Rappel {self.id_rappel}"

class Programme(models.Model):
    id_programme = models.AutoField(primary_key=True)
    contenu = models.TextField()
    evenement = models.ForeignKey(Evenement, on_delete=models.CASCADE)
    date_debut = models.DateTimeField()
    date_fin = models.DateTimeField()

    class Meta:
        verbose_name = "Programme"

    def __str__(self):
        return f"Programme {self.id_programme}"

class Espace(models.Model):
    id_espace = models.AutoField(primary_key=True)
    inscription = models.ForeignKey(Inscription, on_delete=models.CASCADE)
    date_creation = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = "Espace"

    def __str__(self):
        return f"Espace {self.id_espace}"

class Message(models.Model):
    id_message = models.AutoField(primary_key=True)
    espace = models.ForeignKey(Espace, on_delete=models.CASCADE)
    contenu = models.TextField()
    date_envoi = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = "Message"

    def __str__(self):
        return f"Message {self.id_message}"
