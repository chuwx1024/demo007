import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import * as filter from '@/filter/date'
import './utils/element'
import '@/style/common.less'

Vue.config.productionTip = false
Vue.use(ElementUI)
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
