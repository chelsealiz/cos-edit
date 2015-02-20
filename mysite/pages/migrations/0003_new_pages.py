# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations

def add_default(apps, schema_editor):
    Pages = apps.get_model("pages", "Pages")
    page_home = Pages()
    page_home.name = u'About'
    page_home.slug = u'about'
    page_home.body = u'About Content'
    page_home.save()

    page_home = Pages()
    page_home.name = u'My mission'
    page_home.slug = u'my-mission'
    page_home.body = u'My Mission Content'
    page_home.save()

    page_home = Pages()
    page_home.name = u'My Goal'
    page_home.slug = u'my-goal'
    page_home.body = u'My Goal Content'
    page_home.save()

    page_home = Pages()
    page_home.name = u'Service'
    page_home.slug = u'service'
    page_home.body = u'Service Content'
    page_home.save()

    page_home = Pages()
    page_home.name = u'Get Involved'
    page_home.slug = u'get-involved'
    page_home.body = u'Get Involved Content'
    page_home.save()

    page_home = Pages()
    page_home.name = u'News'
    page_home.slug = u'news'
    page_home.body = u'News'
    page_home.save()

class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_auto_20150128_0834'),
    ]

    operations = [
        migrations.RunPython(add_default)
    ]
