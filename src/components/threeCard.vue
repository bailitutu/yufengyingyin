<template>
    <div>
        <ul class="normal_list">
            <li @click.stop="checkDetail(item.id)" v-for="(item,index) in list" :key="index">
                <img :src="item.img" class="w-f" alt="">
                <p class="c-28 one_raw">{{item.title}}</p>
            </li>
        </ul>
        <blank-page v-if="list.length === 0 "></blank-page>
    </div>

</template>

<script>
    import blankPage from '@/components/blankPage.vue'

    export default {
        name: "three-card",
        components:{
            blankPage
        },
        props : {
            detailUrl:{
                type:String,
                default:'/newsDetail'
            },
            list:{
                type:Array,
                default: []
            }
        },
        methods:{
            // 查看详情
            checkDetail(id){
                this.$router.push({ path: this.detailUrl, query:{ id:id }})
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../less/common.less";

    .normal_list {
        width: 100%;
        font-size: 0;
        margin-top: 27px;
        overflow: hidden;
        li {
            display: inline-block;
            width: 410px;
            height: 374px;
            margin-left: 10px;
            margin-bottom: 10px;
            box-shadow: 0 0 2px #F0F0F0;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
            overflow: hidden;
            > img {
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;
                height: 316px;
                display: block;
            }
            > p {
                font-size: 20px;
                height: 60px;
                line-height: 60px;
                padding: 0 10px;
            }
        }
    }
</style>
