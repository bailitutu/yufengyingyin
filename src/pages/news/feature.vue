<template>
    <div class="sec bg-white">
        <div class="content" >
            <section-title text="彩蛋花絮"></section-title>
            <three-col></three-col>
        </div>
    </div>
</template>

<script>
    import threeCol from '../../components/threeCol'
    import sectionTitle from '@/components/sectionTitle.vue'
    export default {
        name: "feature",
        components: {
            threeCol,
            sectionTitle
        },
    }
</script>

<style lang="less" scoped>
    @import "../../less/common.less";
    .content {
        min-height: 500px;
        padding: 48px 0 40px;
    }
</style>
