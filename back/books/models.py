from django.db import models
from django.conf import settings

# Create your models here.
  
# 최신도서
class New_Book(models.Model):
  title = models.CharField(max_length=50)
  author = models.CharField(max_length=50)
  publisher = models.CharField(max_length=50)
  pub_date = models.DateTimeField()
  description = models.TextField()
  cover = models.TextField()
  isbn = models.CharField(max_length=15)
  price = models.IntegerField()
  category = models.CharField(max_length=20)
  like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_New_Books')
  
  
# 베스트셀러
class Bestseller(models.Model):
  title = models.CharField(max_length=50)
  author = models.CharField(max_length=50)
  publisher = models.CharField(max_length=50)
  pub_date = models.DateTimeField()
  description = models.TextField()
  cover = models.TextField()
  isbn = models.CharField(max_length=15)
  price = models.IntegerField()
  category = models.CharField(max_length=20)
  rate = models.DecimalField(max_digits=15, decimal_places=2)
  rank = models.IntegerField()