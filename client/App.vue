<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
import Chatting from './components/Chatting.vue';
import Login from './components/Login.vue';
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
@import "./styles/base.scss";

#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>