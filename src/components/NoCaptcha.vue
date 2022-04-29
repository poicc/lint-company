<template>
  <div>
    <div id="nc"></div>
  </div>
</template>

<script>
export default {
  // 验证成功后，服务端报错（如账号/密码等错误），需要重置滑块
  props: {
    reload: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      ic: '' // noCaptcha实例
    }
  },
  watch: {
    reload: {
      handler (newV) {
        console.log(newV)
        if (newV) {
          this.nc.reset() // 重置滑块
        }
      }
    }
  },
  mounted () {
    this.init() // 初始化方法
  },
  methods: {
    init () {
      const self = this
      // 实例化nc
      // eslint-disable-next-line no-undef
      AWSC.use('nc', function (state, module) {
        // 初始化
        self.nc = module.init({
          renderTo: '#nc',
          appkey: 'FFFF0N0000000000AA8C',
          scene: 'nc_login',
          // 您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。
          success: function (data) {
            data.scene = 'nc_login'
            self.$emit('slideCallback', data)
          },
          // 滑动验证失败时触发该回调参数。
          fail: function (failCode) {
            this.$message(`滑动验证失败,失败编号${failCode}`)
            console.log(failCode)
          },
          // 验证码加载出现异常时触发该回调参数。
          error: function (errorCode) {
            this.$message(`验证码加载异常,异常编号${errorCode}`)
            console.log(errorCode)
            self.$emit('slideCallback', { cls: false })
          }
        })
      })
    }
  }
}
</script>

//
// #nc {
//   width: 100%;
//   display: contents;
// }
// /deep/.nc-container #nc_1_wrapper {
//   width: 100%;
//   height: 36px;
//   line-height: 36px;
//   #nc_1_n1t,
//   #nc_1__bg,
//   #nc_1_n1z,
//   #nc_1__scale_text,
//   .nc-lang-cnt {
//     height: 36px;
//     line-height: 36px;
//   }
// }
