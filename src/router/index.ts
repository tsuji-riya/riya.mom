import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../pages/index.vue'),
    },
    {
      path: "/blog",
      component: () => import('../pages/blog.vue'),
    },
    {
      path: "/blog/:id",
      component: () => import('../pages/blogWithId.vue'),
    }
  ],
})

export default router
