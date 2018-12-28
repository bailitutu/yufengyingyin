<template>
    <div>
        <top-section  :pageData="pagedata"></top-section>
        <router-view/>
    </div>
</template>

<script>
    import topSection from '../../components/topSection'
    export default {
        name: "works",
        components:{
            topSection
        },
        data(){
            return{
                pagedata:{
                    bg_words:'WORKS',
                    title_words:'作品展示',
                    title_info:'驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业',
                    page_url:[ '作品展示','企业文化'],
                    page_sec: [
                        {
                            nor_img:require('../../assets/nor_internestWorks.png'),
                            act_img:require('../../assets/act_internetWorks.png'),
                            title:'网络大电影',
                            routerUrl:'/internetWorks'
                        },
                        {
                            nor_img:require('../../assets/nor_theatreWorks.png'),
                            act_img:require('../../assets/act_theatreWorks.png'),
                            title:'院线作品',
                            routerUrl:'/theatreWorks'
                        },
                        {
                            nor_img:require('../../assets/nor_otherWorks.png'),
                            act_img:require('../../assets/act_otherWorks.png'),
                            title:'其他作品',
                            routerUrl:'/otherWorks'
                        }
                    ]
                }
            }
        }
    }
</script>
<style lang="less" scoped>

</style>

