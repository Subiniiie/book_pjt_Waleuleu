from rest_framework import serializer
from .models import Article, Comment

class ArticleSerializer(serializer.ModelSerializer):
  
  class Meta :
    model = Article
    fields = '__all__'
    
    
class Commentserilalizer(serializer.ModelSerializer):
  
  class Meta:
    model = Comment
    fields = '__all__'