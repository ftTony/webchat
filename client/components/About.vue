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
        <p class="skill"><b>技术栈</b>：</p>
        <div>Vue2(页面构建+数据驱动)<br />Socket.io(实时通信)<br />Vuex(不同组件状态共享)<br />vue-router(路由)<br />axios(发起http请求)<br />SASS(SCSS)<br>Koa2(后端)<br>Webpack(自动化构建)<br>Moment.js(时间处理)<br>ES6(贯穿全部)<br>localStorage(HTML5)<br>CSS3(动画及样式)</div>
        <p class="url"><b>GitHub</b>:<a
            @touchstart="isHover=true"
            @touchEnd="isHover=false"
            :class="{hover: isHover}"
            href="https://github.com/fttony/"
            target="_blank"
          >GitHub</a>
        </p>
        <p class="url"><b>个人网站</b>：<a
            @touchstart="isHover=true"
            @touchEnd="isHover=false"
            :class="{hover: isHover}"
            href="https://fttony.info/"
            target="_blank"
          >microzz</a></p>
        <div class="help">
          <img
            src="./help.png"
            alt="microzz.com"
          >
        </div>
        <p class="copyright"><b>【声明】</b>：本项目仅供学习交流使用，请不要用作任何商业用途。有任何疑问请联系作者↓ <br>📩：<a href="mailto:172993974@qq.com">172993974@qq.com</a></p>
      </div>
      <div
        @click="showAbout"
        class="mask"
      ></div>
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
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    color: black;
    .close{
        position:absolute;
        z-index:3;
        display:inline-block;
        width:30px;
        height:30px;
        background:url("../assets/images/icons/close.svg") no-repeat;
        background-size:contain;
        top:11%;
        right:12%;
    }
    @media screen and (min-width:760px){
        .close{
            right:26%;
        }
    }
    .about-content{
        position:relative;
        z-index:2;
        width:80%;
        height:80%;
        background-color:white;
        border-radius:10px;
        padding:30px 10px;
        box-shadow:0 0 20px gray;
        overflow:auto;

        h1{
            text-align:center;
            font-size:1.2rem;
            color:#31c27c;
            transition:.3s ease-in-out;
        }
        h1:hover{
            transform: rotate(15deg);
            transition: .3s ease-in-out;        
        }
        h2{
            font-size:1.1rem;
        }
    }
}
</style>