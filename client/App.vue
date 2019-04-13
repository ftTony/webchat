<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Chatting from './components/Chatting.vue';
import Login from './components/Login.vue';
export default {
  data () {
    return {

    }
  },
  components: {
    Chatting,
    Login,
  }
}
</script>

<style scoped lang="scss">
@import "./styles/base.scss";
</style>