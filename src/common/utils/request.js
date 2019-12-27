import axios from 'axios'
import {getToken} from "./cookie"
import {BASE_URL} from '../../config/config'

const request = axios.create({
    baseURL: BASE_URL
})

// http request 拦截器 Request
request.interceptors.request.use(config => {
    if (getToken()) {
        config.headers = {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': getToken()
        }
    }
    return config
}, error => {
    console.log(error)
})

// http response 拦截器 Response
request.interceptors.response.use(response => {
    return response.data
}, error => {
    console.log(error)
})

export {request}