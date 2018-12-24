import Vue from 'vue';
import Router from 'vue-router';
import myindex from '@/pages/Index';
import about from '@/pages/About';
import car from '@/pages/Car';
import service from '@/pages/service';
import profile from '@/pages/profile';
import news from '@/pages/News';
import newsdetail from '@/pages/NewsDetail';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myindex',
      component: myindex
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/newsdetail',
      query:{
        newid:''
      },
      name: 'newsdetail',
      component: newsdetail
    }
  ]
})
