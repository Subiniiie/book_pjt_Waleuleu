<template>
  <div>
    <h1>최신도서</h1>
    <ul>
      <div 
        v-for="newBook in BookStore.newBooks"
        :key="newBook.title"
        class="book"
      >
      <img :src="newBook.cover" alt="{{ newBook.cover }}" @click="makeModal(newBook)">
    </div>
    </ul>
  </div>
  <div v-if="isActive" id="modal">
    <img :src="selectedBook.cover" alt="{{ selected.cover }}">
    <h1>{{ selectedBook.title }}</h1>
    <h2>{{ selectedBook.author }}</h2>
    <h4>{{ selectedBook.publisher }}</h4>
    <h4>{{ selectedBook.pubDate }}</h4>
    <h4>{{ selectedBook.priceSales }}</h4>
    <p>{{ selectedBook.description }}</p>
  </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue'
import { useBookStore } from '@/stores/book'

const BookStore = useBookStore()

onMounted(() => {
  BookStore.getNewbooks()
})

// 이미지 클릭하면 책 정보
const isActive = ref(false)
const selectedBook = ref(null)

const makeModal = function(newBook) {
  selectedBook.value = newBook
  isActive.value = true
}
</script>

<style scoped>
.book {
  border: 1px solid black;
}

#modal {
  width: 1800px;
  height: 1000px;
  border: 5px solid black;
}
</style>