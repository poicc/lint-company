<template>
  <div>
    <div class="input-border">
      <!-- <img src="../assets/user.png" class="icon" /> -->
      <input placeholder="请输入账号" v-model="username" @input="send" />
    </div>
    <div class="input-border mt-3">
      <!-- <img src="../assets/password.png" class="icon" /> -->
      <input
        placeholder="密码"
        type="password"
        v-model="password"
        @input="send"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      username: '陈蓉琪',
      password: '123'
    }
  },
  methods: {
    send() {
      this.$emit('func', this.username, this.password)
    }
  }
}
</script>

<style lang="sass">
@import '@/views/login/login.scss'
</style>
