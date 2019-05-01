<template>
  <transition name="slide-right">
    <div class="chatting">

      <!-- 聊天界面头部 -->
      <div class="chatting-header">
        <div class="chatting-back">
          <i
            @click="$router.push('/chatting')"
            class="icon-back"
          ></i>
        </div>
        <div class="chatting-title">
          <h2>AI 智能机器人</h2>
        </div>
        <div class="chatting-menu">
          <i
            @click="$router.push('/')"
            class="icon-menu"
          ></i>
        </div>
      </div>
      <div
        ref="chattingContent"
        id="chattingContent"
        class="chatting-content"
      >
        <div
          v-for="(item,index) of msgs"
          :key="index"
        >
          <div
            v-if="item.self"
            class="chatting-tem self clearfix"
          >
            <div class="msg-date">
              {{item.date}}
            </div>
            <div class="msg-from">
              <span class="loc">{{item.loc}}</span>
              <div class="msg-author">{{item.from}}</div>
              <img
                :src="item.avatarUrl"
                alt=""
              >
            </div>
            <div class="msg-content">{{item.content}}</div>
          </div>
          <div
            v-else
            class="chatting-item other clearfix"
          >
            <div class="msg-date">{{item.date}}</div>
            <div class="msg-from">
              <img
                :src="item.avatarUrl"
                alt=""
              >
              <span class="msg-author">{{item.from}}</span>
            </div>
            <div class="msg-content">{{item.content}}</div>
          </div>
        </div>
      </div>
      <!-- 输入区域 -->
      <div class="chatting-input">
        <input
          @keyup.enter="send"
          v-model.trim="inputContent"
          placeholder="与智能机器人聊些啥"
        >
        <button @click="send">发送</button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      msgs: localStorage.msgs_ai && JSON.parse(localStorage.msgs_ai) || [
        // { date: '2015-11-09 09:57:08', from: 'microzz', avatarUrl: `http://omratag7g.bkt.clouddn.com/icon-avatar${this.random(11)}.svg`, content: 'test', self: false}
      ],
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
  display: flex;
}
</style>