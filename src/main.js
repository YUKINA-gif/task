import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import Store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  Store,
  render: h => h(App)
}).$mount('#app')

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    tasks:[]
  }
})