<template>
    <div class="sec">
        <div class="content">
            <three-card :list="listInfo" :is-end="isEnd" detail-url="/businessDetail"></three-card>
        </div>
    </div>
</template>

<script>
    import threeCard from '@/components/threeCard.vue'

    export default {
        name: 'advertisement',
        components: {
            threeCard
        },
        data() {
            return {
                cat_id: '',
                listInfo: [],
                isEnd: false
            }
        },
        mounted() {
            this.cat_id = this.$route.query.id || '8'
            this.getPageData();
        },
        methods: {
            // 获取页面数据
            getPageData() {
                this.$http.get('/Home/Api/get_agents_lists', {
                    page: 1,
                    perpage: 9999,
                    cat_id: this.cat_id
                }, (res) => {
                    this.listInfo = res.agents || [];
                    this.isEnd = true;
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/common";

    .sec {
        .content {
            min-height: 600px;
            padding: 45px 0 40px;
        }
    }
</style>
