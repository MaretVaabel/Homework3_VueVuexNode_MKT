import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
        name: "login"
    }
},
  {
    path: '/base',
    component: () => import('../layout/Base.vue'),
    children: [ 
      { path: '/posts', component: () => import('../views/home/Posts.vue') },
      { path: '/browse', component: () => import('../views/home/Browse.vue') },
    ]
  },
  {
    path: '/login',
    name: "login",
    component: () => import('../views/account/Login.vue')
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router