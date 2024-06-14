<template>
  <div class="comment-container">
    <li>
      <div class="comment">
        <p>{{ comment.content }} - {{ comment.user.nickname }}</p>
        <button
          v-if="comment.user.nickname === store.user.nickname"
          @click="commentDelete"
        >❌</button>
      </div>
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
.comment {
  display: flex;
  align-items: center;
}

button {
  background-color: transparent;
  border: none;
}
</style>