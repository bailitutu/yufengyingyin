<template>
    <div class="sec">
        <div class="content">
            <section-title text="广告合作"></section-title>
            <three-card :list="listInfo"></three-card>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/sectionTitle.vue'
    import threeCard from '@/components/threeCard.vue'
    export default {
        name: "advertisement",
        components:{
            sectionTitle,
            threeCard
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
                this.$http.get('/business/businessList',{
                    cooperClassificationId:3
                },(res)=>{
                    this.listInfo = res.list.map((item)=>{
                        item.title = item.cooperTitle;
                        item.img = item.cooperImg;
                        return item;
                    });

                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/common";
    .sec{
        .content{
            min-height:600px;
            padding:45px 0 40px;
        }
    }
</style>
