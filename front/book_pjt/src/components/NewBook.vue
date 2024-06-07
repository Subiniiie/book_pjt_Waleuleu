<template>
  <div>
    <h2>최신도서</h2>
    <button @click="newBook">최신도서</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_APP_ALADIN_API_KEY

const newBook = function() {
  axios({
  method: 'get',
  url: `http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${API_KEY}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
})
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log('에러는',error)
  })
}

</script>

<style scoped>

</style>