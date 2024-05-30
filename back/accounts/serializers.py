from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import User

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
  password1 = serializers.CharField(write_only=True)
  password2 = serializers.CharField(write_only=True)

  class Meta :
    model = User
    fields = '__all__'
    
  def validate(self, data):
    if data['password1'] != data['password2'] :
      raise serializers.ValidationError("Passwords do not match.")
    return data
  
  def create(self, validated_data):
    validated_data.pop('password2')
    user = User(
      username=validated_data['username'],
      nickname=validated_data['nickname'],
      email=validated_data['email'],
      age=validated_data['age'],
      gender=validated_data['gender'],
      genre=validated_data['genre'],
    )
    user.set_password(validated_data['password1'])
    user.save()
    return user