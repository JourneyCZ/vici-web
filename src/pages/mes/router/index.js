import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({  
  history: createWebHistory(),  
  routes: [
    {
      path: '/mes',
      redirect: '/mes/home',
    },
    {
      path: '/mes/home',
      name: '首页',
      component: () => import('../views/home/index.vue'),
    }
  ]
})

export default router
