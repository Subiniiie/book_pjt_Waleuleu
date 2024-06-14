import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthorStore = defineStore('author', () => {
  const author = ref([])
  const API_KEY = import.meta.env.VITE_APP_ALADIN_API_KEY

  const getAuthor = function(keyword) {
    axios({
      method: 'get',
      url: 'https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemSearch.aspx',
      params: {
        ttbkey: API_KEY,
        // 검색어 입력창
        Query: keyword,
        QueryType: 'Author',
        MaxResults: 50,
        start: 1,
        SearchTarget: 'Book',
        output: 'js',
        Version: '20131101'
      }
    })
      .then((response) => {
        author.value = response.data.item
      })
      .catch((error) => {
        console.log('에러는', error)
      })
  }
  return {
    author,
    getAuthor,
  }
})