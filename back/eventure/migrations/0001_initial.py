# Generated by Django 5.1.3 on 2024-12-11 21:25

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Evenement',
            fields=[
                ('id_evenement', models.AutoField(primary_key=True, serialize=False)),
                ('intitule', models.CharField(max_length=200)),
                ('date_debut', models.DateTimeField()),
                ('date_fin', models.DateTimeField()),
                ('description', models.TextField()),
                ('capacite', models.IntegerField()),
                ('couverture', models.ImageField(blank=True, null=True, upload_to='evenements/')),
            ],
            options={
                'verbose_name': 'Evenement',
            },
        ),
        migrations.CreateModel(
            name='Lieu',
            fields=[
                ('id_lieu', models.AutoField(primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=100)),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
            ],
            options={
                'verbose_name': 'Lieu',
            },
        ),
        migrations.CreateModel(
            name='Organisateur',
            fields=[
                ('id_organisateur', models.AutoField(primary_key=True, serialize=False)),
                ('nom_organisateur', models.CharField(max_length=100)),
                ('responsable', models.CharField(max_length=100)),
                ('contact', models.CharField(max_length=15)),
                ('mdp', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254, unique=True)),
            ],
            options={
                'verbose_name': 'Organisateur',
            },
        ),
        migrations.CreateModel(
            name='TypeEvenement',
            fields=[
                ('id_type', models.AutoField(primary_key=True, serialize=False)),
                ('intitule', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Type Evenement',
            },
        ),
        migrations.CreateModel(
            name='Utilisateur',
            fields=[
                ('id_utilisateur', models.AutoField(primary_key=True, serialize=False)),
                ('nom_utilisateur', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('contact', models.CharField(max_length=15)),
                ('mdp', models.CharField(max_length=255)),
                ('img', models.ImageField(blank=True, null=True, upload_to='utilisateurs/')),
            ],
            options={
                'verbose_name': 'Utilisateur',
            },
        ),
        migrations.CreateModel(
            name='Inscription',
            fields=[
                ('id_inscription', models.AutoField(primary_key=True, serialize=False)),
                ('date_inscription', models.DateTimeField(default=django.utils.timezone.now)),
                ('nb_accompagnateur', models.IntegerField()),
                ('evenement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventure.evenement')),
                ('utilisateur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventure.utilisateur')),
            ],
            options={
                'verbose_name': 'Inscription',
            },
        ),
        migrations.CreateModel(
            name='Espace',
            fields=[
                ('id_espace', models.AutoField(primary_key=True, serialize=False)),
                ('date_creation', models.DateTimeField(default=django.utils.timezone.now)),
                ('inscription', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventure.inscription')),
            ],
            options={
                'verbose_name': 'Espace',
            },
        ),
        migrations.AddField(
            model_name='evenement',
            name='lieu',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventure.lieu'),
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id_message', models.AutoField(primary_key=True, serialize=False)),
                ('contenu', models.TextField()),
                ('date_envoi', models.DateTimeField(default=django.utils.timezone.now)),
                ('espace', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventure.espace')),
            ],
            options={
                'verbose_name': 'Message',
            },
        ),
        migrations.CreateModel(
            name='Programme',
            fields=[
                ('id_programme', models.AutoField(primary_key=True, serialize=False)),
                ('contenu', models.TextField()),
                ('date_debut', models.DateTimeField()),
                ('date_fin', models.DateTimeField()),
                ('evenement', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventure.evenement')),
            ],
            options={
                'verbose_name': 'Programme',
            },
        ),
        migrations.CreateModel(
            name='Rappel',
            fields=[
                ('id_rappel', models.AutoField(primary_key=True, serialize=False)),
                ('contenu', models.TextField()),
                ('date', models.DateTimeField()),
                ('inscription', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventure.inscription')),
            ],
            options={
                'verbose_name': 'Rappel',
            },
        ),
        migrations.AddField(
            model_name='evenement',
            name='type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventure.typeevenement'),
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id_notification', models.AutoField(primary_key=True, serialize=False)),
                ('contenu', models.TextField()),
                ('date', models.DateTimeField(default=django.utils.timezone.now)),
                ('utilisateur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eventure.utilisateur')),
            ],
            options={
                'verbose_name': 'Notification',
            },
        ),
    ]
