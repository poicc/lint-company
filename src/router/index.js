import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Index',
  //   component: () => import('../views/index/Index')
  // },
  {
    path: '/',
    name: 'TabBar',
    component: () => import('@/components/TabBar')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login')
  },
  {
    path: '/tabbar',
    name: 'Tabbar',
    component: () => import('../components/TabBar.vue'),
    children: [
      {
        path: '/resource',
        name: 'Resource',
        component: () => import('../views/resource/Resource')
      },
      {
        path: '/activity',
        name: 'Activity',
        component: () => import('../views/activity/Activity')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
