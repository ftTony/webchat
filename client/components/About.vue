<template>
  <div>关于我</div>
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

</style>