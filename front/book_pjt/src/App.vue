<template>
  <header>
    <nav class="navbar bg-body-tertiary">
        <div class="navbar-text1">
          <RouterLink :to="{ name: 'new-book' }">최신도서</RouterLink>
           | 
          <RouterLink :to="{ name: 'bestseller' }">베스트셀러</RouterLink>
          | 
          <RouterLink :to="{ name: 'domestic'}">국내도서</RouterLink>
           
          <RouterLink :to="{ name: 'home'}">
            <img src="/logo.png" alt="logo">
          </RouterLink>
           
          <RouterLink :to="{ name: 'author'}">작가검색</RouterLink>
          | 
          <RouterLink :to="{ name: 'community'}">커뮤니티</RouterLink>
          | 
          <RouterLink :to="{ name: 'mypage', params: {'id': 1}}">마이페이지</RouterLink>
          </div>
          <div class="navbar-text2">
            <RouterLink :to="{ name: 'login'}">로그인</RouterLink>
            <RouterLink :to="{ name: 'signup'}">회원가입</RouterLink>
          </div>
  </nav>
  </header>
  <main class="content">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
img {
  width: 55px;
  height: 55px;
}

nav {
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
}

.navbar-text1 {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.navbar-text1 > a {
  margin: 0 30px;
}

.content {
  padding-top: 100px;
}
</style>
