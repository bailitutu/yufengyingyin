<template>
    <ul class="show_list">
        <li>
            <img src="../assets/3.png" alt="">
            <p class="one_raw c-white">科技宣传片EDIUS模板</p>
        </li>
        <li>
            <img src="../assets/3.png" alt="">
            <p class="one_raw c-white">科技宣传片EDIUS模板</p>
        </li>
        <li>
            <img src="../assets/3.png" alt="">
            <p class="one_raw c-white">科技宣传片EDIUS模板</p>
        </li>
        <li>
            <img src="../assets/3.png" alt="">
            <p class="one_raw c-white">科技宣传片EDIUS模板</p>
        </li>
        <li>
            <img src="../assets/3.png" alt="">
            <p class="one_raw c-white">科技宣传片EDIUS模板</p>
        </li>
        <li>
            <img src="../assets/3.png" alt="">
            <p class="one_raw c-white">科技宣传片EDIUS模板</p>
        </li>
        <li>
            <img src="../assets/3.png" alt="">
            <p class="one_raw c-white">科技宣传片EDIUS模板</p>
        </li>
        <li>
            <img src="../assets/3.png" alt="">
            <p class="one_raw c-white">科技宣传片EDIUS模板</p>
        </li>
        <li>
            <img src="../assets/3.png" alt="">
            <p class="one_raw c-white">科技宣传片EDIUS模板</p>
        </li>
        <li>
            <img src="../assets/3.png" alt="">
            <p class="one_raw c-white">科技宣传片EDIUS模板</p>
        </li>


    </ul>
</template>

<script>
    export default {
        name: "three-col"
    }
</script>

<style lang="less" scoped>
    @import "../less/common";
    .show_list{
        width: 100%;
        font-size:0;
        margin-top: 27px;
        li{
            width:400px;
            height: 300px;
            font-size:18px;
            margin-left: 30px;
            position: relative;
            color: @c-white;
            display: inline-block;
            margin-bottom: 20px;
            overflow: hidden;
            img{
                width:400px;
                height: 300px;
            }
            p{
                position: absolute;
                bottom:1px;
                left: 1px;
                width: 100%;
                height: 44px;
                line-height: 44px;
                padding:0 15px;
                text-align: left;
            }
        }
        li:nth-of-type(3n+1){
            margin-left:0;
        }
    }
</style>
