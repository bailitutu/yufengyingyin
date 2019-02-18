import Vue from 'vue'
import App from './App'
import router from './router'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

import './css/style.css'

import 'lib-flexible/flexible'

import Api from './api.js'

Vue.prototype.$http = Api;
Vue.use(VueVideoPlayer);

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
import myFilter from './filter'
for (let key in myFilter) {
    Vue.filter(key, myFilter[key])
}
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload,{
    filter: {
        filterImg(listener, options){
            listener.src = 'http://www.yowind.cn'+ listener.src;
        }
    }
})


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
