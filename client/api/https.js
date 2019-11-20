import axios from 'axios'
import router from '../router';
import store from '../store/index';
import { Toast } from 'vant';

// 参考资料 https://juejin.im/post/5b55c118f265da0f6f1aa354

/**
 * 提示函数
 */
const tip = msg => {
    Toast({
        message: msg,
        duration: 1000,
        forbidClick: true
    })
}

/**
 * 跳转登录页
 * 携带当前页面路由，以及在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.replace({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    })
}

/**
 * 请求失败后的错误统一处理
 */
const errorHandle = (status, other) => {

}

// 创建 axios实例
var instance = axios.create({ timeout: 1000 * 12 })
//设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
axios.interceptors.request.use(config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据拾的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config; // 返回配置信息
}, error => {
    // 请求错误时的处理
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(response =>
    // 请求成功
    response.status === 200 ? Promise.resolve(res) : Promise.reject(response)
    // 请求失败
    , error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不丰2xx的范围
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            if (!window.navigator.onLine) {
                store.commit('changeNetwork', false);
            } else {
                return Promise.reject(error);
            }
        }
    });

export default instance;