<template>
  <div class="view-container">
    <div class="banner-container">
      <div class="banner-content">
        <div class="banner-title">让数据栩栩如生</div>
        <div class="banner-sub-title">企业级数据可视化解决方案，让人们在数据世界里获得视觉化思考能力</div>
        <div class="banner-btns">
          <a-button type="primary" size="large">立即体验</a-button>
        </div>
      </div>
    </div>
    <div class="view-content">
      <div class="view-item">
        <div class="view-title">核心产品</div>
        <div class="product-item">
          <div class="product-img"></div>
          <div class="product-intro">
            基于数据生成的可视化应用，将数据由单一的数字转化为各种动态的可视化图表，从而实时地将数据展示给用户。产品包含160多种可视化组件、100多种地理图元，帮助用户实现数据精准表达，呈现数据之美。
          </div>
        </div>
        <div class="product-item">
          <div class="product-intro">
            通过图形化的界面帮助不同专业背景的用户轻松搭建专业水准的可视化演示大屏应用，满足会议展览、业务监控、风险预警、地理信息分析等多种业务的展示需求，为数据汇报带来全新高性能体验。
          </div>
          <div class="product-img"></div>
        </div>
        <div class="product-item">
          <div class="product-img"></div>
          <div class="product-intro">
            通过AI智能分析与数据可视化的结合，为高频数据处理场景提供了一套简单易用的可视化分析工具，通过具象、生动、有趣的方式快速理解数据，让更多用户能便捷高效地利用数据可视化技术获得信息表达的优势和乐趣、获得全新数据互动体验。
          </div>
        </div>
      </div>
      <div class="view-item">
        <div class="view-title">应用场景</div>
        <a-tabs
          v-model:activeKey="activeScene"
          :theme="Theme"
          animated
          centered
        >
          <a-tab-pane key="operation" tab="运营数据看板">
            
          </a-tab-pane>
          <a-tab-pane key="command" tab="指挥中心大屏">
            
          </a-tab-pane>
          <a-tab-pane key="business" tab="业务数据分析">
            
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

// 获取状态管理仓库
const store = useStore()

// 主题
const Theme = computed(() => store.state.base.theme)

// 核心产品
const activeScene = ref('operation')

</script>

<style lang="scss" scoped>
@include themeMixin {
  .view-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .banner-container {
      width: 100%;
      height: 33vw;
      min-height: 500px;
      background: linear-gradient(45deg, theme('colorCover'), 50%, rgba(255, 255, 255, 0));
      opacity: 1;
      animation-duration: 3s;
      animation-name: fadein;

      @keyframes fadein {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }

      .banner-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 1920px;
        height: 100%;
        background: url('@/assets/images/data-icon-2.png') no-repeat right 10% center / auto 75%;
        padding: 0 5%;
        margin: 0 auto;

        .banner-title {
          width: 100%;
          font-weight: 600;
          font-size: 32rem;
          line-height: 2;
          text-align: left;
          color: theme('colorPrimary');
        }

        .banner-sub-title {
          width: 100%;
          font-size: 10rem;
          line-height: 2;
          text-align: left;
        }

        .banner-btns {
          padding: 20rem 0 30rem;
        }
      }
    }

    .view-content {
      width: 100%;
      max-width: 1920px;
      padding: 0 5%;

      .view-item {
        min-height: 500rem;
        padding: 20rem 0;

        .view-title {
          font-size: 18rem;
          line-height: 2em;
          text-align: center;
          color: theme('colorTextBase');
        }

        .product-item {
          display: flex;
          align-items: center;
          min-height: 200rem;

          .product-img {
            width: 70%;
          }

          .product-intro {
            width: 30%;
            font-size: 12rem;
            line-height: 2em;
            text-indent: 2em;
          }
        }
      }
    }
  }
}
</style>