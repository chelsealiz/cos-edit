from django.conf.urls import patterns, include, url
from django.conf import settings
from django.contrib import admin
from mysite.homepage import views
from mysite.page.views import AboutBoardPageView, AboutPageView, MissionPageView, PartnersPageView, \
    ServicePageView, GetInvolvedPageView, NewsPageView, ApsPageView, CommunitiesPageView,  \
    InvolvedParticipatesPageView, JobsPageView, SponsorsPageView, StatsPageView, PrPageView

from mysite.our_picture.views import OurPictureView
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
admin.site.site_header = "ZOBAIR DJANGO ADMIN PAGE"

admin.autodiscover()
urlpatterns = patterns('',

    url(r'^(?i)$', views.HomepageView.as_view(), name='homepage'),
    url(r'^(?i)about$', AboutPageView.as_view(), name='about'),
    url(r'^(?i)about_board$', AboutBoardPageView.as_view(), name = 'about_board'),
    url(r'^(?i)about_team$', OurPictureView.as_view(), name='our_picture'),
    url(r'^(?i)about_mission$', MissionPageView.as_view(), name='about_mission'),
    url(r'^(?i)about_partners', PartnersPageView.as_view(), name='about_partners'),
    url(r'^(?i)aps', ApsPageView.as_view(), name='aps'),
    url(r'^(?i)communities$', CommunitiesPageView.as_view(), name='communities'),
    url(r'^(?i)get_invovled$', GetInvolvedPageView.as_view(), name='get_involved'),
    url(r'^(?i)involved_participate$', InvolvedParticipatesPageView.as_view(), name='involved_participates'),
    url(r'^(?i)Jobs$', JobsPageView.as_view(), name='jobs'),
    url(r'^(?i)News$', NewsPageView.as_view(), name='news'),
    url(r'^(?i)Service$', ServicePageView.as_view(), name='service'),
    url(r'^(?i)about_sponsors$', SponsorsPageView.as_view(), name='about_sponsors'),
    url(r'^(?i)stats_consulting$', StatsPageView.as_view(), name='stats_consulting'),
    url(r'^pr\/(?P<item>.*)', PrPageView.as_view(), name='pr'),



    url(r'^admin/', include(admin.site.urls)),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += staticfiles_urlpatterns()

if settings.DEBUG:
    urlpatterns += patterns('',
                            url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
                                'document_root': settings.MEDIA_ROOT,
                                }),
                            )

if settings.DEBUG:
    urlpatterns += patterns('',
                            url(r'^static/(?P<path>.*)$', 'django.views.static.serve'),
                            )

    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
        'document_root': settings.MEDIA_ROOT,
        }),
