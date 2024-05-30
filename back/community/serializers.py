from rest_framework import serializers
from .models import Article, Comment

class ArticleSerializer(serializers.ModelSerializer):
  
  class Meta :
    model = Article
    fields = ('id', 'user', 'title', 'content')
    
class ArticleItemSerializer(serializers.ModelSerializer):
  class Meta :
    model = Article
    fields = '__all__'
    read_only_fields = ('user',)
    
    
class Commentserilalizer(serializers.ModelSerializer):
  
  class Meta:
    model = Comment
    fields = '__all__'