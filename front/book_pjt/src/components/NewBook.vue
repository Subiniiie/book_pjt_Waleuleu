<template>
  <div>
    <h1 class="title">🔔최신도서</h1>
    <div class="book">
      <ul>
        <span 
          v-for="newBook in currentPage"
          :key="newBook.title"
        >
          <img :src="newBook.cover" alt="newBook.cover" class="book-image">
        </span>
      </ul>
    </div>
  </div>
  <Bestseller />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useBookStore } from '@/stores/book'

import Bestseller from './BestSeller.vue'


const BookStore = useBookStore()

// 페이지네이션
const PerPage = 12

const currentPage = ref([])
const currentPageNumber = ref(1)

const setPageOf = function(pageNumber) {
  currentPage.value = []
  for (
    let i = PerPage * (pageNumber - 1);
    i <= PerPage * (pageNumber - 1) + 11 && i <= BookStore.newBooks.length;
    i++
    ) {
      if (BookStore.newBooks[i]){
        currentPage.value.push(BookStore.newBooks[i])
        }
    }
}

 onMounted(async () => {
  BookStore.getNewbooks()
  setPageOf(1)
})
</script>

<style scoped>
.title {
  position: relative;
  display: inline-block;
  left: 300px;
  top: 165px;
  font-weight: 548;
  font-size: 40px;
}

.book {
  position: relative;
  display: inline-block;
  left: 85px;
  top: 380px;
}

.book-image {
  width: 220px;
  height: 300px;
  padding-right: 10px;
}
</style>