from django.urls import path
from . import views


urlpatterns = [
    path('newbook/', views.newbook),
    path('bestseller/', views.bestseller),
    path('likes/', views.like_new_books),
]
