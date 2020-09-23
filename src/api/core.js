import { SDK } from './SDK'
export default {
  install (Vue) {
    const EventBus = new Vue()
    Vue.prototype.$bus = EventBus
    Vue.prototype.$sdk = SDK
  }
}
