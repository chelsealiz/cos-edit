# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations

def create_default(apps, schema_editor):
    Pages = apps.get_model("pages", "Pages")
    page_home = Pages()
    page_home.name = u'Home'
    page_home.slug = u'home'
    page_home.body = u'Test Home Content'
    page_home.save()

    page_interests = Pages()
    page_interests.name = u'My interests'
    page_interests.slug = u'my-interests'
    page_interests.body = u'Test My Interests Content'
    page_interests.save()

class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name = 'Pages',
            fields = [
                ('id', models.AutoField(verbose_name = 'ID', serialize = False, auto_created = True, primary_key = True)),
                ('name', models.CharField(max_length = 255)),
                ('slug', models.SlugField()),
                ('body', models.TextField(null = True)),
            ],
            options = {
            },
            bases = (models.Model,),
        ),
        migrations.RunPython(create_default)
    ]
