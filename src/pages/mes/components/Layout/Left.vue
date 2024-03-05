<template>
  <div class="left-container">
    <div class="left-logo-title">
      <div class="left-logo"></div>
      <div class="left-title">MES-制造执行系统</div>
    </div>
    <a-menu
      class="left-menu"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="current"
      style="width: 256rem"
      mode="inline"
      :items="menus"
      @click="menuClick"
    ></a-menu>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

// 菜单
let current = ref(['home']);
const menus = ref([
  {
    key: '/mes/home',
    label: '首页',
    title: '首页',
  },
  {
    key: '/mes/sale',
    label: '销售管理',
    title: '销售管理',
    children: [
      {
        key: '/mes/sale/order',
        label: '销售订单',
        title: '销售订单',
      },
      {
        key: '/mes/sale/customer',
        label: '客户管理',
        title: '客户管理',
      },
    ]
  },
]);
// 监听路由变化，改变当前选中菜单
const route = useRoute()
watch (() => route.path, newPath => {
  current.value = [newPath]
})
// 点击菜单，触发路由跳转
const router = useRouter()
function menuClick (menu) {
  router.push(menu.key)
}
</script>

<style lang="scss" scoped>
@include themeMixin {
  .left-container {
    background: url('../../assets/image/left-bg.png') no-repeat center/100% 100%;

    .left-logo-title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6rem 0;

      .left-logo {
        width: 22rem;
        height: 22rem;
        background: url('@/assets/images/logo.svg') no-repeat center/100% 100%;
        margin-right: 6rem;
      }

      .left-title {
        font-weight: 600;
        font-size: 18rem;
        color: #fff;
      }
    }

    .left-menu {
      font-size: 12rem;
      color: #fff;
      background-color: rgba(0, 0, 0, 0);

      :deep(.ant-menu-item-active),  :deep(.ant-menu-item-selected) {
        color: #fff;
        background-color: #1890ff !important;
      }

      :deep(.ant-menu-submenu-active), :deep(.ant-menu-submenu-selected>.ant-menu-submenu-title) {
        color: #fff;
      }
    }
  }
}
</style>