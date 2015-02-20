from django.shortcuts import get_object_or_404
from django.views import generic
from ..crop_image_example.models import CropImageExample
from twitter_feed.import_tweets import ImportTweets
from ..pages.models import Pages
from ..contact.models import Contact
from django.conf import settings


class HomepageView(generic.TemplateView):
    template_name = 'homepage/index.html'

    def get_context_data(self, **kwargs):
        importer = ImportTweets()
        importer.update_tweets()
        context = super(HomepageView, self).get_context_data(**kwargs)
        context['images'] = CropImageExample.objects.all()
        context['page'] = Pages.objects.filter(slug = u'home')
        context['contact'] = Contact.objects.all()
        return context
