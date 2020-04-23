import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import toast from './components/common/tosat'
Vue.config.productionTip = false
Vue.use(toast)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
