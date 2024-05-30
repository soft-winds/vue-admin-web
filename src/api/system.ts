import request from '@/utils/request'

// 用户管理

// 查询所有用户
export const findUserList = (data: any) => {
  return request({ method: 'post', url: '/user/list', data })
}
