<template>
  <div>
    <h1>커뮤니티</h1>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import { useCommunityStore } from '@/stores/community'
import { useRouter } from 'vue-router'

const router = useRouter()
const communityStore = useCommunityStore()
onMounted(() => {
  communityStore.getArticleList()
})
</script>
<style scoped>

</style>