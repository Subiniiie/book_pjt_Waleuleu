<template>
  <div>
    <li>
      <p>{{ comment.content }} - {{ comment.user.nickname }}</p>
      <button
        v-if="comment.user.nickname === store.user.nickname"
        @click="commentDelete"
      >삭제</button>
    </li>
  </div>
</template>

<script setup>
import { useCommentStore } from '../stores/comments'
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
const commentStore = useCommentStore()
const props = defineProps({
  comment: Object
})

const commentDelete = function() {
  commentStore.commentDelete(props.comment.article, props.comment.id)
}


</script>

<style scoped>

</style>