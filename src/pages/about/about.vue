<template>
    <div>
        <top-section  :page-data="pagedata" :page-list="page_sec"></top-section>
        <router-view/>
    </div>
</template>

<script>
    import topSection from '../../components/topSection'
    export default {
        name: "index",
        components:{
            topSection
        },
        data(){
            return{

                page_sec: [
                    {
                        nor_img:require('../../assets/nor_company.png'),
                        act_img:require('../../assets/act_company.png'),
                        title:'企业介绍',
                        id:1,
                        routerUrl:'/aboutIntro'
                    },
                    {
                        nor_img:require('../../assets/nor_curture.png'),
                        act_img:require('../../assets/act_curture.png'),
                        title:'企业文化',
                        id:2,
                        routerUrl:'/aboutCulture'
                    },
                    {
                        nor_img:require('../../assets/nor_dec.png'),
                        act_img:require('../../assets/act_dec.png'),
                        title:'宣发体系',
                        id:3,
                        routerUrl:'/aboutDec'
                    },
                    {
                        nor_img:require('../../assets/nor_vision.png'),
                        act_img:require('../../assets/act_vision.png'),
                        title:'企业愿景',
                        id:4,
                        routerUrl:'/aboutVision'
                    }
                ],
                pagedata:{
                    bg_words:'ABOUT',
                    title_words:'关于我们',
                    title_info:'驭风者影视以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业发展为已任，立志为国内文化产业发展翻开一页新篇章。',
                    page_url:[ '关于我们','企业文化'],
                }
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
