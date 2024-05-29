from rest_framework import serilalizer
from .models import Author, Book


class AuthorSerializer(serilalizer.ModelSerializer):
  
  class Meta :
    model = Author
    fields = '__all__'
    
    
class BookSerializer(serilalizer.ModelSerializer):
  
  class Meta:
    model = Book
    fields = '__all__'