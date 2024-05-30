export const menuList = [
  {
    path: '/dashboard',
    title: '首页',
    icon: 'fa-solid fa-house',
    component: '/dashboard'
  },
  {
    path: '/cms',
    title: '内容管理',
    icon: 'fa-solid fa-ghost',
    children: [
      {
        path: '/cms/video',
        title: '视频管理',
        icon: 'fa-solid fa-file-video',
        component: '/cms/video'
      },
      {
        path: '/cms/audio',
        title: '音频管理',
        icon: 'fa-solid fa-headphones-simple',
        component: '/cms/audio'
      },
      {
        path: '/cms/book',
        title: '电子书管理',
        icon: 'fa-solid fa-book',
        component: '/cms/book'
      }
    ]
  },
  {
    path: '/system',
    title: '系统管理',
    icon: 'fa-solid fa-gear',
    children: [
      {
        path: '/system/org',
        title: '组织管理',
        icon: 'fa-solid fa-sitemap',
        component: '/system/org'
      },
      {
        path: '/system/menu',
        title: '菜单管理',
        icon: 'fa-solid fa-bars',
        component: '/system/menu'
      },
      {
        path: '/system/account',
        title: '账号管理',
        icon: 'fa-solid fa-user-plus',
        component: '/system/account'
      },
      {
        path: '/system/role',
        title: '角色管理',
        icon: 'fa-solid fa-user-pen',
        component: '/system/role'
      },
      {
        path: '/system/dict',
        title: '字典管理',
        icon: 'fa-solid fa-tag',
        component: '/system/dict'
      },
      {
        path: '/system/log',
        title: '日志管理',
        icon: 'fa-solid fa-bug',
        component: '/system/log'
      },
      {
        path: '/system/file',
        title: '文件管理',
        icon: 'fa-solid fa-file',
        component: '/system/file'
      }
    ]
  }
]
