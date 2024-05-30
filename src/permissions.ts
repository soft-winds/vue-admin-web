import router from './router'
import { useUserStore } from './stores/user'

router.beforeEach((to, from, next) => {
  const { user_token } = useUserStore()
  console.log(user_token, 'user_token')

  // 判断有没用token
  if (user_token) {
    if (to.path === '/login') {
      return next(from.path)
    }
    next()
  } else {
    if (to.path !== '/login') {
      return next('/login')
    }
    next()
  }
})
