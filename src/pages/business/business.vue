<template>
    <div>
        <top-section  :pageData="pagedata"></top-section>
        <router-view/>
    </div>
</template>

<script>
    import topSection from '../../components/topSection'
    export default {
        name: "business",
        components:{
            topSection
        },
        data(){
            return{
                pagedata:{
                    bg_words:'ABOUT',
                    title_words:'关于我们',
                    title_info:'驭风者影视广告合作、演艺演出、艺人合作、宣发合作相关资讯。',
                    page_sec: [
                        {
                            nor_img:require('../../assets/nor_advertisement.png'),
                            act_img:require('../../assets/act_advertisement.png'),
                            title:'广告合作',
                            routerUrl:'/advertisement'
                        },
                        {
                            nor_img:require('../../assets/nor_show.png'),
                            act_img:require('../../assets/act_show.png'),
                            title:'演艺演出',
                            routerUrl:'/show'
                        },
                        {
                            nor_img:require('../../assets/nor_actor.png'),
                            act_img:require('../../assets/act_actor.png'),
                            title:'艺人合作',
                            routerUrl:'/actor'
                        },
                        {
                            nor_img:require('../../assets/nor_dispersing.png'),
                            act_img:require('../../assets/act_dispersing.png'),
                            title:'宣发合作',
                            routerUrl:'/dispersing'
                        }
                    ]
                }
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
