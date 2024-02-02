<template>
  <div class="left-container">
    <a-menu
    class="left-menu"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="current"
    style="width: 256px"
    mode="inline"
    :theme="Theme"
    :items="menus"
    @click="menuClick"
  ></a-menu>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

// 获取状态管理仓库
const store = useStore()

// 主题
const Theme = computed(() => store.state.base.theme)

// 菜单
let current = ref(['home']);
const menus = ref([
  {
    key: '/data/dashbord',
    label: '数据看板',
    title: '数据看板',
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
.left-container {
  .left-menu {
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>