import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({  
  history: createWebHistory(),  
  routes: [
    {
      path: '/data',
      redirect: '/data/dashbord',
    },
    {
      path: '/data/dashbord',
      name: '数据看板',
      component: () => import('../views/dashbord/index.vue'),
    },
  ]
})

export default router
