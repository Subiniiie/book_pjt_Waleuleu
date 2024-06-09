<template>
  <div>
    <li>
      <p>{{ comment.content }} - {{ comment.user.nickname }}</p>
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


</script>

<style scoped>

</style>