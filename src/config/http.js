import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => {
    config.headers['Accept'] = 'application/vnd.company.v1+json'
    config.headers['Authorization'] = window.sessionStorage.getItem('token')
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  res => {
    return res
  },
  err => {
    return Promise.reject(err)
  }
)

export default axios
