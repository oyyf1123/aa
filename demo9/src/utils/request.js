import axios from 'axios'
import {Toast} from 'antd-mobile';

/* axios默认配置 */
// axios.defaults.baseURL = 'https://api.example.com'; //后端接口协议和域名还有端口

/* 
  axios.get('/login') + baseUrl 等价下面的
  axios.get('https://api.example.com'/login)
*/

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.create({
    timeout: 1000
})

const ajax = ({
    /* axios的配置 */
    url,
    method,
    headers,
    params, //get参数携带
    data, // post参数携带
    withCredentials = false,
}) => {
    return new Promise((resolve, reject) => {
        /* 数据请求 */
        switch (method) {
            case 'POST' || 'post':
                const p = new URLSearchParams()
                for (var key in data) {
                    p.append(key, data[key])
                }
                axios({
                        url,
                        method,
                        data: p,
                        headers
                    }).then(res => resolve(res))
                    .catch(err => reject(err))
                break;
            case 'put' || 'PUT':
                axios({
                        url,
                        method,
                        params,
                        headers
                    }).then(res => resolve(res))
                    .catch(err => console.log(err))
                break;
            case 'delete' || 'DELETE':
                axios({
                        url,
                        method,
                        params,
                        headers
                    }).then(res => resolve(res))
                    .catch(err => console.log(err))
                break;
            default:
                axios({
                        url,
                        method,
                        params,
                        headers
                    }).then(res => resolve(res))
                    .catch(err => reject(err))
                break;
        }

        /* axios拦截 
          1. 拦截用户无登录操作，用户不登录那么久无法进入项目
          2. 常用的效果： Loading
        */
        axios.interceptors.request.use(function (config) {
            Toast.loading('给我冲!!', 1, () => {
            });
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
    })
}

export default ajax