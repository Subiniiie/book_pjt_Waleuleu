from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
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