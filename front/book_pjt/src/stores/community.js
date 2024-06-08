import axios from 'axios'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useCounterStore } from './counter'


export const useCommunityStore = defineStore('article', () => {
  const token = useCounterStore().token
  const router = useRouter()


  // 게시글 목록 출력
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

  // 게시글 상세페이지
  const detailArticle = ref([])
  const getDetailArticle = function(pk) {
    axios({
      method: 'get',
      url: `http://127.0.0.1:8000/api/v1/community/${pk}`,
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
    articleList, detailArticle,
    getArticleList, getDetailArticle,
  }
})