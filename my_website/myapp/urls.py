from django.urls import path
from . import views

urlpatterns = [
    path('',views.home, name='home'),
    path('note/',views.note, name='note'),
    path('blog/',views.blog, name='blog'),
    path('explore/',views.explore, name='explore'),
    path('mathIII/',views.mathIII, name='mathIII'),
    # note all url
    path('java/',views.java, name='java'),
    path('web/',views.web,name='web'),
    path('microprocessor/',views.microprocessor,name='microprocessor'),
    path('login/',views.login_view,name='login'),
    path('dashboard/',views.dashboard,name='dashboard'),
    path('logout/',views.logout_view,name='logout'),
    path('cv/',views.cv,name='cv'),
    path("register/", views.register_view, name="register"),

    
]
