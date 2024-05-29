from django.db import models

# Create your models here.
class Author(models.Model):
  name = models.CharField(max_length=30)
  
  
class Book(models.Model):
  author = models.ForeignKey(Author, on_delete=models.CASCADE)
  title = models.CharField(max_length=30)
  publisher = models.CharField(max_length=50)
  pubdate = models.DateTimeField()
  description = models.TextField()
  cover = models.TextField()
  category = models.CharField(max_length=20)