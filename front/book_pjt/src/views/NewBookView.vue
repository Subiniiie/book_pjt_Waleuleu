<template>
  <div>
    <h1>최신도서</h1>
    <ul>
      <div 
        v-for="newBook in BookStore.books"
        :key="newBook.title"
        class="book"
      >
      <img :src="newBook.cover" alt="">
        <h1>{{ newBook.title }}</h1>
        <h2>{{ newBook.author }}</h2>
        <h2>{{ newBook.publisher }}</h2>
        <h2>{{ newBook.pubDate }}</h2>
        <p>줄거리 : {{ newBook.description }}</p>
    </div>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import { useBookStore } from '@/stores/book'
import NewBook from '@/components/NewBook.vue';

const BookStore = useBookStore()

onMounted(() => {
  BookStore.getNewbooks()
})
</script>

<style scoped>
.book {
  border: 1px solid black;
}
</style>