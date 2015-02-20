# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0004_auto_20150205_1435'),
    ]

    operations = [
        migrations.AddField(
            model_name='pages',
            name='position',
            field=models.CharField(default=datetime.datetime(2015, 2, 11, 20, 17, 9, 648416, tzinfo=utc), max_length=255),
            preserve_default=False,
        ),
    ]
