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
                    title_info:'驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业',
                    page_url:[ '新闻中心','企业文化'],
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

