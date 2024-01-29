<template>
  <div class="header-container">
    <div class="header-logo"></div>
    <div class="header-title">Vici</div>
    <a-menu
      class="header-menu"
      v-model:selectedKeys="current"
      mode="horizontal"
      :theme="Theme"
      :items="menus"
      @select="menuSelect"
    />
    <a-switch
      class="header-theme-check"
      v-model:checked="themeChecked"
      @change="themeChange"
    >
      <template #checkedChildren><check-outlined /></template>
      <template #unCheckedChildren><close-outlined /></template>
    </a-switch>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';

const emit = defineEmits(['themeChange'])

// 获取状态管理仓库
const store = useStore()

// 主题
const Theme = computed(() => store.state.base.theme)
const themeChecked = ref(Theme.value === 'dark')
function themeChange (checked) {
  emit('themeChange', checked ? 'dark' : 'light')
}

// 菜单
let current = ref(['home']);
const menus = ref([
  {
    key: '/home',
    label: '首页',
    title: '首页',
  },
  {
    key: '/technical',
    label: '技术优势',
    title: '技术优势',
    children: [
      {
        key: '/technical/dataVisualization',
        label: '数据可视化',
        title: '数据可视化',
      },
      {
        key: '/technical/3dMap',
        label: '三维地图',
        title: '三维地图',
      },
      {
        key: '/technical/digitalTwin',
        label: '数字孪生',
        title: '数字孪生',
      },
    ]
  },
  {
    key: '/solution',
    label: '解决方案',
    title: '解决方案',
  },
  {
    key: '/contact',
    label: '联系我们',
    title: '联系我们',
  },
]);
// 监听路由变化，改变当前选中菜单
const route = useRoute()
watch (() => route.path, newPath => {
  current.value = [newPath]
})
// 点击菜单，触发路由跳转
const router = useRouter()
function menuSelect (menu) {
  router.push(menu.key)
}

</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  align-items: center;
  background: rgba($color: #000000, $alpha: 0);

  .header-logo {
    width: 40px;
    height: 40px;
    background: url('@/assets/images/logo.svg') no-repeat center/100% 100%;
    margin-right: 12px;
  }
  
  .header-title {
    font-weight: 600;
    font-size: 32px;
  }

  .header-menu {
    flex: auto;
    justify-content: flex-end;
    font-size: 20px;
    line-height: 64px;
    background: rgba($color: #000000, $alpha: 0);
    border: none;
  }

  .header-theme-check {
    align-self: center;
    margin-left: 20px;
  }
}
</style>