import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

// export const useBookStore = defineStore('book', () => {
//   const books = ref([])
//   const API_KEY = import.meta.env.VITE_APP_ALADIN_API_KEY

  // const getNewbooks = function() {
  //   axios({
  //   method: 'get',
  //   url: `http://www.aladin.co.kr/ttb/api/ItemList.aspx`,
  //   params: {
  //     QueryType: 'ItemNewAll',
  //     MaxResults: 10,
  //     start: 1,
  //     SearchTarget: 'Book',
  //     output: 'js',
  //     version: '20131101'
  //   },
  //   headers: {
  //     ttbkey:API_KEY
  //   }
  // })
  //   .then((response) => {
  //     console.log(response)
  //   })
  //   .catch((error) => {
  //     console.log('에러:',error)
  //   })
  // }

  // return {
  //   getNewbooks
  // }
// })