import { createApp } from 'vue'
import '@/styles/reset.css'
import '@/styles/main.scss'
import App from './App.vue'

// 创建 Vue 应用
const app = createApp(App)

// 挂载根实例
app.mount('#app')
