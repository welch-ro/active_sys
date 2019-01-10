/**
 * Created by roluo on 2019/1/8.
 */
import axios from 'axios';
import ajaxUrl from '@/assets/config/ajaxUrl';
import router from '@/router'; // 用于在判断错误时的重定向页面，例如404页面等

// 是否关闭拦截器
let isCancelInterFlat = false;

let axiosInterceptors = function () {
    isCancelInterFlat = false;
    // 增加请求拦截器，对请求前的数据等进行统一处理
    axios.interceptors.request.use((config) => {
        /*
         * 这里设置get的请求头并没什么用
         if (config.method === 'get') {
         config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
         }
         console.log(config)
         */
        console.log('请求');
        return config;
    }, (err) => {
        return new Promise().reject(err);
    });

    // 增加响应拦截器，对接收到的响应报文数据进行统一处理
    axios.interceptors.response.use((response) => {
        return response;
    }, (err) => {
        let errInfo = err.response;

        // 请求超时处理
        if (err.code === 'ECONNABORTED' && err.message.indexOf('timeout') !== -1) {
            // 超时处理
            return new Promise().reject(err);
        }
        // 转跳
        if (errInfo.status === 403) {
            router.push({
                path: '/error/403'
            });
        }
    });
};

/*
*
* params urlKey [String] 必传，这个key是通过ajaxUrl那里查看获取，用方法里不直接用接口的地址，地址在ajaxUrl那里包装了一层，方便管理
*
* params {xxx} 里面有默认参数，非必传，有需要的可以通过调用的时候传进来替换
*
* params cancelInterceptors [boolean]  设置成true时候，会跳过拦截器
*
* */
export default function (urlKey, {
    method = 'post',
    url = ajaxUrl[urlKey],
    headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    timeout = 5000,
    data = {}
}, cancelInterceptors = false) {
    const CONFIG = {
        method: method,
        timeout: timeout,
        url: url,
        // 在外部文件配置axios的基础路径 ip地址
        baseURL: ajaxUrl.baseUrl
    };
    if (method === 'get') {
        headers = Object.assign({}, headers);
        CONFIG['headers'] = headers;
        CONFIG['params'] = data;
    } else {
        headers = Object.assign({}, headers);
        CONFIG['headers'] = headers;
        CONFIG['data'] = data;
    }

    // 是否取消拦截
    if (cancelInterceptors) {
        console.log('取消拦截');
        isCancelInterFlat = true;
        var myInterceptor = axios.interceptors.request.use(function () {});
        axios.interceptors.request.eject(myInterceptor);
    } else {
        isCancelInterFlat && axiosInterceptors();
    }

    return axios(CONFIG);
}
