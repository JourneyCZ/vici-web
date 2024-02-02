<template>
  <div class="header-container">
    <div class="header-logo-title">
      <div class="header-logo"></div>
      <div class="header-title">数据可视化</div>
    </div>
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
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
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
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba($color: #000000, $alpha: 0);

  .header-logo-title {
    display: flex;
    align-items: center;
  }

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

  .header-theme-check {
    margin-left: 20px;
  }
}
</style>