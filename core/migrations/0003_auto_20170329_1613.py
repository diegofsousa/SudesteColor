# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-29 16:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20170329_1612'),
    ]

    operations = [
        migrations.AlterField(
            model_name='produto',
            name='minimo_permitido',
            field=models.IntegerField(blank=True, default=3, null=True, verbose_name='Minimo de unidades permitidas para compra'),
        ),
    ]