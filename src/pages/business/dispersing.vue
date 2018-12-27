<template>
    <div class="sec">
        <div class="content ">
            <section-title text="宣发合作"></section-title>

        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/sectionTitle.vue'

    export default {
        name: "dispersing",
        components:{
            sectionTitle,
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/common";
    .content{
        padding: 45px 0 40px;
    }
</style>
