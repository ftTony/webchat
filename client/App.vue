<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
import Chatting from "./components/Chatting.vue";
import Login from "./components/Login.vue";
export default {
  data () {
    return {};
  },
  created () {
    localStorage.addr = "未知";
    this.axios.get(`/api/get-ip`).then(result => {
      let ret = result.data.result
      if (ret) {
        localStorage.addr = ret.Country + ret.Province + ret.City;
      }
    });
  }
};
</script>

<style lang="scss">
@import "./styles/base.scss";

#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
