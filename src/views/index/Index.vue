<template>
  <div>
    <div><TabBar /></div>
    <div class="container">
      <div class="wrapper">
        <div class="wrapper__nav">
          <div
            @mouseover="isShow = true"
            @mouseleave="isShow = false"
            class="iconfont border"
          >
            &#xe727;
          </div>
          <div
            class="wrapper__nav__bubble animated"
            hover-class="animate__fadeInLeftBig"
            v-show="isShow"
          >
            <div class="wrapper__nav__bubble__content">创建班课</div>
            <div class="wrapper__nav__bubble__content1">加入班课</div>
          </div>
          <div class="wrapper__nav__search">
            <div class="wrapper__nav__search__select">
              <select name="select">
                <option>我加入的</option>
                <option>我创建的</option>
              </select>
            </div>
            <div class="iconfont">&#xe651;</div>
            <input
              class="wrapper__nav__search__input"
              placeholder="搜索我加入的班课"
            />
          </div>
        </div>
        <div class="wrapper__content">
          <div class="wrapper__content__nav">
            <div
              class="wrapper__content__nav__left"
              :class="{ 'wrapper__content__nav__left--active': isSelect === 1 }"
              @click="changeCurrent(1)"
            >
              我创建的
            </div>
            <div
              class="wrapper__content__nav__left"
              :class="{ 'wrapper__content__nav__left--active': isSelect === 2 }"
              @click="changeCurrent(2)"
            >
              我加入的
            </div>
            <div style="flex: 1"></div>
            <div class="wrapper__content__nav__right">班课调序</div>
          </div>
          <div v-if="cardList.length !== 0" class="wrapper__content__list">
            <IndexCard
              v-for="(item, index) in cardList"
              :key="index"
              :item="item"
              class="wrapper__content__list__item"
            />
          </div>
          <div v-else class="wrapper__content__nothing">
            <img
              src="https://cdn.jsdelivr.net/gh/poicc/image@main/Snipaste_2022-04-29_23-21-24.6ypeh3rc2d8.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { get } from '@/utils/request.js'
import IndexCard from '@/components/IndexCard'
import Footer from '@/components/Footer'
import TabBar from '@/components/TabBar'
export default {
  name: 'Index',
  components: {
    IndexCard,
    Footer,
    TabBar
  },
  mounted() {
    get('/clazz/all?clazz=' + 'joined').then((res) => {
      this.cardList = res.data
      console.log(res.data)
    })
  },
  data() {
    return {
      isSelect: 2,
      isShow: false,
      cardList: []
    }
  },
  methods: {
    changeCurrent(index) {
      this.isSelect = index
      const param = index === 1 ? 'created' : 'joined'
      get('/clazz/all?clazz=' + param).then((res) => {
        this.cardList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';
.container {
  background: $bgColor;
  display: flex;
  justify-content: center;
  .wrapper {
    width: 980px;
    min-height: 600px;
    &__nav {
      display: flex;
      align-items: center;
      line-height: 120px;
      height: 120px;
      .border {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        font-size: 30px;
        border: 2px solid $primaryColor;
        border-radius: 50%;
        cursor: pointer;
        color: $primaryColor;
      }
      &__bubble {
        padding: 20px;
        width: 70px;
        height: 40px;
        border-radius: 10px;
        background-color: #fff;
        position: relative;
        margin-left: 20px;
        &__content {
          position: absolute;
          top: -45%;
        }
        &__content1 {
          position: absolute;
          top: -5%;
        }
      }
      &__bubble::before {
        position: absolute;
        top: 30px;
        left: -20px;
        content: '';
        width: 0;
        height: 0;
        border-right: 10px solid #fff;
        border-bottom: 10px solid transparent;
        border-left: 10px solid transparent;
        border-top: 10px solid transparent;
      }

      &__search {
        position: absolute;
        left: 40%;
        padding: 5px 10px;
        display: flex;
        align-items: center;
        height: 32px;
        width: 400px;
        border: 2px solid $primaryColor;
        border-radius: 10px;
        background: #fff;
        select {
          border: none;
        }
        // &__select:after {
        //   content: '▼';
        //   padding: 12px 8px;
        //   position: absolute;
        //   right: 10px;
        //   top: 0;
        //   z-index: 1;
        //   text-align: center;
        //   width: 10%;
        //   height: 100%;
        //   pointer-events: none;
        //   box-sizing: border-box;
        // }
        .iconfont {
          margin-left: 5px;
          color: #a3a3a3;
        }
        &__input {
          border: none;
          margin-left: 5px;
          outline: none;
          &::placeholder {
            color: #a3a3a3;
          }
        }
      }
    }
    &__content {
      background: #fff;
      &__nav {
        display: flex;
        align-items: center;
        padding: 0 20px 0 0;
        border-bottom: 1px solid #e2e2e2;
        height: 50px;
        &__left {
          width: 70px;
          height: 50px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          cursor: pointer;
          margin-left: 20px;
        }
        &__left--active {
          color: $primaryColor;
          border-bottom: 4px solid $primaryColor;
        }
        &__right {
          padding: 3px 10px;
          border-radius: 15px;
          border: 1px solid #9b9b9b;
        }
        &__right:hover {
          cursor: pointer;
          color: $primaryColor;
          border: 1px solid $primaryColor;
        }
      }
      &__list {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 30px;
        &__item {
          margin: 15px 0 0 15px;
        }
      }
      &__nothing {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
