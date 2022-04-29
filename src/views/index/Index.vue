<template>
  <div>
    <div>导航条</div>
    <div class="wrapper">
      <div class="wrapper__nav">
        <div class="iconfont">&#xe727;</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';
.wrapper {
  margin: 0 auto;
  text-align: center;
  width: 980px;
  background: $bgColor;
  &__nav {
    display: flex;
    .iconfont {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      font-size: 30px;
      border: 2px solid $primaryColor;
      border-radius: 50%;
      color: $primaryColor;
    }
  }
}
</style>
