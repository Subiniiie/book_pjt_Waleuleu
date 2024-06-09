<template>
  <div>
    <h1>게시글 상세페이지</h1>
    <div>
      <h1>{{ communityStore.detailArticle.title }}</h1>
      <h2>{{ communityStore.detailArticle?.user?.nickname }}</h2>
      <p>{{ communityStore.detailArticle.created_at }}</p>
      <p>{{ communityStore.detailArticle.updated_at }}</p>
      <p>{{ communityStore.detailArticle.content }}</p>
    </div>
    <div>
      <CommentCreate
        :articlePk="communityStore.detailArticle.id"
      />
      <ul>
        <CommentList
          v-for="comment in communityStore.detailArticle.comment_set"
          :key="comment.id"
          :comment="comment"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import CommentCreate from '../components/CommentCreate.vue'
import CommentList from '../components/CommentList.vue'

import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCommunityStore } from '../stores/community'
import { useCounterStore } from '../stores/counter'

const communityStore = useCommunityStore()
const store = useCounterStore()

const router = useRouter()
const route = useRoute()

onMounted(() => {
  communityStore.getDetailArticle(route.params.id)
})
</script>

<style scoped>

</style>