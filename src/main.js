// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import './css/style.css'

import 'lib-flexible/flexible'
Vue.use(Vuex);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  watch: {
    $route: {
      handler: function(val, oldVal){
        console.log(val);
      },
    }
  },
})
