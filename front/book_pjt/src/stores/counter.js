import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const API_URL = 'http://127.0.0.1:8000'

  const token = ref(null)
  const router = useRouter()

  // 로그인
  const logIn = function(payload) {
    const username = payload.username
    const password = payload.password
    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data: {
        username, password
      }
    })
      .then((response) => {
        console.log('로그인성공')
        token.value = response.data.key
        router.push({ name: 'home' })
      })
      .catch((error) => {
        console.log('에러가 발생했습니다', error)
      })
  }
  return {
    API_URL,
    logIn,
  }

}, {persist:true})
