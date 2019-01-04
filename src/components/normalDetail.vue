<template>
    <div class="normal_detail">
        <h4 class="c-28 detail_title tac">{{title}}</h4>
        <p class="c-b0 detail_time tac">{{ time }}</p>
        <slot name="img" ></slot>
        <slot name="text" ></slot>
        <slot name="video" ></slot>
        <slot name="html"></slot>
        <!--<img src="../assets/1.png" class="detail_img" alt="">-->
        <!--<p class="detail_info c-28">简介：《守卫者-浮出水面》是潘镜丞执导的当代都市谍战剧，由靳东、韩雨芹领衔主演。该剧讲述了在机密单位301研究所研发的新型深海潜水器下水实-->
            <!--验过程中核心技术遭遇泄密后，以洪少秋...</p>-->
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
        .detail_img {
            width: 100%;
            height: auto;
            margin: 40px 0;
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
