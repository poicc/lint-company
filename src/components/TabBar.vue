<template>
  <div class="header-box">
    <div class="header-main">
      <a href=""></a>
      <div class="information-box">
        <div v-for="(item, index) in bars" :key="index">
          <a href="">{{ item.icon }} {{ item.title }}</a>
          <p class="left-float">|</p>
        </div>
        <div class="user-information-box">
          <a href="">
            <img
              src="https://chl-bucket.oss-cn-hangzhou.aliyuncs.com/md/202204261940922.png"
              alt=""
            />
            <p>{{ name }}</p>
          </a>
          <a href="">退出</a>
          <a href="">帮助</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
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
          icon: '&#xexe644;',
          title: '我的题库'
        },
        {
          icon: '&#xe7de;',
          title: '手机投屏'
        }
      ],
      name: '曹红亮'
    }
  }
}
</script>
