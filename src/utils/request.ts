import { useUserStore } from '@/stores/user'
import { message } from 'ant-design-vue'
import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API
})
request.interceptors.request.use(
  (config) => {
    const { user_token } = useUserStore()
    config.headers.Authorization = user_token
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    const { data } = response
    return data
  },
  (error) => {
    message.error(error.response.data.message)
    if (error.response.status === 401) {
      useUserStore().removeUserInfo()
    }
    return Promise.reject(error)
  }
)

export default request
