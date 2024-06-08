<template>
  <div>
    <h1>베스트샐러</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useBookStore } from '@/stores/book'

const BookStore = useBookStore()

// onMounted(() => {
//   BookStore.getBestseller()
// })

</script>

<style scoped>

</style>