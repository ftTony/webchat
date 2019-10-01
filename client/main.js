import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import moment from 'moment'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

// 本地化，中文时间显示
moment.locale('zh-cn');

Vue.use(VueAxios, axios)

Vue.prototype.moment = moment;

new Vue({
    el: '#app',
    router,
    store,
    template: '<App />',
    components: { App }
})
