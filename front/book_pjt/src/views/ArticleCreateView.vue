<template>
  <div>
    <h1>게시글 생성페이지</h1>
    <form @submit.prevent="createArticle">
      <label for="title">제목:</label>
      <input type="text" name="title" v-model="title">
      <label for="content">내용:</label>
      <textarea name="content" id="content" v-model="content"></textarea>
      <button>게시글 생성</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useCommunityStore } from '@/stores/community'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const communityStore = useCommunityStore()

const title = ref(null)
const content = ref(null)

watch(() => communityStore.detailArticle, (val) => {
  title.value = val.title
  content.value = val.content
})

onMounted(() => {
  console.log(route)
  communityStore.getDetailArticle(route.params.pk)
})

const createArticle = function() {
  const article = {
    title: title.value,
    content: content.value,
  }
  communityStore.createArticle(article)
}
</script>

<style scoped>

</style>