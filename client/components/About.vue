<template>
  <transition name="showAbout">
    <div class="about">
      <i
        class="close"
        @click="showAbout"
      ></i>
      <div class="about-content">
        <h1>关于</h1>
        <h2>Vue.js+Socket.io+Koa打造一个智能聊天室</h2>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      isHover: false
    }
  },
  computed: {
    isShowAbout () {
      return this.$store.state.isShowAbout;
    }
  },
  methods: {
    showAbout () {
      this.$store.commit('showAbout', false)
    }
  }
}
</script>
<style lang="sass" scoped>
a{
    color:#3f51b5;
}

.about{
    display:flex;
    position:absolute;
    z-index:2;
    top:0;
    left:0;
    bottom:0;
    right:0;
}
</style>