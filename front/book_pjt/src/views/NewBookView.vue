<template>
  <div>
    <h1>🔔최신도서 목록입니다.</h1>
    <div class="book">
      <span 
        v-for="newBook in BookStore.newBooks"
        :key="newBook.title"
        class="books"
      >
        <img :src="newBook.cover" alt="{{ newBook.cover }}" @click="makeModal(newBook)">
      </span>
      <div class="pagination-container">
        <div class="prev-btn">이전</div>
        <div class="number-btn-wrapper" ref="numberBtnWrapper">
          <span 
            v-for="pageNumber in getTotalPage"
            :key="pageNumber"
            class="number-btn"
          >
            {{ pageNumber }}
        </span>
        </div>
        <div class="next-btn">이후</div>
      </div>
    </div>
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
import { ref, onMounted, computed } from 'vue'
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

  // 페이지네이션
  const PerPage = 12

  const getTotalPage = computed(() => {
    return Math.ceil(BookStore.newBooks.length / PerPage)
  })

</script>

<style scoped>
h1 {
  position: relative;
  display: inline-block;
  left: 230px;
  top: 90px;
}

img {
  width: 400px;
  height: 470px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
}

.book {
  position: relative;
  left: 270px;
  top: 145px;
  width: 2600px;
}

#modal {
  width: 1800px;
  height: 1000px;
  border: 5px solid black;
}

.pagination-container {
  display: flex;
  justify-content: center;
}
</style>