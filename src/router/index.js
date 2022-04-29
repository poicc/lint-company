import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: () => import('../views/index/Index')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login')
  },
  {
    path: '/tabbar/:id',
    name: 'TabBarChild',
    component: () => import('@/components/TabBarChild.vue'),
    children: [
      {
        path: 'resource',
        name: 'Resource',
        component: () => import('../views/resource/Resource')
      },
      {
        path: 'activity',
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
