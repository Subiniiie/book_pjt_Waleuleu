<template>
  <div>
    <h1>마이페이지</h1>
    <p>아이디 : {{ store.userInfo.username }}</p>
    <p>닉네임 : {{ store.userInfo.nickname }}</p>
    <p>이메일 : {{ store.userInfo.email }}</p>
    <p>나이 : {{ store.userInfo.age }}</p>
    <p>성별 : {{ store.userInfo.gender }}</p>
    <p>좋아하는 장르 : {{ store.userInfo.genre }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

onMounted(() => {
  store.getMyPage()
})
</script>

<style scoped>

</style>