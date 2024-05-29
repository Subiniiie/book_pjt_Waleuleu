from rest_framework import serializers
from .models import New_Book, Bestseller

# 최신도서
class NewBookSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = New_Book
    fields = '__all__'
    
    
# 베스트셀러
class BestsellerSerializer(serializer.ModelSerializer):
  
  class Meta:
    model = Bestseller
    fields = '__all__'