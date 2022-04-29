<template>
  <div class="header">
    <div class="header__main">
      <a href="" class="header__main__logo"></a>
      <div
        class="header__main__information-box"
        v-for="(item, index) in bars"
        :key="index"
      >
        <a class="header__main__information-box__right-float iconfont" href="">
          <span v-html="item.icon"></span>
          {{ item.title }}
        </a>
      </div>
      <div class="header__main__user-box">
        <a href="">
          <img
            :src="$store.state.userInfo.avatar"
            alt=""
            class="header__main__user-box__user-photo"
          />
        </a>
        <div href="">{{ $store.state.userInfo.name }}</div>
        <div href="" @click="logout">退出</div>
        <div href="">帮助</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  // props: {
  //   user: {
  //     type: Object
  //   }
  // },
  data() {
    return {
      bars: [
        {
          icon: '&#xe624;',
          title: '公开课'
        },
        {
          icon: '&#xec35;',
          title: '任务中心'
        },
        {
          icon: '&#xe609;',
          title: '库管理'
        },
        {
          icon: '&#xe896;',
          title: '教学包'
        },
        {
          icon: '&#xe644;',
          title: '我的题库'
        },
        {
          icon: '&#xe7de;',
          title: '手机投屏'
        }
      ],

      user: {
        avatar:
          'https://patrick-file.oss-cn-shanghai.aliyuncs.com/lint-company/crq.jpg',
        name: '曹紅亮'
      }
    }
  },
  methods: {
    logout() {
      this.$router.push('/login')
    }
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
  background: $NavBarColor;
  margin: 0 auto;

  &__main {
    // background-color: red;
    width: 980px;
    height: 50px;
    margin: 0 auto;
    color: #333;
    font-size: 14px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    &__logo {
      display: block;
      background-image: url(https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/md/202204291905737.png);
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 118px 34px;
      width: 141px;
      height: 50px;
    }
    &__information-box {
      display: flex;
      justify-content: space-evenly;
      &__left-float {
        float: left;
        margin-right: 2px;
        margin-left: 10px;
      }
      &__right-float {
        float: right;
        padding-right: 10px;
        border-right: 1px solid $searchColor;
      }
    }
    &__user-box {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      &__user-photo {
        border-radius: 50%;
        width: 30px;
        height: 30px;
      }
      div {
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }
}
</style>
