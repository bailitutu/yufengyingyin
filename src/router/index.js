import Vue from 'vue';
import Router from 'vue-router';
import myindex from '@/pages/home/index';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: myindex
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: about
    // },
    // {
    //   path: '/car',
    //   name: 'car',
    //   component: car
    // },
    // {
    //   path: '/service',
    //   name: 'service',
    //   component: service
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: profile
    // },
    // {
    //   path: '/news',
    //   name: 'news',
    //   component: news
    // },
    // {
    //   path: '/newsdetail',
    //   query:{
    //     newid:''
    //   },
    //   name: 'newsdetail',
    //   component: newsdetail
    // }
  ]
})
