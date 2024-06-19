<template>
  <div>
    <div v-if="!searchPerformed">
      <h1 class="title">🔍작가를 입력해주세요.</h1>
      <form @submit.prevent="authorSearch" class="form">
        <input type="text" v-model.trim="author" class="input">
        <button>검색</button>
      </form>
    </div>
    <div v-if="searchPerformed">
      <div v-if="AuthorStore.author.length === 0">
        <p class="noAuthor">찾으시는 작가가 없습니다.</p>
      </div>
      <div v-else>
        <p class="authorName">🔍{{ author }}님의 책입니다.</p>
        <div class="book-container">
          <ul>
            <span
              v-for="book in currentPage"  
              :key="book.title"
            >
            <img :src="book.cover" alt="book.cover" @click="makeModal(book)">
          </span>
          </ul>
          <div class="pagination-container">
            <div class="prev-btn" @click="prevPage">이전</div>
            <div class="number-btn-wrapper" ref="numberBtnwrapper">
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
      </div>
    </div>
    <div v-if="isActive" id="modal">
      <div class="x-mark" @click="closeModal">❌</div>
      <img :src="selectedBook.cover" alt="selectedBook.cover" class="selected-book-modal">
      <div class="modal-text">
        <h1>{{ selectedBook.title }}</h1>
        <h2>{{ selectedBook.author }}</h2>
        <h4>{{ selectedBook.publisher }}</h4>
        <h4>{{ selectedBook.pubDate }}</h4>
        <h4>{{ selectedBook.priceSales }}</h4>
        <p><줄거리></p>
        <p>{{ selectedBook.description }}</p>
      </div>
    </div>
    <div v-if="isActive" id="black" @click="closeModal"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useAuthorStore } from '@/stores/author'

const AuthorStore = useAuthorStore()

const author = ref('')
const searchPerformed = ref(false)

const authorSearch = async function() {
  await AuthorStore.getAuthor(author.value)
  searchPerformed.value = true
  }

const isActive = ref(false)
const selectedBook = ref('')

const makeModal = function(book) {
  selectedBook.value = book
  isActive.value = true
}

const closeModal = function() {
  isActive.value = false
}

const perPage = 12

const getTotalPage = computed(() => {
  return Math.ceil(AuthorStore.author.length / perPage)
})

const currentPage = ref([])
const currentPageNumber = ref(1)

const setPageOf = function(pageNumber) {
  currentPageNumber.value = pageNumber
  currentPage.value = []
  for ( 
    let i = perPage * (pageNumber - 1);
    i <= perPage * (pageNumber - 1) + 11 && i <= AuthorStore.author.length;
    i++
  ) {
    if (AuthorStore.author[i]){
      currentPage.value.push(AuthorStore.author[i])
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

</script>

<style scoped>
.title {
  position: relative;
  display: inline-block;
  left: 200px;
  top: 70px;
}

.form {
  position: absolute;
  left:220px;
  top: 250px;
}

.input {
  width: 300px;
  margin-right: 10px;
}

.noAuthor, .authorName {
  position: relative;
  display: inline-block;
  top: 90px;
  left: 200px;
  font-size: 50px;
  font-weight: bolder;
}

span > img {
  width: 400px;
  height: 470px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
}

.book-container {
  position: relative;
  left: 250px;
  top: 100px;
  width: 2600px;
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

#modal {
  position: fixed;
  top: 250px;
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

.modal-text::-webkit-scrollbar {
  width: 10px;
  background-color: #ddd;
}

.modal-text::-webkit-scrollbar-thumb {
  height: 5px;
  background-color: #d1d1d1;
  border-radius: 10px;
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
</style>