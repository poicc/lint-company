<template>
  <div class="body">
    <div class="login-tab" style="background-color: #fff">
      <div class="col-2"></div>
      <img src="../../assets/ybk_logo.png" class="logo" />
      <div class="col-6"></div>
      <img src="../../assets/touping.png" class="icon" />
      <div class="col-1">手机投屏</div>
      <div class="col-2">帮助</div>
      <div class="col-2"></div>
    </div>
    <div class="login">
      <div class="login-title"></div>
      <div class="card-container">
        <div class="tab">
          <div
            :class="isUser ? 'change' : ''"
            class="hand"
            @click="isUser = true"
          >
            账号密码登录
          </div>
          <div class="col-small"></div>
          <div
            :class="isUser ? '' : 'change'"
            class="hand"
            @click="isUser = false"
          >
            短信验证登录
          </div>
        </div>
        <LoginForm class="form" @func="getForm" v-if="isUser"></LoginForm>
        <LoginPhone class="form" v-else></LoginPhone>
        <div class="auto-login">
          <div class="auto">
            <input
              type="checkbox"
              value="isAgree"
              id="isAgree"
              v-model="isAgree"
            />
            <label for="isAgree"></label
            ><span :class="isAgree ? 'prim' : ''" style="margin-left: 5px"
              >30天自动登录</span
            >
          </div>
          <div class="col-1"></div>
          <div class="forget" @click="forget()">忘记密码?</div>
        </div>
        <div class="btn"><button @click="login">登录</button></div>
        <div class="href">注册蓝墨云账号 | 学校账号密码登录</div>
      </div>
    </div>
    <div class="footer">
      <div>
        为了获得最佳浏览效果，建议在分辨率大于或等于 1024*768 的屏幕下浏览网站
      </div>
      <div>京公网安备 11010802020877号 京ICP备12041916号-4</div>
      <div>©2012 - 2022北京智启蓝墨信息技术有限公司</div>
      <div>
        地址：北京市海淀区上地东路 35 号颐泉汇写字楼316室 联系电话：400-008-1078
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/login-form.vue'
import LoginPhone from '@/components/login-phone.vue'
import axios from 'axios'
export default {
  data() {
    return {
      isUser: true,
      isAgree: false,
      form: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    LoginForm,
    LoginPhone
  },
  methods: {
    getForm(username, password) {
      console.log(username)
      this.form.username = username
      this.form.password = password
    },
    login() {
      axios
        .post('http://127.0.0.1:4523/mock/930430/api/user/login/1', this.form)
        .then((res) => {
          console.log(res.data)
          if (res.data.code === 200) {
            localStorage.setItem('avatar', res.data.data.avatar)
            localStorage.setItem('nickname', res.data.data.nickname)
            localStorage.setItem('id', res.data.data.id)
            this.$store.state.user.username = res.data.data.nickname
            this.$store.state.user.id = res.data.data.id
            this.$store.state.user.avatar = res.data.data.avatar
            this.$router.push('/')
          }
        })
    },
    forget() {
      this.$router.push('/forget')
    }
  }
}
</script>

<style lang="sass">
@import './login.scss'
</style>
