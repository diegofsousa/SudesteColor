# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-31 08:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_slide'),
    ]

    operations = [
        migrations.AddField(
            model_name='slide',
            name='lado_legenda',
            field=models.BooleanField(default=False, verbose_name='Legenda: True para à esquesda e False para à direita'),
        ),
        migrations.AlterField(
            model_name='slide',
            name='imagem',
            field=models.ImageField(upload_to=''),
        ),
    ]
