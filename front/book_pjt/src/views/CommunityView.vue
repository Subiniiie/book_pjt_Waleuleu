<template>
  <div>
    <h1>커뮤니티</h1>
    <RouterLink :to="{name: 'article-create'}">게시글 생성</RouterLink>
    <div
      v-for="article in communityStore.articleList"
      :key="article.id"
      :article="article"
      @click="goDetail(article.id)"
    >
    {{ article }}
    </div>
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

// 상세페이지 이동
const goDetail = function(pk) {
  router.push({name:'article-item', params:{id: pk}})
}
</script>
<style scoped>

</style>