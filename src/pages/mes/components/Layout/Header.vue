<template>
  <div class="header-container">
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

  .header-theme-check {
    margin-left: 20px;
  }
}
</style>