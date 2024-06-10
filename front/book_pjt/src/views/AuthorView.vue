<template>
  <div>
    <h1>작가</h1>
    <form @submit.prevent="authorSearch">
      <input type="text" v-model.trim="author">
      <button>검색</button>
    </form>
    <ul>
      <div
        v-for="book in AuthorStore.author"  
        :key="book.title"
      >
      <img :src="book.cover" alt="{{ book.cover }}" @click="makeModal(book)">
    </div>
    </ul>
    <div v-if="isActive" id="modal">
      <img :src="selectedBook.cover" alt="{{ selectedBook.cover }}">
      <h1>{{ selectedBook.title }}</h1>
      <h2>{{ selectedBook.author }}</h2>
      <h4>{{ selectedBook.publisher }}</h4>
      <h4>{{ selectedBook.pubDate }}</h4>
      <h4>{{ selectedBook.priceSales }}</h4>
      <p>{{ selectedBook.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthorStore } from '@/stores/author'

const AuthorStore = useAuthorStore()

const author = ref('')

const authorSearch = function() {
  AuthorStore.getAuthor(author.value)
}

const isActive = ref(false)
const selectedBook = ref('')

const makeModal = function(book) {
  selectedBook.value = book
  isActive.value = true
}
</script>

<style scoped>

</style>