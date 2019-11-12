<template>
  <div>AI页面</div>
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

  },
  beforeRouteEnter (to, from, next) {
    next()
  }
}
</script>
<style scoped lang="scss">
</style>