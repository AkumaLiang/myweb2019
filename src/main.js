import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {routes} from '@/assets/js/routes.js'
Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({routes})

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
