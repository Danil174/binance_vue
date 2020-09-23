import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'OrderBook',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderBook.vue')
  },
  {
    path: '/controls',
    name: 'Controls',
    component: () => import(/* webpackChunkName: "about" */ '../views/Controls.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
