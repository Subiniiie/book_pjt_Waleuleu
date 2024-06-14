<template>
  <div>
    <h1 class="title">📍게시판</h1>
    <RouterLink :to="{name: 'article-create'}" class="create">✒️게시글 생성</RouterLink>
    <div class="article-container">
      <div
        v-for="article in communityStore.articleList"
        :key="article.id"
        :article="article"
        @click="goDetail(article.id)"
      >
      <p class="article-title">{{ article.id }}. {{ article.title }} ({{ article.comment_set.length }})</p>
      </div>
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
a {
  color: black;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
  margin-top: 10px;
}
.title {
  position: relative;
  display: inline-block;
  left: 210px;
  top: 60px;
}

.create {
  position: absolute;
  left: 220px;
  top: 220px;
  font-size: 30px;
}

.article-container {
  position: absolute;
  left: 220px;
  top: 310px;
  overflow-y: auto;
}

.article-container::-webkit-scrollbar {
  width: 10px;
  background-color: #ddd;
}

.article-container::-webkit-scrollbar-thumb {
  height: 5px;
  background-color: #d1d1d1;
  border-radius: 10px;
}

.article-title {
  font-size: 40px;

}

</style>