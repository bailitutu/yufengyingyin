<template>
    <div class="works_item">
        <div class="works_recommend" v-if="commondList.length == 3">
            <div class="rec_left fl"  @click.stop="checkDetail(commondList[0].id )">
                <img :src="commondList[0].newsBigImg" class="w-f h-f" alt="">
            </div>
            <div class="rec_right fl">
                <div class="rec_cell"  @click.stop="checkDetail(commondList[1].id )">
                    <img :src="commondList[1].newsBigImg"  class="w-f h-f" alt="">
                </div>
                <div class="rec_cell"  @click.stop="checkDetail(commondList[2].id )">
                    <img :src="commondList[2].newsBigImg"  class="w-f h-f"  alt="">
                </div>
            </div>
        </div>
        <ul class="works_list" v-if="worksList.length> 0">
            <li v-for="(works,index) in worksList" :key="index" @click.stop="checkDetail(works.id )" >
                <img :src="works.imgs | urlImg"  class="w-f h-f"  alt="">
            </li>
        </ul>
        <blank-page v-if="list.length === 0 "></blank-page>
    </div>
</template>

<script>
    import blankPage from '@/components/blankPage.vue'

    export default {
        name: "works-list",
        components:{
            blankPage
        },
        props:{
            list:{
                type:Array,
                default:[]
            }
        },
        data(){
            return{
                commondList:[], //推荐作品列表
                worksList:[] //普通作品列表
            }
        },
        watch:{
            list(val,oldVal){
                if( val && val.length > 0){
                    this.commondList = val.filter((item,index)=>{
                        return index < 3;
                    })
                    this.worksList = val.filter((item,index)=>{
                        return index >= 3;
                    })
                }
            }
        },
        methods:{
            //查看作品详情
            checkDetail(id){
                this.$router.push({path: '/worksDetail', query: { id: id}})
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../less/common.less";
    .works_item {
        width: 100%;
        margin-top: 30px;
        .works_recommend {
            height: 360px;
            width: 100%;
            overflow: hidden;
            .rec_left {
                width: 850px;
                height: 360px;
            }
            .rec_right {
                width: 350px;
                height: 350px;
                margin-left: 28px;
                .rec_cell {
                    width: 100%;
                    height: 175px;
                }
                .rec_cell:first-child {
                    margin-bottom: 10px;
                }
            }
        }

        .works_list {
            width: 100%;
            font-size: 0;
            margin-top: 33px;
            li {
                width: 300px;
                height: 400px;
                font-size: 18px;
                margin-left: 10px;
                position: relative;
                display: inline-block;
                margin-bottom: 10px;
                overflow: hidden;
            }
            li:nth-of-type(4n+1) {
                margin-left: 0;
            }

        }

    }

</style>
