# coding=utf-8
from django.db import models

class Pages(models.Model):
    name = models.CharField(max_length = 255)
    slug = models.SlugField()
    body = models.TextField(null = True)

    def __unicode__(self):
        return self.name

    class Meta:
        verbose_name = u'page'
