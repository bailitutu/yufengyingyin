<template>
    <div class="sec bg-white">
        <div class="content" >
            <three-card :list="listInfo" :is-end="isEnd"></three-card>
        </div>
    </div>
</template>

<script>
    import threeCard from '../../components/threeCard'
    import sectionTitle from '@/components/sectionTitle.vue'
    export default {
        name: "recent-news",
        components: {
            threeCard,
            sectionTitle
        },
        data(){
            return {
                listInfo:[],
                isEnd:false
            }
        },
        mounted(){
            this.cats_id = this.$route.query.id || '1'
            this.getPageData();
        },
        methods:{
            // 获取页面数据
            getPageData(){
                this.$http.get('/Home/Api/get_news_lists',{
                    cat_id:1,
                    page:1,
                    perpage:9999
                },(res)=>{
                    this.listInfo = res.news || [];
                    this.isEnd = true;
                    return;
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
