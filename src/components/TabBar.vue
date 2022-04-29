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
            :src="user.avatar"
            alt=""
            class="header__main__user-box__user-photo"
          />
        </a>
        <a href="">{{ user.name }}</a>
        <a href="">退出</a>
        <a href="">帮助</a>
      </div>
    </div>
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
            ><router-link :to="item.path" href="">{{
              item.name
            }}</router-link></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TabBar',
  // props: {
  //   user: {
  //     type: Object
  //   }
  // },
  data() {
    return {
      bars1: [],
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
      list: [
        {
          path: 'Resource',
          name: '資源(6)'
        },
        {
          path: '',
          name: '成員(35)'
        },
        {
          path: 'Activity',
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
      user: {
        avatar:
          'https://patrick-file.oss-cn-shanghai.aliyuncs.com/lint-company/crq.jpg',
        name: '曹紅亮'
      }
    }
  },
  created() {
    axios.get('http://127.0.0.1:4523/mock/930430/api/clazz/1').then((res) => {
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
  background: $NavBarColor;
  margin: 0 auto;
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
      a {
        margin-right: 5px;
      }
    }
  }
}
</style>
