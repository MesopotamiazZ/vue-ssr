import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'
import createRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter() // 要使用服务端渲染,所以要用这种方式创建
const store = createStore()

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  if (to.fullPath === '/app') {
    next('/login')
  } else {
    next()
  }
  next()
})

// router.beforeResolve((to, from, next) => {
//   console.log('before resolve invoked')
//   next()
// })

// router.afterEach((to, from) => {
//   console.log('after each invoked')
// })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
