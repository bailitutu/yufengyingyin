<template>
    <div>
        <top-section :pageData="pagedata"></top-section>
        <div class="sec  bg-white">
            <div class="content active_content">
                <three-card :list="listInfo"></three-card>
            </div>
        </div>

    </div>
</template>

<script>
    import threeCard from '../../components/threeCard'
    import topSection from '../../components/topSection'

    export default {
        name: "activity",
        components: {
            topSection,
            threeCard
        },
        data() {
            return {
                pagedata: {
                    bg_words: 'CONTACT',
                    title_words: '联系我们',
                    title_info: '驭风者影视线上、线下相关活动。开机仪式、新闻发布会、线下宣传活动、公益活动、商务活动等资讯。',
                },
                listInfo:[]
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.$http.get('/activity/activityList',{},(res)=>{
                    this.listInfo = res.list.map((item)=>{
                        item.title = item.actTitle;
                        item.img = item.actImg;
                        return item;
                    });
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/common.less";
    .active_content {
        min-height: 500px;
        padding: 48px 0;
    }
</style>

