<template>
    <div class="sec bg-white">
        <div class="content" >
            <section-title text="最新动态"></section-title>
            <three-card></three-card>
        </div>
    </div>
</template>

<script>
    import threeCard from '../../components/threeCard'
    import sectionTitle from '@/components/sectionTitle.vue'
    export default {
        name: "recent-news",
        components: {
            threeCard,
            sectionTitle
        },
    }
</script>

<style lang="less" scoped>
    @import "../../less/common.less";
    .content {
        min-height: 500px;
        padding: 48px 0;
    }
</style>
