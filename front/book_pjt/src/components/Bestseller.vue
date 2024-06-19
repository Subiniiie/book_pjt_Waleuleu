<template>
  <div>
    <h1 class="title">🧿베스트셀러</h1>
    <div class="book">
      <ul>
        <span
          v-for="bestseller in currentPage"
          :key="bestseller.title"
        >
          <img :src="bestseller.cover" alt="bestseller.cover" class="book-image">
        </span>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, computed } from 'vue'
import { useBookStore } from '@/stores/book'

const BookStore = useBookStore()

const PerPage = 12

const currentPage = ref([])

const setPageOf = function(pageNumber) {
  currentPage.value = []
  for (
    let i = PerPage * (pageNumber - 1);
    i <= PerPage * (pageNumber - 1) + 11 && i <= BookStore.bestseller.length;
    i++
  ) {
    if (BookStore.bestseller[i]){
      currentPage.value.push(BookStore.bestseller[i])
    }
  }
}

onMounted(async () => {
  BookStore.getBestseller()
  setPageOf(1)
})
</script>

<style scoped>
.title {
  position: relative;
  display: inline-block;
  left: 300px;
  top: 310px;
  font-weight: 548;
  font-size: 40px;
}

.book {
  position: relative;
  display: inline-block;
  left: 45px;
  top: 520px;
}

.book-image {
  width: 220px;
  height: 300px;
  padding-right: 10px;
}
</style>