// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.component('mt-swipe', Swipe)
Vue.component('mt-swipe-item', SwipeItem)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
})
