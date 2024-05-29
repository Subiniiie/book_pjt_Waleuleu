<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'new-book' }">최신도서</RouterLink>
      <RouterLink :to="{ name: 'bestseller' }">베스트셀러</RouterLink>
      <RouterLink :to="{ name: 'category'}">장르</RouterLink>
      <RouterLink :to="{ name: 'home'}">HOME</RouterLink>
      <RouterLink :to="{ name: 'author'}">인기작가</RouterLink>
      <RouterLink :to="{ name: 'community'}">커뮤니티</RouterLink>
      <RouterLink :to="{ name: 'mypage', params: {'id': 1}}">마이페이지</RouterLink>
      <RouterLink :to="{ name: 'login'}">로그인</RouterLink>
      <RouterLink :to="{ name: 'signup'}">회원가입</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
</style>
