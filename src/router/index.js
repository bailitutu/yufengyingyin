import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/home/index';
import about from '@/pages/about/about';
import aboutCulture from '@/pages/about/aboutCulture';
import aboutDec from '@/pages/about/aboutDec';
import aboutIntro from '@/pages/about/aboutIntro';
import aboutVision from '@/pages/about/aboutVision';
import news from '@/pages/news/news';
import business from '@/pages/business/business';
import works from '@/pages/works/works';
import activity from '@/pages/activity/activity';
import contact from '@/pages/contact/contact';


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/about',
            name: 'about',
            component: about,
            redirect: '/aboutIntro',
            children: [
                {
                    path: '/aboutCulture',
                    name: 'aboutCulture',
                    component: aboutCulture
                },
                {
                    path: '/aboutDec',
                    name: 'aboutDec',
                    component: aboutDec
                },
                {
                    path: '/aboutIntro',
                    name: 'aboutIntro',
                    component: aboutIntro
                },
                {
                    path: '/aboutVision',
                    name: 'aboutVision',
                    component: aboutVision
                }
            ]
        },
        {
            path: '/news',
            name: 'news',
            component: news
        },
        {
            path: '/works',
            name: 'works',
            component: works
        },
        {
            path: '/business',
            name: 'business',
            component: business
        },
        {
            path: '/activity',
            name: 'activity',
            component: activity
        }, {
            path: '/contact',
            name: 'contact',
            component: contact
        }
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
