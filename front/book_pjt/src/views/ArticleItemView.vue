<template>
  <div>
    <h1 class="title">🔊게시글 상세페이지</h1>
    <div class="content">
      <div class="second-content">
        <h1>{{ communityStore.detailArticle.title }}</h1>
        <h2>{{ communityStore.detailArticle?.user?.nickname }}</h2>
        <div class="date">
          <p>{{ truncatedCreateAt }}</p>
          <p>|</p>
          <p>{{ truncatedUpdatedAt }}(수정)</p>
          </div>
          <hr>
          <p class="article-content">{{ communityStore.detailArticle.content }}</p>
          <hr>
          <CommentCreate
          :articlePk="communityStore.detailArticle.id"
          />
          <ul>
            <div class="comment"> 
            <CommentList
              v-for="comment in communityStore.detailArticle.comment_set"
              :key="comment.id"
              :comment="comment"
            />
          </div>
          </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import CommentCreate from '../components/CommentCreate.vue'
import CommentList from '../components/CommentList.vue'

import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCommunityStore } from '../stores/community'

const communityStore = useCommunityStore()
const route = useRoute()

onMounted(() => {
  communityStore.getDetailArticle(route.params.id)
})

const truncatedCreateAt = computed(() => {
  return communityStore.detailArticle.created_at
  ? communityStore.detailArticle.created_at.slice(0, 10)
  : ''
})

const truncatedUpdatedAt = computed(() => {
  return communityStore.detailArticle.updated_at
  ? communityStore.detailArticle.updated_at.slice(0, 10)
  : ''
})
</script>

<style scoped>
.title {
  position: relative;
  display: inline-block;
  left: 200px;
  top: 70px;
}

h2 {
  color: gray;
}

.content {
  position: relative;
  left: 250px;
  top: 100px;
  width: 2600px;
  height: 1000px;
  border: 1px solid rgb(206, 206, 206);
}

.second-content {
  position: relative;
  left: 0px;
  top: 50px;
  width: 2600px;
}

.date {
  display: flex;
  align-items: center;
  gap: 10px;
}

.article-content {
  height: 500px;
  font-size: 30px;
}

.comment {
  height: 240px;
  overflow-y: auto;
}

.comment::-webkit-scrollbar {
  width: 10px;
  background-color: #ddd;
}

.comment::-webkit-scrollbar-thumb {
  height: 5px;
  background-color: #d1d1d1;
  border-radius: 10px;
}
</style>