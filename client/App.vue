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
  },
  created () {
    localStorage.addr = '未知';

    this.axios.get(`http://apis.juhe.cn/ip/ipNew?ip=${ip.address()}&key=ed2b36c92c3d48eff07f2fe153fe1ecd`).then(result => {
      if (result.data.content.address) {
        localStorage.addr = result.data.content.address;
      }
    })
  }
}
</script>

<style lang="scss">
@import "./styles/base.scss";

#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>