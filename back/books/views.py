from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import New_Book, Bestseller
from .serializers import NewBookSerializer, BestsellerSerializer

# Create your views here.
@api_view(['GET'])
def newbook(requeset):
  serializer = NewBookSerializer(data=request.data)
  return Response(serializer.data)


@api_view(['GET'])
def bestseller(request):
  serializer = BestsellerSerializer(data=request.data)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def like_new_books(request):
  user = request.user
  liked_new_books = user.like_New_Books.all()
  serializer = NewBookSerializer(like_New_Books, many=True)
  return Response(serializer.data)