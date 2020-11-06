import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from '../store'
Vue.use(Vuex)
Vue.use(VueRouter)


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  store
}).$mount('#app')
