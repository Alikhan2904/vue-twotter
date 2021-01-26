import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  }
]

const router = createRouter({
  // we changed createWebHashHistory to createWebHistory to overcome that extra # in url
  history: createWebHistory(),
  routes
})

export default router
