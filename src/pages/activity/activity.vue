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
                    title_info: '驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业',
                    page_url: ['联系我们']
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
                    console.log(res);
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

