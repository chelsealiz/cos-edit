from django.contrib import admin
from image_cropping import ImageCroppingMixin
from .models import CropImageExample
from easy_thumbnails.files import get_thumbnailer


class CropImageExampleAdmin(ImageCroppingMixin, admin.ModelAdmin):
    readonly_fields = ('image_url', 'thumb_url',)

    def get_form(self, request, obj=None, **kwargs):
        if not obj:
            kwargs['fields'] = ['name', 'position', 'original_image_width', 'original_image_height', 'facebook_url',
                                'twitter_url', 'google_url','tumblr_url', 'github_url', 'cos_url', 'linkedin_url', 'image', ]
            kwargs['exclude'] = ['image_url', 'thumb_url', ]
        else:
            kwargs['fields'] = ['name', 'position', 'original_image_width', 'original_image_height', 'facebook_url',
                                'twitter_url', 'google_url', 'tumblr_url', 'github_url', 'cos_url', 'linkedin_url', 'image', 'thumb_image_width',
                                'thumb_image_height', 'min_free_cropping', 'image_url', 'thumb_url', ]
        return super(CropImageExampleAdmin, self).get_form(request, obj, **kwargs)

    def image_url(self, obj):
        if not obj.image:
            return 'zobair'
        return '<a target="_blank" href="' + obj.image.url + '">' + obj.image.url + '</a>'
    image_url.allow_tag = True

    def thumb_url(self, obj):
        if not obj.image or not obj.thumb_image_width or not obj.thumb_image_height:
            return 'zobair'
        url = get_thumbnailer(obj.image).get_thumbnail({
            'size': (obj.thumb_image_width, obj.thumb_image_height),
            'box': obj.min_free_cropping,
            'crop': True,
            'detail': True,
            }).url
        return '<a target="_blank" href="' + url + '">' + url + '</a>'
    thumb_url.allow_tag = True

admin.site.register(CropImageExample, CropImageExampleAdmin)
