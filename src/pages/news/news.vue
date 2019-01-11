<template>
    <div>
        <top-section  :page-data="pagedata" :page-list="page_sec" ></top-section>
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
                page_sec: [
                    {
                        nor_img:require('../../assets/nor_companyNews.png'),
                        act_img:require('../../assets/act_companyNews.png'),
                        title:'企业新闻',
                        routerUrl:'/companyNews',
                        id:'1'
                    },
                    {
                        nor_img:require('../../assets/nor_industryNews.png'),
                        act_img:require('../../assets/act_industryNews.png'),
                        title:'行业动态',
                        routerUrl:'/industryNews',
                        id:'2'
                    },
                    {
                        nor_img:require('../../assets/nor_recentNews.png'),
                        act_img:require('../../assets/act_recentNews.png'),
                        title:'最新动态',
                        routerUrl:'/recentNews',
                        id:'3'
                    },
                    {
                        nor_img:require('../../assets/nor_feature.png'),
                        act_img:require('../../assets/act_feature.png'),
                        title:'彩蛋花絮',
                        routerUrl:'/feature',
                        id:'4'
                    }
                ],
                pagedata:{
                    bg_words:'NEWS',
                    title_words:'新闻中心',
                    title_info:'最新行业动态、票房数据、影评信息、影视项目资讯、驭风者影视重要信息、相关影视项目彩蛋花絮、剧照视频等资讯。',
                }
            }
        },
        mounted(){
            this.getType();
        },
        methods:{
            //获取新闻分类
            getType(){
                this.$http.get('/Home/Api/get_info_category',{
                    ptype:0
                },(res)=>{
                    if(res.cats && res.cats.length > 0){
                        for( let i = 0;i< res.cats.length;i++){
                            this.page_sec[i].title = res.cats[i].title;
                        }
                    }
                    // this.page_sec = this.page_sec.filter((item,index)=>{
                    //     return index < res.cats.length;
                    // });
                })
            }
        }
    }
</script>
<style lang="less" scoped>

</style>

