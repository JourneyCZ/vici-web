import { createApp } from 'vue'
import '@/styles/reset.css'
import '@/styles/main.scss'
import App from './App.vue'
import store from './store/'
import router from '@/router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

// 创建 Vue 应用
const app = createApp(App)

// 应用 vuex
app.use(store)

// 应用路由
app.use(router)

// 应用 Ant Design
app.use(Antd)

// 挂载根实例
app.mount('#app')
