import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Landing from './pages/Landing'
import Product from './pages/Products'
import Products from './pages/Products'
import { store } from './store'

window.axios = require('axios')

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes : [
    { path : '/',component: Landing },
    { path : '/home',component: Landing },
    { path : '/products', component: Products },
    { path : '/products/single', component: Product },
  ]
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
