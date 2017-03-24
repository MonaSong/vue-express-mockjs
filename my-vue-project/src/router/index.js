import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/readme',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/',
          component: resolve => require(['../views/Readme.vue'], resolve)
        },
        {
          path: 'account',
          component: resolve => require(['../views/Account.vue'], resolve)
        },
        {
          path: 'about',
          component: resolve => require(['../views/About.vue'], resolve)
        },
        {
          path: 'animate',
          component: resolve => require(['../views/Animate.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../views/Login.vue'], resolve)
    }
  ]
})
