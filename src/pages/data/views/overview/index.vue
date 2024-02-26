<template>
  <div class="view-container">
    <a-row class="view-row">
      <a-col :span="8" class="view-col">
        <div class="view-item">
          <div class="item-title">报盘</div>
          <div id="offer-chart"></div>
        </div>
      </a-col>
      <a-col :span="8" class="view-col">
        <div class="view-item">
          <div class="item-title">报价</div>
        </div>
      </a-col>
      <a-col :span="8" class="view-col">
        <div class="view-item">
          <div class="item-title">发票</div>
        </div>
      </a-col>
    </a-row>
    <!-- <a-row class="view-row">
      <a-col :span="8" class="view-col">
        <div class="item-title">报盘</div>
      </a-col>
      <a-col :span="8" class="view-col">
        <div class="item-title">报价</div>
      </a-col>
      <a-col :span="8" class="view-col">
        <div class="item-title">发票</div>
      </a-col>
    </a-row>
    <a-row class="view-row">
      <a-col :span="8" class="view-col">
        <div class="item-title">报盘</div>
      </a-col>
      <a-col :span="8" class="view-col">
        <div class="item-title">报价</div>
      </a-col>
      <a-col :span="8" class="view-col">
        <div class="item-title">发票</div>
      </a-col>
    </a-row> -->
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { Chart } from '@antv/g2'

  // 报盘-数据图表
  // 数据
  const offerData = [
    { status: 'draft', label: '草稿', value: 88 },
    { status: 'pending', label: '待处理', value: 112 },
    { status: 'set', label: '已发送', value: 120 },
    { status: 'accepted', label: '已接收', value: 250 },
  ]
  const offerTotal = 570
  onMounted(() => {
    // 初始化图表实例
    const offerChart = new Chart({
      container: 'offer-chart',
    })
    // 声明可视化
    offerChart.options({
      type: 'interval',
      autoFit: true,
      data: offerData,
      encode: {
        y: 'value',
        color: "label"
      },
      transform: [{ type: "stackY" }],
      coordinate: { type: "theta", outerRadius: 0.8 },
      labels: [
        {
          position: "outside",
          text: (data) => `${data.label}: ${(data.value / offerTotal * 100).toFixed(2)}%`,
        },
      ],
      tooltip: {
        items: [
          (data) => ({
            name: data.label,
            value: `${data.value}条`,
          }),
        ],
      },
    })
    // 渲染可视化
    offerChart.render()
  })
</script>

<style lang="scss" scoped>
@include themeMixin {
  .view-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 8rem;
    overflow: auto;

    .view-row {
      min-height: 300rem;

      .view-col {
        padding: 8rem;
      }

      .view-item {
        height: 100%;
        background-color: theme('colorBgBase');
        box-shadow: 0 0 4rem 4rem theme('colorShadow');
        border-radius: 4rem;
        padding: 10rem;

        .item-title {
          font-weight: 600;
          font-size: 14rem;
          line-height: 1.5em;
          border-left: 4rem solid theme('colorPrimary');
          padding-left: 4rem;
        }
      }
    }
  }
}
</style>