import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-landing',
      component: () => import('../views/HomeLanding.page.vue')
    }
  ]
})

export default router
