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
                    title_info:'驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业',
                    page_url:[ '关于我们','企业文化'],
                    page_sec: [
                        {
                            nor_img:require('../../assets/nor_company.png'),
                            act_img:require('../../assets/act_company.png'),
                            title:'广告合作',
                            routerUrl:'/advertisement'
                        },
                        {
                            nor_img:require('../../assets/nor_dec.png'),
                            act_img:require('../../assets/act_dec.png'),
                            title:'演艺演出',
                            routerUrl:'/show'
                        },
                        {
                            nor_img:require('../../assets/nor_curture.png'),
                            act_img:require('../../assets/act_curture.png'),
                            title:'艺人合作',
                            routerUrl:'/actorDetail'
                        },
                        {
                            nor_img:require('../../assets/nor_vision.png'),
                            act_img:require('../../assets/act_vision.png'),
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
