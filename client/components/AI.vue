<template>
  <transition name="slide-right">
    <div class="chatting">

      <!-- 聊天界面头部 -->

    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      msgs: '',
      inputContent: '',
      oContent: {}
    }
  },
  watch: {
    msgs (val) {
      localStorage.msgs_api = JSON.stringify(val)
    }
  },
  computed: {
    name () {
      return this.$store.state.name;
    },
    avatarUrl () {
      return this.$store.state.avatarUrl;
    }
  },
  beforeRouteEnter (to, from, next) {
    if (!localStorage.name) {
      next('/')
    } else {
      next()
    }
  },
  mounted () {
    this.oContent = document.getElementById('chattingContent');
    setTimeout(() => {
      this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight
    }, 0)
  },
  methods: {
    send () {
      this.oContent.scrollTop = this.oContent.scrollHeight;
      if (this.inputContent === '') {
        return;
      } else {

      }
    }
  }
}
</script>
<style scoped lang="scss">
$blue: #2196fe;
.chatting {
}
</style>