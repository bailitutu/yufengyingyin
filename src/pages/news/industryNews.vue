<template>
    <div class="sec bg-white">
        <div class="content" >
            <section-title text="行业动态"></section-title>
            <three-card :list="listInfo"></three-card>
        </div>
    </div>
</template>

<script>
    import threeCard from '../../components/threeCard'
    import sectionTitle from '@/components/sectionTitle.vue'
    export default {
        name: "industry",
        components: {
            threeCard,
            sectionTitle
        },
        data(){
            return {
                listInfo:[]
            }
        },
        mounted(){
            this.getPageData();
        },
        methods:{
            // 获取页面数据
            getPageData(){
                this.$http.get('/news/companyNews',{
                    newsClassificationId:2
                },(res)=>{
                    this.listInfo = res.list.map((item)=>{
                        console.log(item)
                        item.title = item.newsTitle;
                        item.img = item.newsImg;
                        return item;
                    });

                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/common.less";
    .content {
        min-height: 500px;
        padding: 48px 0;
    }
</style>
