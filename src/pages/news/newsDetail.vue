<template>
    <div class="sec">
        <div class="content">
            <normal-detail></normal-detail>
        </div>
    </div>
</template>

<script>
    import normalDetail from '../../components/normalDetail'
    export default {
        name: "news-detail",
        components:{
            normalDetail
        }

    }
</script>

<style lang="less" scoped>
    @import "../../less/common.less";
    .content{
        padding:45px 0;
    }
</style>

