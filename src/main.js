import Vue from 'vue'
import App from './App'
import router from './router'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

import './css/style.css'

import 'lib-flexible/flexible'

import Api from './api.js'

Vue.prototype.$http = Api
Vue.use(VueVideoPlayer)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
