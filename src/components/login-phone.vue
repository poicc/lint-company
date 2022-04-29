<template>
  <div>
    <div class="input-border">
      <!-- <img src="../assets/user.png" class="icon" /> -->
      <input placeholder="手机号" />
    </div>

    <div class="input-border mt-3">
      <!-- <img src="../assets/password.png" class="icon" /> -->
      <input placeholder="密码" />
    </div>
      <NoCaptcha @slideCallback="finishSlide" :reload="reload" />
  </div>
</template>

<script>
import NoCaptcha from '@/components/NoCaptcha.vue'
export default {
  data() {
    return {}
  },
  components: {
    NoCaptcha
  },
  methods: {
    finishSlide(data) {
      // 按需使用返回值
      console.log('会话ID', data.sessionId)
      console.log('签名串', data.sig)
      console.log('滑块请求的token', data.token)

      if (data.cls === false) {
        alert('fail')
      }

      if (data.sessionId) {
        alert('ok')
      }
    }
  }
}
</script>

<style lang="sass">

@import '@/views/login/login.scss'

</style>
