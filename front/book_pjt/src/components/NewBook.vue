<template>
  <div>
    <h2>🔔최신도서</h2>
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
        <div class="prev-btn">이전</div>
        <div class="next-btn">이후</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useBookStore } from '@/stores/book'


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

</style>