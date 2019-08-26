import axios from './https'
import qs from 'qs'

const api = {
    getFirends () {
        return axios.get('')
    },
    login (params) {
        return axios.post('', qs.stringify(params))
    }
};

export default api;