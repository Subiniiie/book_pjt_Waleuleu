from django.urls import path

urlpatterns = [
    path('author/', views.author),
    path('author/<int:author_pk>/', views.author_detail),
]
