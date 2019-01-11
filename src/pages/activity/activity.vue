<template>
    <div>
        <top-section :pageData="pagedata"></top-section>
        <router-view/>

    </div>
</template>

<script>
    import topSection from '../../components/topSection'

    export default {
        name: "activity",
        components: {
            topSection,
        },
        data() {
            return {
                pagedata: {
                    bg_words: 'CONTACT',
                    title_words: '联系我们',
                    title_info: '驭风者影视线上、线下相关活动。开机仪式、新闻发布会、线下宣传活动、公益活动、商务活动等资讯。',
                }
            }
        },

    }
</script>

<style lang="less" scoped>

</style>

