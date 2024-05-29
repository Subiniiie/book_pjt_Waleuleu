from django.db import models

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