<template>
  <div class="card">
    <div class="card__img">
      <img :src="item.imgUrl" />
      <div class="card__avatar">
        <img
          src="https://cdn.jsdelivr.net/gh/poicc/image@main/me.2r7p6lo57zy0.webp"
        />
        <div class="card__avatar__author">mqxu</div>
      </div>
    </div>

    <div class="card__content">
      <div class="card__content__title">{{ item.clazzName }}</div>
      <div class="card__content__bottom">
        <div class="card__content__bottom__class">{{ item.clazzName }}</div>
        <div style="flex: 1"></div>
        <div class="card__content__bottom__right">
          <span class="iconfont" @click="goDetail(item.id)">进入&#xe88e;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexCard',
  props: {
    item: Object
  },
  methods: {
    goDetail(id) {
      this.$router.push('/tabbar/' + id + '/resource')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';
.card {
  width: 225px;
  height: 320px;
  border-radius: 20px;
  box-shadow: 0 0 3px 3px rgba(120, 119, 119, 0.1);
  &__img {
    position: relative;
    width: 225px;
    height: 225px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__avatar {
    position: absolute;
    top: 90%;
    left: 5%;
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 3px solid #fff;
      border-radius: 50%;
    }
    &__author {
      margin-top: 20px;
      margin-left: 10px;
      color: #8c899f;
      font-size: 14px;
    }
  }
  &__content {
    margin-top: 30px;
    padding: 10px;

    &__bottom {
      display: flex;
      margin-top: 8px;
      font-size: 14px;
      &__class {
        color: #aaa5b3;
      }
      &__right {
        color: $primaryColor;
        cursor: pointer;
      }
      .iconfont {
        font-size: 14px;
      }
    }
  }
}
.card:hover {
  box-shadow: 0 5px 5px 0 rgba(70, 70, 70, 0.25);
  transition: all 0.3s ease-in-out;
}
</style>
