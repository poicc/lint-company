import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

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

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else if (store.state.userInfo.name === undefined) {
    next({
      name: 'Login'
    })
  }
})

export default router
