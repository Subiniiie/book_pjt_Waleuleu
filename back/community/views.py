from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from .models import Article, Comment
from .serializers import ArticleSerializer, ArticleItemSerializer, CommentSerializer

# Create your views here.
# 게시판
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def community(request):
  if request.method == 'GET':
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)
  elif request.method == 'POST':
    serializer = ArticleSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
      serializer.save(user=request.user)
      return Response(serializer.data)
    
    
# 게시물 상세페이지
@api_view(['GET', 'PUT', 'DELETE'])
def article_detail(request, article_pk):
  article = Article.objects.get(pk=article_pk)
  if request.method == 'GET':
    serializer = ArticleSerializer(article)
    return Response(serializer.data)
  elif request.method == 'PUT':
    serializer = ArticleSerializer(data=request.data, instance=article)
    if serializer.is_valid(raise_exception=True):
      serializer.save(user=request.user)
      return Response(serializer.data)
  elif request.method == 'DELETE':
    article.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  
  
# 댓글달기
@api_view(['POST'])
def comment_create(request, article_pk):
  article = Article.objects.get(pk=article_pk)
  serializer = CommentSerializer(data=request.data)
  if serializer.is_valid(raise_exception=True):
    serializer.save(article=article, user=request.user)
    return Response(serializer.data)
  
  
# 댓글삭제
@api_view(['DELETE'])
def comment_delete(request, article_pk, comment_pk):
  article = Article.objects.get(pk=article_pk)
  comment = article.comment_set.get(pk=comment_pk)
  comment.delete()
  return Response(status=status.HTTP_204_NO_CONTENT)