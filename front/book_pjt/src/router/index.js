import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignupView from '@/views/SignupView.vue'
import LoginView from '@/views/LoginView.vue'
import NewBookView from '@/views/NewBookView.vue'
import BestsellerView from '@/views/BestsellerView.vue'
import AuthorView from '@/views/AuthorView.vue'
import DomesticView from '@/views/DomesticView.vue'
import CommunityView from '@/views/CommunityView.vue'
import ArticleItemView from '@/views/ArticleItemView.vue'
import ArticleCreateView from '@/views/ArticleCreateView.vue'
import MypageView from '@/views/MypageView.vue'

import { useCounterStore } from '@/stores/counter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/newbook',
      name: 'new-book',
      component: NewBookView
    },
    {
      path: '/bestseller',
      name: 'bestseller',
      component: BestsellerView
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView
    },
    {
      path: '/domestic',
      name: 'domestic',
      component: DomesticView
    },
    {
      path: '/community',
      name: 'community',
      component: CommunityView
    },
    {
      path: '/article/:id',
      name: 'article-item',
      component: ArticleItemView
    },
    {
      path: '/article/create',
      name: 'article-create',
      component: ArticleCreateView
    },
    {
      path: '/mypage/',
      name: 'mypage',
      component: MypageView
    }

  ]
})

export default router
