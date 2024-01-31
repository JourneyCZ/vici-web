import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({  
  history: createWebHistory(),  
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/index',
      redirect: '/home',
    },
    {
      path: '/home',
      name: '首页',
      component: () => import('../views/home/index.vue'),
    },
    {
      path: '/technical',
      redirect: '/technical',
    },
    {
      path: '/technical/dataVisualization',
      name: '数据可视化',
      component: () => import('../views/technical/dataVisualization/index.vue'),
    },
    {
      path: '/technical/3dMap',
      name: '三维地图',
      component: () => import('../views/technical/index.vue'),
    },
    {
      path: '/technical/digitalTwin',
      name: '数字孪生',
      component: () => import('../views/technical/index.vue'),
    },
    {
      path: '/solution',
      name: '解决方案',
      component: () => import('../views/solution/index.vue'),
    },
    {
      path: '/contact',
      name: ' 联系我们',
      component: () => import('../views/contact/index.vue'),
    },
  ]
})

export default router
