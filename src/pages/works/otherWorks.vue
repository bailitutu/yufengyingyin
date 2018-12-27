<template>
    <div class="sec bg-white">
        <div class="content" >
            <section-title text="其他作品"></section-title>
            <works-list></works-list>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/sectionTitle.vue'
    import worksList from '@/components/worksList.vue'

    export default {
        name: "other-works",
        components: {
            sectionTitle,
            worksList
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

