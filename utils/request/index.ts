import axios from 'axios'

axios.defaults.timeout = 10000 // 基本超时时间为10s

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    }
    return Promise.reject(response)
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * get方法，对应get请求
 * @param url 请求得url地址
 * @param params 请求得携带参数
 */
export function get(url, params=null) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params}).then(res => resolve(res.data)).catch(err => reject(err.data))
  })
}

/**
 * post方法，对应post请求
 * @param url 请求得url地址
 * @param params 请求时携带得参数
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => resolve(res.data)).catch(err => reject(err.data))
  })
}