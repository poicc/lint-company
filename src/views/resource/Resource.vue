<template>
  <div>
    <div class="container">
      <div class="container__operation">
        <div class="container__operation__icon">
          <p>资源学习</p>
        </div>
      </div>
      <div class="container__search">
        <input
          type="text"
          placeholder="  根据资源名称搜索"
          class="container__search__input"
        />
      </div>
      <div class="container__active">
        <div
          class="container__active__box"
          v-for="(item, index) in resourceList"
          :key="index"
        >
          <img class="container__active__box__img" :src="item.imgUrl" />
          <div class="container__active__box__block">
            <span>{{ item.resourceName }}</span>
            <div class="container__active__box__block__text">
              <span>{{ item.isDownload }}</span>
              |
              <span>{{ item.uploadTime }}</span>
              |

              <span style="color: ec6941">{{ item.level }} 经验</span>
              |
              <span>共 {{ item.read }} 人查看</span>
              <div class="container__active__box__block__text__flex"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import get from '../../utils/request'
import axios from 'axios'
export default {
  name: 'Resource',
  data() {
    return {
      clazzId: '',
      select: '',
      resourceList: []
    }
  },
  created() {
    axios
      .get('http://127.0.0.1:4523/mock/930430/api/resources/1')
      .then((result) => {
        if (result?.data.code === 200) {
          console.log(result.data.data)
          this.resourceList = result.data.data
        }
      })
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
body {
  background-color: $bgColor;
}
.container {
  position: relative;
  width: 980px;
  margin: 0 auto;
  background-color: #fff;
  &__operation {
    display: flex;
    padding: 20px 20px 16px;
    height: auto;
    align-items: center;
    border-bottom: $bgColor;
    border-width: 1px;
    &__icon {
      width: 48px;
      font-size: 12px;
    }
  }
  &__search {
    padding: 20px 20px 16px;
    &__input {
      height: 30px;
      // border: none;
      width: 898px;
      margin: 0px;
      // border-radius: 1px;
    }
  }
  &__select {
    display: flex;
    padding: 20px 20px 16px;
    &__span {
      color: #333;
      vertical-align: middle;
      margin-right: 20px;
    }
  }
  &__active {
    padding: 20px 20px 16px;
    &__box {
      display: flex;
      position: relative;
      padding: 20px;
      cursor: pointer;
      color: #666;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
      border-top: 1px solid #e1e1e1;
      background-color: #fff;
      &__img {
        width: 60px;
        height: 60px;
        vertical-align: middle;
        margin-right: 10px;
      }
      &__block {
        display: inline-block;
        vertical-align: middle;
        font-size: 14px;
        &__text {
          margin-top: 30px;
          font-size: 12px;
          color: #666666;
          &__flex {
            flex: 1;
          }
        }
      }
    }
  }
}
</style>
