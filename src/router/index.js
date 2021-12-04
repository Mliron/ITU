import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Portfolio from '@/views/Portfolio.vue'
import Homepage from '@/views/Homepage.vue'
import User from '@/views/User.vue'

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
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
