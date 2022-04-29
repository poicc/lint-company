import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index/Index')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login')
  },
  {
    path: '/activity',
    name: 'Activity',
    component: () => import('../views/activity/Activity')
  },
  {
    path: '/resource',
    name: 'Resource',
    component: () => import('../views/resource/Resource')
  }
]

const router = new VueRouter({
  routes
})

export default router
