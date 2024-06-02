<template>
  <div>
    <h1>메인페이지</h1>
    <h2>환영합니다, {{ user }}!</h2>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCounterStore } from '../stores/counter'
const store = useCounterStore()

const user = computed(() => {
  return store.user
})
</script>

<style scoped>

</style>