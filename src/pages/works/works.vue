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
                    title_info:'驭风者影视相关院线电影、网络大电影、电视剧、广告片、纪录片、综艺节目、等资讯。',
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

