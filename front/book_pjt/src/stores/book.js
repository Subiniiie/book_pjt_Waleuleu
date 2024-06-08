import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBookStore = defineStore('book', () => {
  const newBooks = ref([])
  const API_KEY = import.meta.env.VITE_APP_ALADIN_API_KEY

  const getNewbooks = function() {
    axios({
      method: 'get',
      url: `https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemList.aspx?`,
      params: {
          ttbkey: API_KEY,
          QueryType: 'ItemNewAll',
          MaxResults: 50,
          start: 1,
          SearchTarget: 'Book',
          output: 'js',
          Version: '20131101'
        } 
    })
      .then((response) => {
        newBooks.value = response.data.item
      })
      .catch((error) => {
        console.log('에러는',error)
      })
    }
    

  return {
    newBooks,
    getNewbooks
  }
})