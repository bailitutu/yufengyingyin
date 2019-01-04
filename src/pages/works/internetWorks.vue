<template>
    <div class="sec bg-white">
        <div class="content" >
            <section-title text="网络大电影"></section-title>
            <works-list :list="listInfo"></works-list>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/sectionTitle.vue'
    import worksList from '@/components/worksList.vue'

    export default {
        name: "internet-works",
        components: {
            sectionTitle,
            worksList
        },
        data(){
            return {
                listInfo:[]
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
            // 获取作品信息列表
            getData(){
                this.$http.get('/works/workList',{
                    newsClassificationId:'1'
                },(res)=>{
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
        padding: 48px 0;
    }
</style>
