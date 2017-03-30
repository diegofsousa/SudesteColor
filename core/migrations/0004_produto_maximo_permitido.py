# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-29 21:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20170329_1613'),
    ]

    operations = [
        migrations.AddField(
            model_name='produto',
            name='maximo_permitido',
            field=models.IntegerField(blank=True, default=50, null=True, verbose_name='Máximo de unidades permitidas para compra'),
        ),
    ]
