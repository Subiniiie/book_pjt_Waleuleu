<template>
  <div>
    <h1>게시글 상세페이지</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCommunityStore } from '../stores/community'
import { useCounterStore } from '../stores/counter'

const communityStore = useCommunityStore()
const store = useCounterStore()

onMounted(() => {
  communityStore.getDetailArticle(route.params.pk)
})
</script>

<style scoped>

</style>