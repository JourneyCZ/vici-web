import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({  
  history: createWebHistory(),  
  routes: [
    {
      path: '/data',
      redirect: '/data/overview',
    },
    {
      path: '/data/overview',
      name: '首页',
      component: () => import('../views/overview/index.vue'),
    },
    {
      path: '/data/dashbord',
      name: '数据看板',
      component: () => import('../views/dashbord/index.vue'),
    },
  ]
})

export default router
