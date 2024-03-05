<template>
  <a-config-provider
    :theme="{
      algorithm: antdvAlgorithm,
    }"
  >
    <div :class="['theme-base', themeClass]">
      <div class="page-container">
          <Left class="page-left" />
        <div class="page-main">
          <Header class="page-header" @themeChange="themeChange" />
          <router-view class="page-body" />
        </div>
      </div>
    </div>
  </a-config-provider>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { theme as antdvTheme } from 'ant-design-vue';
import Header from './Header.vue';
import Left from './Left.vue';

// 获取状态管理仓库
const store = useStore()

// 切换主题
const theme = computed(() => store.state.base.theme)
const themeClass = computed(() => `theme-${theme.value}`)
function themeChange(value) {
  store.commit('setTheme', value)
}

// ant-design-vue 主题
const antdvAlgorithm = computed(() => theme.value === 'dark' ? antdvTheme.darkAlgorithm : antdvTheme.defaultAlgorithm)
</script>

<style lang="scss" scoped>
.theme-base {
  width: 100%;
  height: 100%;
}

@include themeMixin {
  .page-container {
    display: flex;
    width: 100%;
    height: 100%;
    color: theme('colorTextBase');
    background-color: theme('colorBgBase');
    transition-property: background-color;
    transition: background-color 0.6s;

    .page-header {
      width: 100%;
      height: 64px;
      padding: 0 20rem;
    }

    .page-body {
      flex: auto;
      display: flex;
      justify-content: space-between;
      width: 100%;
      overflow: hidden;
    }

    .page-left {
      flex: none;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .page-main {
      flex: auto;
      min-width: 100px;
      background-color: theme('colorBgLayout');
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
