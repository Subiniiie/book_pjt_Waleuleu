<template>
  <div>
    <h1 class="title">🤖마이페이지</h1>
    <div class="content">
      <div class="text">
        <p>아이디 : {{ store.userInfo.username }}</p>
        <p>닉네임 : {{ store.userInfo.nickname }}</p>
        <p>이메일 : {{ store.userInfo.email }}</p>
        <p>나이 : {{ store.userInfo.age }}</p>
        <p>성별 : {{ store.userInfo.gender }}</p>
        <p>좋아하는 장르 : {{ store.userInfo.genre }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'


const store = useCounterStore()

onMounted(() => {
  store.getMyPage()
})
</script>

<style scoped>
.title {
  position: relative;
  display: inline-block;
  left: 200px;
  top: 70px;
}

.content {
  position: relative;
  width: 1300px;
  height: 1100px;
  font-size: 30px;
}

.text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>