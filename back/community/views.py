from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from .models import Article, Comment
from .serializers import ArticleSerializer, ArticleItemSerializer, Commentserilalizer

from django.shortcuts import get_object_or_404, get_list_or_404

# Create your views here.
# 게시판
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def community(request):
  if request.method == 'GET': 
    articles = get_list_or_404(Article)
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)
  
  elif request.method == 'POST':
    serializer = ArticleItemSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
      serializer.save(user=request.user)
      return Response(serializer.data, status=status.HTTP_201_CREATED)

# 게시글 상세페이지
@api_view(['GET'])
def article_detail(request, article_pk):
  article = get_object_or_404(Article, pk=article_pk)
  
  if request.method == 'GET':
    serializer = ArticleItemSerializer(article)
    print(serializer.data)
    return Response(serializer.data)