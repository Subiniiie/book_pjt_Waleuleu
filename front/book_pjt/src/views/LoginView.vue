<template>
  <div>
    <h1>로그인</h1>
    <form @submit.prevent="logIn">
      <label for="username">username : </label>
      <input type="text" id="username" v-model.trim="username">

      <label for="password">password : </label>
      <input type="text" id="password" v-model.trim="password">

      <input type="submit" value="로그인">
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

// input id인 username, password와 양방향 소통
const username = ref(null)
const password = ref(null)

const logIn = function() {
  const payload = {
    username: username.value,
    password: password.value
  }
  // store logIn에 payload(username, password)를 보낸다
  store.logIn(payload)
}
</script>

<style scoped>

</style>