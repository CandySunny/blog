import axios from 'axios'
import qs from 'qs'

// http request 拦截器
axios.interceptors.request.use(config => {
    if (config.method === 'post'){
        config.data = qs.stringify(config.data)
    }

    return config
}, err => {
    return Promise.reject(err)
})

// http reponse 拦截器
axios.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)
})

export default axios