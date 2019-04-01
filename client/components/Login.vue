<template>
  <transition name="slide-top">
    <div class="login">
      <i
        class="icon-about"
        title="关于"
      ></i>
      <a
        href="https://www.xiaowuzi.info"
        target="_blank"
      >
        <i class="icon-website"></i>
      </a>
      <i class="icon-chat"></i>
      <h2>请输入您的名字</h2>
      <input
        @keyup.enter="login"
        v-model.trim="name"
        type="text"
        autofocus
      >
      <transition name="showAbout">
        <About v-if="isShowAbout"></About>
      </transition>
    </div>
  </transition>
</template>
<script>
import About from './About.vue'

export default {
  data () {
    return {}
  },
  components: {
    About
  },
  computed: {
    isShowAbout () {
      return this.$store.state.isShowAbout
    }
  },
  methods: {

  }
}
</script>
<style scoped lang="scss">
.login {
  position: absolute;
}
</style>