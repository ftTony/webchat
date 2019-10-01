import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import moment from 'moment';

Vue.config.productionTip = false

// 本地化，中文时间显示
moment.locale('zh-cn');

Vue.prototype.moment = moment;

new Vue({
    el: '#app',
    router,
    store,
    template: '<App />',
    components: { App }
})
