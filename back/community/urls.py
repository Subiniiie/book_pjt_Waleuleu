from django.urls import path
from . import views

urlpatterns = [
    path('community/', views.community),
    path('article/<int:article_pk>/', views.article_detail),
    path('article/<int:article_pk>/comments/', views.comment_create),
]
