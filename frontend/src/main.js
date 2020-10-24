import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './plugins/bootstrap-vue'

import Home from './pages/Home/Home.vue'
import Ficha from './pages/Ficha/Ficha.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', name:'home', component: Home},
  {path: '/ficha', name:'ficha', component: Ficha}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
