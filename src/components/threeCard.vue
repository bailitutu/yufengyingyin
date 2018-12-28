<template>
    <ul class="normal_list">
        <li @click.stop="checkDetail('121231231')">
            <img src="../assets/2.png" class="w-f" alt="">
            <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
        </li>
        <li>
            <img src="../assets/2.png" class="w-f" alt="">
            <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
        </li>
        <li>
            <img src="../assets/2.png" class="w-f" alt="">
            <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
        </li>
        <li>
            <img src="../assets/2.png" class="w-f" alt="">
            <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
        </li>
        <li>
            <img src="../assets/2.png" class="w-f" alt="">
            <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
        </li>
        <li>
            <img src="../assets/2.png" class="w-f" alt="">
            <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
        </li>
        <li>
            <img src="../assets/2.png" class="w-f" alt="">
            <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
        </li>
        <li>
            <img src="../assets/2.png" class="w-f" alt="">
            <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
        </li>
        <li>
            <img src="../assets/2.png" class="w-f" alt="">
            <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
        </li>
        <li>
            <img src="../assets/2.png" class="w-f" alt="">
            <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "three-card",
        props : {
            // detailUrl:''
        },
        data(){
          return {
              detailUrl: '/newsDetail'
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
