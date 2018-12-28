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
import newsDetail from '@/pages/news/newsDetail';
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
import worksDetail from '@/pages/works/worksDetail';
import activity from '@/pages/activity/activity';
import contact from '@/pages/contact/contact';


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            component: index
        },
        {
            path: '/about',
            name: '关于我们',
            component: about,
            redirect: '/aboutIntro',
            children: [
                {
                    path: '/aboutCulture',
                    name: '企业文化',
                    component: aboutCulture
                },
                {
                    path: '/aboutDec',
                    name: '宣发体系',
                    component: aboutDec
                },
                {
                    path: '/aboutIntro',
                    name: '企业介绍',
                    component: aboutIntro
                },
                {
                    path: '/aboutVision',
                    name: '企业愿景',
                    component: aboutVision
                }
            ]
        },
        {
            path: '/news',
            name: '新闻中心',
            component: news,
            redirect:'/companyNews',
            children:[
                {
                    path: '/companyNews',
                    name: '公司新闻',
                    component: companyNews
                },{
                    path: '/industryNews',
                    name: '行业动态',
                    component: industryNews
                },{
                    path: '/recentNews',
                    name: '最新动态',
                    component: recentNews
                },{
                    path: '/feature',
                    name: '彩蛋花絮',
                    component: feature
                },{
                    path: '/newsDetail',
                    name: '新闻详情',
                    component: newsDetail
                },
            ]
        },
        {
            path: '/works',
            name: '作品展示',
            component: works,
            redirect:'/internetWorks',
            children:[
                
                {
                    path: '/internetWorks',
                    name: '网络大电影',
                    component: internetWorks
                },
                {
                    path: '/theatreWorks',
                    name: '院线作品',
                    component: theatreWorks
                },
                {
                    path: '/otherWorks',
                    name: '其他作品',
                    component: otherWorks
                }, {
                    path: '/worksDetail',
                    name: '作品详情',
                    component: worksDetail
                },
            ]
        },
        {
            path: '/business',
            name: '商业合作',
            component: business,
            redirect:'/advertisement',
            children: [
                {
                    path: '/show',
                    name: '演艺演出',
                    component: show
                },
                {
                    path: '/actor',
                    name: '艺人合作',
                    component: actor
                },
                {
                    path: '/actorDetail',
                    name: '艺人详情',
                    component: actorDetail
                },
                {
                    path: '/advertisement',
                    name: '广告合作',
                    component: advertisement
                },
                {
                    path: '/dispersing',
                    name: '宣发合作',
                    component: dispersing
                },
            ]
        },
        {
            path: '/activity',
            name: '最新活动',
            component: activity
        }, {
            path: '/contact',
            name: '联系我们',
            component: contact
        }
    ]
})
