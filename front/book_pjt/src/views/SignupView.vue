<template>
  <div>
    <h1>회원가입</h1>
    <form @submit.prevent="signUp">
      <div>
        <label for="username">username : </label>
        <input type="text" v-model.trim="username" id="username">
      </div>
      <div>
        <label for="nickname">nickname : </label>
        <input type="text" v-model.trim="nickname" id="nickname">
      </div>
      <div>
        <label for="email">email : </label>
        <input type="email" v-model.trim="email" id="email">
      </div>
      <div>
        <label for="gender">gender : </label>
        <input type="checkbox" id="gender1" name="man" value="man" v-model="gender">
          <label for="man">man</label>
        <input type="checkbox" id="gender2" name="woman" value="woman" v-model="gender">
          <label for="woman">woman</label>
        </input>
      </div>
      <div>
        <label for="age">age : </label>
        <input type="number" id="age" name="age" min="10" max="100">
      </div>
      <div>
        <label for="genre">genre : </label>
          <select name="genre" v-model="genre">
            <option value="computer_science">컴퓨터 과학</option>
            <option value="philsophy">철학</option>
            <option value="religion">종교</option>
            <option value="social_science">사회과학</option>
            <option value="language">언어</option>
            <option value="science">과학</option>
            <option value="technology">기술</option>
            <option value="art">예술</option>
            <option value="literature">문학</option>
            <option value="history">역사</option>
          </select>
      </div>
      <div>
        <label for="password1">password : </label>
        <input type="password" v-model.trim="password1" id="password1">
      </div>
      <div>
        <label for="password2">password confirmation : </label>
        <input type="password" v-model.trim="password2" id="password2">
      </div>
      <input type="submit" value="회원가입">
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore()

const username = ref(null)
const nickname = ref(null)
const email = ref(null)
const gender = ref([])
const age = ref(null)
const genre = ref(null)
const password1 = ref(null)
const password2 = ref(null)

const signUp = function() {
  const payload = {
    username: username.value,
    nickname: nickname.value,
    email: email.value,
    gender: gender.value[0],
    age: age.value,
    genre: genre.value,
    password1: password1.value,
    password2: password2.value,
  }
  store.signUp(payload)
}
</script>

<style scoped>

</style>