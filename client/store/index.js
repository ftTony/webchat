import Vue from 'vue'
import Vuex from 'vuex'


Vue.prototype.random = n => Math.floor(n * Math.random());
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: '',
        avatarUrl: `http://omratag7g.bkt.clouddn.com/icon-avatar${Vue.prototype.random(21)}.svg`,
        addr: '未知',
        isShowAbout: false
    },
    mutations: {
        changeName (state, name) {
            state.name = name;
        },
        setAddr (state, addr) {
            state.addr = addr
        },
        showAbout (state, flag) {
            state.isShowAbout = flag;
        }
    }
})


export default store