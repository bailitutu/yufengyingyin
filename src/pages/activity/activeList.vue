<template>
    <div class="sec  bg-white">
        <div class="content active_content">
            <three-card :list="listInfo" detail-url="/activeDetail" :is-end="isEnd"></three-card>
        </div>
    </div>
</template>

<script>
    import threeCard from '../../components/threeCard'

    export default {
        name: "active-list",
        components:{
            threeCard
        },
        data(){
            return {
                listInfo:[],
                isEnd:false
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.$http.get('/Home/Api/get_acts_lists',{},(res)=>{
                    this.listInfo = res.acts || [];
                    this.isEnd = true
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
