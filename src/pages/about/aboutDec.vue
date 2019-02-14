<template>
    <div class="sec bg-white">
        <div class="content" >
            <section-title text="宣发体系"></section-title>
            <three-card :list="listInfo" detail-url="/aboutDecDetail" :is-end="isEnd"></three-card>
        </div>
    </div>
</template>

<script>
    import threeCard from '../../components/threeCard'
    import sectionTitle from '@/components/sectionTitle.vue'

    export default {
        name: "about-dec",
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
            this.getPageData();
        },
        methods:{
            // 获取页面数据
            getPageData(){
                this.$http.get('/Home/Api/get_partner',{
                    page:1,
                    perpage:9999
                },(res)=>{
                    this.listInfo = res.partners || [];
                    this.isEnd = true;
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
