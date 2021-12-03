import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Portfolio from '@/views/Portfolio.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
