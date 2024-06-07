import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import axios from 'axios'


export const useCounterStore = defineStore('counter', () => {
  const API_URL = 'http://127.0.0.1:8000'

  const token = ref(null)
  const user = ref({})
  const router = useRouter()
  const isAuthenticated = ref(false)

  // 회원가입
  const signUp = function(payload) {
    // 사용자 입력 데이터를 받음
    const username = payload.username
    const nickname = payload.nickname
    const email = payload.email
    const gender = payload.gender
    const age = payload.age
    const genre = payload.genre
    const password1 = payload.password1
    const password2 = payload.password2

    // axios로 django에 요청을 보냄
    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username, nickname, email, gender, age, genre, password1, password2
      }
    })
      .then((response) => {
        alert('회원가입이 완료되었습니다.')
        const password = password1
        logIn({ username, password})
      })
      .catch((error) => {
        console.log('에러가 발생했습니다', error)
      })
  }

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
        alert('로그인성공')
        token.value = response.data.key
        isAuthenticated.value = true
        axios({
          method: 'get',
          url: `${API_URL}/api/v1/mypage/`,
          headers : {
            Authorization: `Token ${token.value}`
          }
        })
          .then((response) => {
            user.value = response.data
            router.push({ name: 'home'})
          })
        })
      .catch((error) => {
        console.log('에러가 발생했습니다', error)
      })
  }
  return {
    API_URL, token, user, isAuthenticated,
    signUp, logIn, 
  }

}, {persist:true})
