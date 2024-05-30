import request from '@/utils/request'
interface UserFromData {
  username: string
  password: string
}
// 注册
export const signup = (data: UserFromData) => {
  return request({ data, url: '/auth/signup', method: 'post' })
}

// 登录
export const signin = (data: UserFromData) => {
  return request({ data, url: '/auth/signin', method: 'post' })
}
