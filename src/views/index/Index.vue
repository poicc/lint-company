<template>
  <div>首页{{ user }}</div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.user = {
      username: this.$store.state.user.username,
      id: this.$store.state.user.id,
      avatar: this.$store.state.user.avatar
    }
  }
}
</script>
