<template>
    <div>
        <top-section  :pageData="pagedata"></top-section>
        <router-view/>
    </div>
</template>

<script>
    import topSection from '../../components/topSection'
    export default {
        name: "news",
        components:{
            topSection
        },
        data(){
            return{
                pagedata:{
                    bg_words:'NEWS',
                    title_words:'新闻中心',
                    title_info:'最新行业动态、票房数据、影评信息、影视项目资讯、驭风者影视重要信息、相关影视项目彩蛋花絮、剧照视频等资讯。',
                    page_sec: [
                        {
                            nor_img:require('../../assets/nor_companyNews.png'),
                            act_img:require('../../assets/act_companyNews.png'),
                            title:'企业新闻',
                            routerUrl:'/companyNews'
                        },
                        {
                            nor_img:require('../../assets/nor_industryNews.png'),
                            act_img:require('../../assets/act_industryNews.png'),
                            title:'行业动态',
                            routerUrl:'/industryNews'
                        },
                        {
                            nor_img:require('../../assets/nor_recentNews.png'),
                            act_img:require('../../assets/act_recentNews.png'),
                            title:'最新动态',
                            routerUrl:'/recentNews'
                        },
                        {
                            nor_img:require('../../assets/nor_feature.png'),
                            act_img:require('../../assets/act_feature.png'),
                            title:'彩蛋花絮',
                            routerUrl:'/feature'
                        }
                    ]
                }
            }
        }
    }
</script>
<style lang="less" scoped>

</style>

