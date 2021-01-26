import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile.vue'
import Admin from '../views/Admin.vue'

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
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiredAdmin: true
    }
  }
]

const router = createRouter({
  // we changed createWebHashHistory to createWebHistory to overcome that extra # in url
  history: createWebHistory(),
  routes
})

// router guard
router.beforeEach(async (to, from, next) => {
  const isAdmin = false
  const requiredAdmin = to.matched.some(record => record.meta.requiredAdmin)

  if (requiredAdmin && !isAdmin) next({ name: 'Home' })
  else next()
})

export default router
