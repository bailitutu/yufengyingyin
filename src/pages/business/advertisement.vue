<template>
    <div class="sec">
        <div class="content">
            <section-title text="广告合作"></section-title>
            <three-col></three-col>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/sectionTitle.vue'
    import threeCol from '@/components/threeCol.vue'
    export default {
        name: "advertisement",
        components:{
            sectionTitle,
            threeCol
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/common";
    .sec{
        .content{
            min-height:600px;
            padding:45px 0 40px;
        }
    }
</style>
