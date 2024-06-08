<template>
  <div>
    <h1>최신도서</h1>
    <ul>
      <div 
        v-for="newBook in BookStore.books"
        :key="newBook.title"
        class="book"
      >
      <img :src="newBook.cover" alt="{{ newBook.cover }}" @click="makeModal(newBook)">
        <h1>{{ newBook.title }}</h1>
        <h2>{{ newBook.author }}</h2>
        <h2>{{ newBook.publisher }}</h2>
        <h2>{{ newBook.pubDate }}</h2>
        <p>줄거리 : {{ newBook.description }}</p>
    </div>
    </ul>
  </div>
  <div v-if="isActive" id="modal">
    {{ selectedBook.title }}
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
  width: 400px;
  height: 400px;
  border: 5px solid black;
}
</style>