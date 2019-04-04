<template>
  <transition name="slide-left">
    <div class="chatting">

      <!-- 聊天界面头部 -->
      <div class="chatting-header">
        <div class="chatting-back">
          <i
            @click="$router.push('/AI')"
            :class="[isRedAI?'icon-back':'icon-back2']"
          ></i>
        </div>
        <div class="chatting-title">
          <h2><i class="icon-group"></i>群聊</h2>
        </div>
        <div class="chatting-menu">
          <i
            @click="$router.push('/')"
            class="icon-menu"
          ></i>
        </div>
      </div>

      <!-- 聊天内容区域 -->
      <div
        class="chatting-content"
        @click.stop.prevent="isShowEmoji=false"
        ref="chattingContent"
      >
        <div
          v-for="(item,index) of msgs"
          :key="index"
        >
          <div
            v-if="item.self"
            class="chatting-item self clearfix"
          >
            <div class="msg-date">
              {{item.date}}
            </div>
            <div class="msg-from">
              <span class="loc">[{{item.loc}}]</span>
              <span class="msg-author">{{item.from}}</span>
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
            <div class="msg-date">
              {{ item.date }}
            </div>
            <div class="msg-from">
              <img
                :src="item.avatarUrl"
                alt=""
              >
              <span class="loc">[{{item.loc}}]</span>
              <span class="msg-author">{{ item.from }}</span>
            </div>
            <div class="msg-content">{{ item.content }}</div>
          </div>
        </div>
      </div>
      <!-- 输入区域 -->
      <div class="chatting-input">
        <transition name="slide-bottom">
          <div
            class="emoji-display"
            v-show="isShowEmoji"
          >
            <ul>
              <li
                @click="insertText(item)"
                v-for="(item,index) of emojis"
                :key="index"
              >{{item}}</li>
            </ul>
          </div>
        </transition>
        <div class="emoji">
          <i
            @click="showEmoji(isShowEmoji=!isShowEmoji);"
            class="icon-emoji"
          ></i>
        </div>
        <textarea
          @keyup.enter="send"
          @input="newLine"
          ref="textarea"
          v-model.trim="inputContent"
          placeholder="左上角还有智能机器人哦"
        ></textarea>
        <button @click="send">发送</button>
      </div>
    </div>
  </transition>
</template>
<script>
import socket from '../socket';

export default {
  data () {
    return {
      msgs: localStorage.msgs_group && JSON.parse(localStorage.msgs_group) || [],
      inputContent: '',
      oContent: {},
      oTextarea: {},
      emojis: ['😂', '🙏', '😄', '😏', '😇', '😅', '😌', '😘', '😍', '🤓', '😜', '😎', '😊', '😳', '🙄', '😱', '😒', '😔', '😷', '👿', '🤗', '😩', '😤', '😣', '😰', '😴', '😬', '😭', '👻', '👍', '✌️', '👉', '👀', '🐶', '🐷', '😹', '⚡️', '🔥', '🌈', '🍏', '⚽️', '❤️', '🇨🇳'],
      isShowEmoji: false,
      isRedAI: false
    }
  },
  watch: {
    msgs (val) {
      localStorage.msgs_group = JSON.stringify(val);
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
      next();
    }
  },
  mounted () {
    setInterval(() => this.isRedAI = !this.isRedAI, 2500);

    this.oContent = document.querySelector('.chatting-content');
    this.oContent.scrollTop = this.oContent.scrollHeight;

  },
  methods: {
    send () {

    },
    showEmoji (flag) {

    },
    insertText (str) {

    },
    newLine () {
      setTimeout(() => this.oTextarea.scrollTop = this.oTextarea.scrollHeight, 0)
    }
  }
}
</script>

<style scoped lang="scss">
$blue: #2196f3;

.chatting {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .chatting-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    background-color: $blue;
    color: white;
    padding-left: 10px;
    padding-right: 15px;

    .chatting-back {
      width: 32px;
      height: 32px;
      .icon-back {
        background: url("../assets/images/icons/icon-ai.svg") no-repeat;
        background-size: contain;
      }
      .icon-back2 {
        background: url("../assets/images/icons/icon-ai2.svg") no-repeat;
        background-size: contain;
      }
    }
    .chatting-title {
      i.icon-group {
        vertical-align: top;
        width: 30px;
        height: 30px;
        background: url("../assets/images/icons/icon-group.svg") no-repeat;
        background-size: contain;
        margin-right: 3px;
      }
    }

    .chatting-menu {
      width: 30px;
      height: 30px;
      i.icon-menu {
        background: url("../assets/images/icons/icon-index.svg") no-repeat;
        background-size: contain;
      }
    }
  }

  .chatting-content {
    flex: 1;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    overflow: hidden;
    .chatting-item {
      padding: 10px;
      width: 100%;
      .msg-date {
      }
    }
  }
}
</style>