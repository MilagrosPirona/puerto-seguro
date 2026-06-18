import { createRouter, createWebHistory } from 'vue-router'
import PuertoLanding from '@/views/PuertoLanding.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PuertoLanding,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue'),
      meta: {
        authRequired: false,
      },
    },
    {
      path: '/admin',
      name: 'admin',

      component: () => import('../views/AdminView.vue'),
      meta: {
        authRequired: true,
      },
    },
  ],
})

function checkToken(token) {
  const info = JSON.parse(atob(token.split('.')[1]))
  return info.exp < Date.now() / 1000
}

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.meta.authRequired && !token) next('/login')

  if (to.name == 'login' && token) next('/admin')

  if (token && checkToken(token)) {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    next('/login')
  }
  next()
})

export default router
