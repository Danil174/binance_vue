import Vue from 'vue'
import App from './App.vue'
import core from './api/core'

Vue.config.productionTip = false
Vue.use(core)

new Vue({
  render: h => h(App)
}).$mount('#app')
