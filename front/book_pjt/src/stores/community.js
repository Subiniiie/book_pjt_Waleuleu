import axios from 'axios'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useCounterStore } from './counter'

export const useCommunityStore = defineStore('article', () => {
  const token = useCounterStore().token
  const router = useRouter()
  const articleList = ref([])

  const getArticleList = function() {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/api/v1/community/',
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('에러는', error)
      })
  }
  return {
    articleList,
    getArticleList,
  }
})