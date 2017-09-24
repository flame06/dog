import Vue from 'vue'
import VueRouter from 'vue-router'


import homepage from '../components/homePage/homePage.vue'
import foods from '../components/foods/foods.vue'
import health from '../components/health/health.vue'
import items from '../components/items/items.vue'
import buy from '../components/buy/buy.vue'
import user from '../components/user/user.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect:'/homepage'
    },
    {
      path:'/homepage',
      component:homepage
    },
    {
      path:'/items',
      component:items
    },
    {
      path:'/buy',
      component:buy
    },
    {
      path:'/user',
      component:user
    },
    {
      path:'/foods',
      component:foods
    },
    {
      path:'/health',
      component:health
    },

  ]
})
