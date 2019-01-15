<template>
    <div class="normal_detail">
        <h4 class="c-28 detail_title tac">{{title}}</h4>
        <p class="c-b0 detail_time tac">{{ time }}</p>
        <slot name="img" class="main_img" ></slot>
        <slot name="text" ></slot>
        <slot name="html"></slot>
    </div>
</template>

<script>
    export default {
        name: "normal-detail",
        props:['title','time']
    }
</script>
<style lang="less" scoped>
    @import "../less/common";
    .normal_detail {
        width: 100%;
        margin-top: 40px;
        text-align: center;
        .detail_title {
            font-size: 30px;
            text-indent:2em;
        }
        .detail_time {
            display: inline-block;
            margin: 34px auto 0;
            padding-left: 28px;
            font-size: 18px;
            background: url('../assets/icon_clock.png') no-repeat left center;
            background-size: 18px 18px;
        }
        .main_img{
            width:1000px;
            margin:40px auto;
        }
        .detail_img {
            margin: 40px auto;
            width:1000px;
            display: block;
        }
        .detail_info {
            font-size: 18px;
            line-height: 32px;
            white-space: normal;
            text-align: left;
        }
    }
</style>
