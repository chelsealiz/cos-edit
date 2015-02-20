# coding=utf-8
from django import template
from ..models import Contact
register = template.Library()

def contacts_latlng():
    return {
            'contact': Contact.objects.all()[0]
    }

contacts_latlng = register.inclusion_tag('contacts/latlng.html', takes_context = False)(contacts_latlng)
