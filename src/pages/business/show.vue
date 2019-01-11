<template>
    <div class="sec">
        <div class="content">
            <section-title text="演艺演出"></section-title>
            <three-card :list="listInfo" detail-url="/businessDetail"></three-card>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/sectionTitle.vue'
    import threeCard from '@/components/threeCard.vue'
    export default {
        name: "show",
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
            this.cat_id = this.$route.query.id || '2';
            this.getPageData();
        },
        methods:{
            // 获取页面数据
            getPageData(){
                this.$http.get('/Home/Api/get_agents_lists',{
                    page:1,
                    perpage:9999,
                    cat_id: this.cat_id
                },(res)=>{
                    console.log(res)
                    this.listInfo = res.agents || [];
                    return;
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
