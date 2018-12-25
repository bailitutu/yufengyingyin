<template>
    <div>
        <div class="sec banner-sec">
            <div class="content banner-content">
                <p class="fl">400-9807-8888</p>
                <button class="more_btn fr">MORE>></button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="less" scoped>
    @import "../../less/common.less";
    .banner-sec{
        background: url("../../assets/1.png") no-repeat center;
        background-size: cover;
        min-height:960px;
        .banner-content{
            position: absolute;
            bottom:0;
            left:50%;
            margin-left:-630px;
            height:54px;
            line-height: 54px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background: @c-white;
            overflow: hidden;
            font-size:20px;
            color: @c-43;
            >p{
                padding:0 10px 0 60px;
                background: url("../../assets/phone_icon.png") no-repeat  20px center;
                background-size: 27px 20px;
            }
            .more_btn{
                padding:0 10px;
                background: @c-white;
            }
        }
    }
</style>
