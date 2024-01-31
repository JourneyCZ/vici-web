<template>
  <div :class="['theme-base', Theme]">
    <div class="page-container">
      <Header class="page-header" @themeChange="themeChange" />
      <router-view class="page-main"></router-view>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Header from './Header.vue';

// 获取状态管理仓库
const store = useStore()

// 切换主题
const Theme = computed(() => `theme-${store.state.base.theme}`)
function themeChange(value) {
  store.commit('setTheme', value)
}
</script>

<style lang="scss" scoped>
.theme-base {
  width: 100%;
  height: 100%;
}

@include themeMixin {
  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    color: theme('colorTextBase');
    background-color: theme('colorBgBase');

    .page-header {
      width: 100%;
      max-width: 1920px;
      height: 64px;
      padding: 0 5%;
    }

    .page-main {
      flex: auto;
      width: 100%;
      // padding: 0 5%;
      overflow: auto;
    }
  }
}
</style>