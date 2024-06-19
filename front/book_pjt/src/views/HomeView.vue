<template>
  <div>
    <h1 class="title">환영합니다, {{ user.nickname }}!</h1>
    <NewBook />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useCounterStore } from '../stores/counter'

import NewBook from '../components/NewBook.vue'

const store = useCounterStore()
const user = computed(() => {
  return store.user
})
</script>

<style scoped>
.title {
  position: relative;
  display: inline-block;
  left: 1300px;
  top: 200px;
  font-weight: bold;
}
</style>