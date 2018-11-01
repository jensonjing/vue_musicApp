// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'

Vue.config.productionTip = false
Vue.use(WeVue)
Vue.use(Vuex)
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})