import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignupView from '@/views/SignupView.vue'
import LoginView from '@/views/LoginView.vue'
import NewBookView from '@/views/NewBookView.vue'
import NewBookItemView from '@/views/NewBookItemView.vue'
import BestsellerView from '@/views/BestsellerView.vue'
import BestsellerItemView from '@/views/BestsellerItemView.vue'
import AuthorView from '@/views/AuthorView.vue'
import AuthorItemView from '@/views/AuthorItemView.vue'
import CategoryView from '@/views/CategoryView.vue'
import CommunityView from '@/views/CommunityView.vue'
import ArticleItemView from '@/views/ArticleItemView.vue'
import ArticleCreateView from '@/views/ArticleCreateView.vue'
import MypageView from '@/views/MypageView.vue'

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
      path: '/newbook/:id',
      name: 'new-book-item',
      component: NewBookItemView
    },
    {
      path: '/bestseller',
      name: 'bestseller',
      component: BestsellerView
    },
    {
      path: '/bestseller/:id',
      name: 'bestseller-item',
      component: BestsellerItemView
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView
    },
    {
      path: '/author/:id',
      name: 'author-item',
      component: AuthorItemView
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryView
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
      path: '/mypage/:id',
      name: 'mypage',
      component: MypageView
    }

  ]
})

export default router
