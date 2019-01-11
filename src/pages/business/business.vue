<template>
    <div>
        <top-section  :page-data="pagedata" :page-list="page_sec" > </top-section>
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
                page_sec: [
                    {
                        nor_img:require('../../assets/nor_advertisement.png'),
                        act_img:require('../../assets/act_advertisement.png'),
                        title:'广告合作',
                        id:'1',
                        routerUrl:'/advertisement'
                    },
                    {
                        nor_img:require('../../assets/nor_show.png'),
                        act_img:require('../../assets/act_show.png'),
                        id:'2',
                        title:'演艺演出',
                        routerUrl:'/show'
                    },
                    {
                        nor_img:require('../../assets/nor_actor.png'),
                        act_img:require('../../assets/act_actor.png'),
                        id:'3',
                        title:'艺人合作',
                        routerUrl:'/actor'
                    },
                    {
                        nor_img:require('../../assets/nor_dispersing.png'),
                        act_img:require('../../assets/act_dispersing.png'),
                        id:'4',
                        title:'宣发合作',
                        routerUrl:'/dispersing'
                    }
                ],
                pagedata:{
                    bg_words:'ABOUT',
                    title_words:'关于我们',
                    title_info:'驭风者影视广告合作、演艺演出、艺人合作、宣发合作相关资讯。',
                }
            }
        },
        created(){
            this.getType();
        },
        methods:{
            //获取合作分类
            getType(){
                this.$http.get('/Home/Api/get_info_category',{
                    ptype:2
                },(res)=>{
                    if(res.cats && res.cats.length > 0){
                        for( let i = 0;i< res.cats.length;i++){
                            this.page_sec[i].title = res.cats[i].title;
                            this.page_sec[i].id = res.cats[i].id;
                        }
                    }
                })
            }

        }
    }
</script>
<style lang="less" scoped>

</style>
