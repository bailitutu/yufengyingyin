import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/home/index';
import about from '@/pages/about/about';
import aboutCulture from '@/pages/about/aboutCulture';
import aboutDec from '@/pages/about/aboutDec';
import aboutIntro from '@/pages/about/aboutIntro';
import aboutVision from '@/pages/about/aboutVision';
import news from '@/pages/news/news';
import companyNews from '@/pages/news/companyNews';
import industryNews from '@/pages/news/industryNews';
import recentNews from '@/pages/news/recentNews';
import feature from '@/pages/news/feature';
import business from '@/pages/business/business';
import advertisement from '@/pages/business/advertisement';
import dispersing from '@/pages/business/dispersing';
import show from '@/pages/business/show';
import actor from '@/pages/business/actor';
import actorDetail from '@/pages/business/actorDetail';
import works from '@/pages/works/works';
import internetWorks from '@/pages/works/internetWorks';
import theatreWorks from '@/pages/works/theatreWorks';
import otherWorks from '@/pages/works/otherWorks';
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
            component: news,
            redirect:'/companyNews',
            children:[
                {
                    path: '/companyNews',
                    name: 'companyNews',
                    component: companyNews
                },{
                    path: '/industryNews',
                    name: 'industryNews',
                    component: industryNews
                },{
                    path: '/recentNews',
                    name: 'recentNews',
                    component: recentNews
                },{
                    path: '/feature',
                    name: 'feature',
                    component: feature
                },
            ]
        },
        {
            path: '/works',
            name: 'works',
            component: works,
            redirect:'/internetWorks',
            children:[
                
                {
                    path: '/internetWorks',
                    name: 'internetWorks',
                    component: internetWorks
                },
                {
                    path: '/theatreWorks',
                    name: 'theatreWorks',
                    component: theatreWorks
                },
                {
                    path: '/otherWorks',
                    name: 'otherWorks',
                    component: otherWorks
                },
            ]
        },
        {
            path: '/business',
            name: 'business',
            component: business,
            redirect:'/advertisement',
            children: [
                {
                    path: '/show',
                    name: 'show',
                    component: show
                },
                {
                    path: '/actor',
                    name: 'actor',
                    component: actor
                },
                {
                    path: '/actorDetail',
                    name: 'actorDetail',
                    component: actorDetail
                },
                {
                    path: '/advertisement',
                    name: 'advertisement',
                    component: advertisement
                },
                {
                    path: '/dispersing',
                    name: 'dispersing',
                    component: dispersing
                },
            ]
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
    ]
})
