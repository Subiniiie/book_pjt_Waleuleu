from django.urls import path
from . import views

urlpatterns = [
    path('community/', views.community),
    path('community/<int:article_pk>/', views.article_detail),
]
