<template>
  <transition name="slide-left">
    <div class="chatting">
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
  </transition>
</template>
<script>
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

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
$blue: #2196f3;

.chatting {
}
</style>