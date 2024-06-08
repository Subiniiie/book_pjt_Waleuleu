from rest_framework import serializers
from .models import Article, Comment
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = User
    fields = ('pk', 'nickname')

class ArticleSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  
  class Meta :
    model = Article
    fields = '__all__'
    
class ArticleItemSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    
    class Meta :
      model = Comment
      fields = '__all__'
  
  comment_set = CommentSerializer(many=True, read_only=True)
  class Meta:
    model = Article
    fields = '__all__'
    
class CommentSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  article = ArticleSerializer(read_only=True)
  
  class Meta:
    model = Comment
    fields = '__all__'