<template>
  <div>
    <form @submit.prevent="createComment">
      <input type="text" name="content" v-model="content">
      <button>댓글 작성</button>
    </form>
  </div>
</template>

<script setup>
import { useCommentStore } from '@/stores/comments.js'
import { ref } from 'vue'
const commentStore = useCommentStore()
const props = defineProps({
  articlePk: Number
})

const content = ref(null)
const createComment = function() {
  commentStore.commentCreate(props.articlePk, content.value)
  content.value = null
}
</script>

<style scoped>
</style>