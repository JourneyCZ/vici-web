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
      
    </div>
  </div>
</template>

<script setup>
  
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
      background: linear-gradient(45deg, theme('colorLight'), 50%, rgba(214,231,255,0));

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

      h1 {
        font-size: 20rem;
      }
    }
  }
}
</style>