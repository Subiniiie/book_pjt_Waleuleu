<template>
  <div>
    <h1 class="title">🔊게시글 생성페이지</h1>
    <div class="create">
      <form @submit.prevent="createArticle">
        <div class="article-title">
          <label for="title">제목:</label>
          <input type="text" name="title" v-model="title">
        </div>
        <div class="article-content">
          <label for="content">내용:</label>
          <textarea name="content" id="content" v-model="content"></textarea>
        </div>
        <button>게시글 생성</button>
      </form>
    </div>
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
.title {
  position: relative;
  display: inline-block;
  left: 200px;
  top: 70px;
}

.create {
  position: relative;
  display: flex;
  align-items: center;
  width: 500px;
  left: 250px;
  top: 100px;
}

input {
  width: 700px;
  }
  
  textarea {
  width: 700px;
  height: 400px;
}
</style>