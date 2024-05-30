import { createRouter, createWebHistory } from 'vue-router'
import { menuList } from '@/mock/menu'
// 设置路由 mock
const setRouterMenu = (menu: any) => {
  return menu.map((v: any) => {
    const path = '../views' + v.path + '/index.vue'
    const pathDetail = '../views' + v.path + '/detail.vue'
    const obj = import.meta.glob('../views/**/*.vue')
    let route: any = {
      path: v.path,
      meta: {
        title: v.title,
        icon: v.icon
      },
      props: true
    }
    if (obj[path]) {
      route.component = obj[path]
    }
    if (obj[pathDetail]) {
      route.component = obj[pathDetail]
    }
    if (v.children && v.children.length) {
      route.meta.parent = v.path
      route.children = setRouterMenu(v.children)
    }
    return route
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/index.vue'),
      redirect: '/dashboard',
      children: setRouterMenu(menuList)
    },
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    }
  ]
})

export default router
