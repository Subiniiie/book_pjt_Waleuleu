<template>
  <div>
    <h1 class="title">🔔최신도서 목록입니다.</h1>
    <div class="book">
      <ul>
        <span 
          v-for="newBook in currentPage"
          :key="newBook.title"
          class="books"
        >
          <img :src="newBook.cover" alt="newBook.cover" @click="makeModal(newBook)">
        </span>
      </ul>
      <div class="pagination-container">
        <div class="prev-btn" @click="prevPage">이전</div>
        <div class="number-btn-wrapper" ref="numberBtnWrapper">
          <span 
            v-for="pageNumber in getTotalPage"
            :key="pageNumber"
            class="number-btn"
            @click="setPageOf(pageNumber)"
          >
            {{ pageNumber }}
        </span>
        </div>
        <div class="next-btn" @click="nextPage">이후</div>
      </div>
    </div>
    <div v-if="isActive" id="modal">
      <div class="x-mark" @click="closeModal">❌</div>
      <img :src="selectedBook.cover" alt="selectedBook.cover" class="selected-book-cover">
      <div class="modal-text">
        <h1>{{ selectedBook.title }}</h1>
        <h2>{{ selectedBook.author }}</h2>
        <h4>{{ selectedBook.publisher }}</h4>
        <h4>{{ selectedBook.pubDate }}</h4>
        <h4>{{ selectedBook.priceSales }}원</h4>
        <p><줄거리></p>
        <p>{{ selectedBook.description }}</p>
      </div>
    </div>
    <div v-if="isActive" id="black" @click="closeModal"></div>
</div>
  </template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useBookStore } from '@/stores/book'


const BookStore = useBookStore()

// 이미지 클릭하면 책 정보(모달)
const isActive = ref(false)
const selectedBook = ref(null)

const makeModal = function(newBook) {
  selectedBook.value = newBook
  isActive.value = true
}

const closeModal = function() {
  isActive.value = false
}

// 페이지네이션
const PerPage = 12

const getTotalPage = computed(() => {
  return Math.ceil(BookStore.newBooks.length / PerPage)
})

const currentPage = ref([])
const currentPageNumber = ref(1)

const setPageOf = function(pageNumber) {
  currentPageNumber.value = pageNumber
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

const prevPage = function() {
  if (currentPageNumber.value > 1) {
    setPageOf(currentPageNumber.value - 1)
  }
}

const nextPage = function() {
  if (currentPageNumber.value < getTotalPage.value) {
    setPageOf(currentPageNumber.value + 1)
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
  left: 200px;
  top: 70px;
}

span > img {
  width: 400px;
  height: 470px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
}

.book {
  position: relative;
  left: 250px;
  top: 120px;
  width: 2600px;
}

#modal {
  position: fixed;
  top:250px;
  left: 600px;
  width: 1800px;
  height: 1000px;
  background-color: #efebe6;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

#modal > img {
  position: relative;
  top: 100px;
  left: 200px;
  width: 500px;
  height: 630px;
  float: left;
}

.modal-text {
  position: relative;
  top: 170px;
  left: 300px;
  width: 900px;
  height: 600px;
  overflow-y: auto;
}

.modal-text > p {
  font-size: 30px;
}

.x-mark {
  position: relative;
  top: 25px;
  left: 1700px;
  font-size: 40px;
}

#black {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.733);
}


.pagination-container {
  display: flex;
  justify-content: center;
}

.prev-btn, .next-btn, .number-btn {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 24px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  user-select: none;
  transition: background-color 0.3s;
}

.prev-btn:hover, .next-btn:hover, .number-btn:hover {
  background-color: #ddd;
}

.number-btn-wrapper {
  display: flex;
}
</style>