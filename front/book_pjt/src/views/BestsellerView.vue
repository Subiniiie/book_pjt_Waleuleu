<template>
  <div>
    <h1>베스트샐러</h1>
    <ul>
      <div
        v-for="bestseller in BookStore.bestseller"
        :key="bestseller.title"
        class="bestseller"
      >
      <img :src="bestseller.cover" alt="{{ bestseller.cover }}" @click="makemodal(bestseller)">
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
  BookStore.getBestseller()
})

// 이미지 클릭하면 책 정보
const isActive = ref(false)
const selectedBook = ref(null)

const makemodal = function(bestseller) {
  selectedBook.value = bestseller
  isActive.value = true
}
</script>

<style scoped>
.bestseller {
    border: 1px solid black;
  }

#modal {
  width: 1800px;
  height: 1000px;
  border: 5px solid black;
}

</style>