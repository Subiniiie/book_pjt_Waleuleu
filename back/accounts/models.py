from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser) :
  nickname = models.CharField(max_length=30, default='닉네임1')
  email = models.EmailField(max_length=100)
  age = models.IntegerField(null=True)
  gender = models.CharField(max_length=10, null=True)
  genre = models.CharField(max_length=10, null=True)