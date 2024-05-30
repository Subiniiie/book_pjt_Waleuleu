from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import AuthorSerializer, BookSerializer
from .models import Author, Book
# Create your views here.
@api_view(['GET'])
def author(request):
  authors = Author.objects.all()
  serializer = AuthorSerializer(authors, many=True)
  return Response(serializer.data)


@api_view(['GET'])
def author_detail(request, author_pk):
  # 요청된 author_pk가 같은 모든 책
  books = Book.objects.filter(author_id=author_pk)
  serializer = BookSerializer(books, many=True)
  return Response(serializer.data)
