<template>
  <div class="header">
    <TabBar />
    <div class="header__footer">
      <div class="header__footer__box">
        <img
          src="https://patrick-file.oss-cn-shanghai.aliyuncs.com/lint-company/bg-2.png"
          alt=""
          class="header__footer__box__banner"
        />
      </div>
      <div class="header__footer__text">
        <div class="header__footer__text__name">{{ bars1.clazzName }}</div>
        <div class="header__footer__text__info">{{ bars1.info }}</div>
      </div>
      <div class="header__footer__list">
        <div class="header__footer__list__left">
          <img
            :src="bars1.imgUrl"
            alt=""
            class="header__footer__list__left__pic"
          />
        </div>
        <div class="header__footer__list__right">
          <span
            class="header__footer__list__right__list"
            v-for="(item, index) in list"
            :key="index"
            ><router-link :to="'/tabbar/' + id + item.path" href="">{{
              item.name
            }}</router-link></span
          >
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import TabBar from './TabBar'
export default {
  name: 'TabBarChild',
  components: {
    TabBar
  },
  data() {
    return {
      list: [
        {
          path: '/resource',
          name: '資源(6)'
        },
        {
          path: '',
          name: '成員(35)'
        },
        {
          path: '/activity',
          name: '活動(1)'
        },
        {
          path: '',
          name: '消息(0)'
        },
        {
          path: '',
          name: '詳情(12)'
        }
      ],
      bars1: [],
      id: ''
    }
  },
  created() {
    const id = this.$route.params.id
    this.id = id
    axios
      .get('http://127.0.0.1:4523/mock/930430/api/clazz/' + id)
      .then((res) => {
        this.bars1 = res.data.data
        console.log(this.bars1)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';
a {
  text-decoration: none;
  font-family: Roboto, 'Lucida Grande', 'Lucida Sans Unicode', Helvetica, Arial,
    Verdana, '微软雅黑', sans-serif;
  color: $fontColor;
}
a:hover {
  text-decoration: none;
  color: $routerColor;
}
.header {
  &__footer {
    &__text {
      position: absolute;
      top: 40%;
      left: 28%;
      &__name {
        font-size: 16px;
        margin-bottom: 5px;
      }
      &__info {
      }
    }
    position: relative;
    &__box {
      &__banner {
        width: 100vw;
        height: 120px;
      }
    }
    &__list {
      margin: 0 auto;
      width: 980px;

      &__left {
        // padding: 2px;
        position: absolute;
        width: 138px;
        height: 138px;
        top: 10%;
        background-color: $bgColor;
        border: 2px solid #ccc;
        margin-right: 10px;
        border-radius: 4px;
        &__pic {
          width: 132px;
          height: 132px;
          border-radius: 4px;
          margin: 3px;
        }
      }
      &__right {
        display: flex;
        align-items: center;
        font-size: 14px;
        // padding: 20px auto;
        margin-left: 160px;
        &__list {
          text-align: center;
          width: 80px;
          height: 40px;
          line-height: 40px;
          // padding-bottom: 20px;
          border-bottom: 3px solid $NavBarColor;
          // margin-left: 60px;
        }
        &__list:hover {
          border-bottom-color: $routerColor;
        }
      }
    }
  }
}
</style>
