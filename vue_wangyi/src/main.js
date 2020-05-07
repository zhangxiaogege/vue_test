import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'//自动适配


import router from 'router' //路由
import store from 'store' //vuex仓库
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  
}).$mount('#app')
