<template>
    <div>
        <top-section  :page-data="pagedata" :page-list="page_sec"></top-section>
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
                page_sec: [
                    {
                        nor_img:require('../../assets/nor_internestWorks.png'),
                        act_img:require('../../assets/act_internetWorks.png'),
                        title:'网络大电影',
                        id:1,
                        routerUrl:'/internetWorks'
                    },
                    {
                        nor_img:require('../../assets/nor_theatreWorks.png'),
                        act_img:require('../../assets/act_theatreWorks.png'),
                        id:2,
                        title:'院线作品',
                        routerUrl:'/theatreWorks'
                    },
                    {
                        nor_img:require('../../assets/nor_otherWorks.png'),
                        act_img:require('../../assets/act_otherWorks.png'),
                        id:3,
                        title:'其他作品',
                        routerUrl:'/otherWorks'
                    }
                ],
                pagedata:{
                    bg_words:'WORKS',
                    title_words:'作品展示',
                    title_info:'驭风者影视相关院线电影、网络大电影、电视剧、广告片、纪录片、综艺节目、等资讯。',
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
                    ptype:1
                },(res)=>{
                    console.log(res);
                    if(res.cats && res.cats.length > 0){
                        for( let i = 0;i< res.cats.length;i++){
                            this.page_sec[i].title = res.cats[i].title;
                            this.page_sec[i].id = res.cats[i].id;
                        }
                    }
                    this.page_sec = this.page_sec.filter((item,index)=>{
                        return index < res.cats.length;
                    });
                })
            }

        }


    }
</script>
<style lang="less" scoped>

</style>

