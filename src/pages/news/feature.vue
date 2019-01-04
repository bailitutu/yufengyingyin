<template>
    <div class="sec bg-white">
        <div class="content" >
            <section-title text="彩蛋花絮"></section-title>
            <three-col :list="listInfo"></three-col>
        </div>
    </div>
</template>

<script>
    import threeCol from '../../components/threeCol'
    import sectionTitle from '@/components/sectionTitle.vue'
    export default {
        name: "feature",
        components: {
            threeCol,
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
                this.$http.get('/news/getFeature',{},(res)=>{
                    this.listInfo = res.list || [];
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/common.less";
    .content {
        min-height: 500px;
        padding: 48px 0 40px;
    }
</style>
