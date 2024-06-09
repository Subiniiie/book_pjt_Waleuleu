import axios from 'axios'
import { defineStore } from 'pinia'

import { useCounterStore } from './counter'
import { useCommunityStore } from './community.js'


export const useCommentStore = defineStore('comment', () => {
  const token = useCounterStore().token
  const communityStore = useCommunityStore()
  const commentCreate = function(pk, content) {
    axios({
      method: 'post',
      url: `http://127.0.0.1:8000/api/v1/article/${pk}/comments/`,
      data: { content },
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then((response) => {
        communityStore.detailArticle.comment_set.push(response.data)
      })
      .catch((error) => {
        console.log('에러는', error)
      })
  }

  const commentDelete = function(articlePk, commentPk) {
    axios({
      method: 'delete',
      url: `http://127.0.0.1:8000/api/v1/article/${articlePk}/comments/${commentPk}/`,
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then((response) => {
        communityStore.detailArticle.comment_set = communityStore.detailArticle.comment_set.filter((comment) => {
          return comment.id != commentPk
        })
      })
  }
  return {
    commentCreate, commentDelete
  }
}, { persist: true}
)
