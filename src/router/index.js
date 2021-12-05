import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Portfolio from '@/views/Portfolio.vue'
import Homepage from '@/views/Homepage.vue'
import User from '@/views/User.vue'
import Favorites from '@/views/Favorites.vue'
import Result from '@/views/Result.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/result/:id',
    name: 'Result',
    component: Result
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
