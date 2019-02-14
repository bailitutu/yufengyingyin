<template>
    <div class="sec bg-white">
        <div class="content" >
            <works-list :list="listInfo" :is-end="isEnd"></works-list>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/sectionTitle.vue'
    import worksList from '@/components/worksList.vue'

    export default {
        name: "theatre-works",
        components: {
            sectionTitle,
            worksList
        },
        data(){
            return {
                listInfo:[],
                isEnd:false
            }
        },
        mounted(){
            this.cats_id = this.$route.query.id || '2';
            this.getData();
        },
        methods:{
            // 获取作品信息列表
            getData(){
                this.$http.get('/Home/Api/get_goods_lists',{
                    page:1,
                    perpage:9999,
                    cats_id:this.cats_id
                },(res)=>{
                    console.log(res)
                    this.listInfo = res.goods || [];
                    this.isEnd = true

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

