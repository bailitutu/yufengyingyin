<template>
    <div class="sec">
        <div class="content">
            <normal-detail :title="detail.title" :time="detail.uptime">
                <img :src="detail.imgs" class="detail_img" slot="img" alt="">
                <div slot="html" class="detail_info" v-html="detail.content" >
                </div>
            </normal-detail>
        </div>
    </div>
</template>

<script>
    import normalDetail from '../../components/normalDetail'
    import videoPlay from '../../components/videoPlay'

    export default {
        name: "works-detail",
        components: {
            normalDetail,
            videoPlay
        },
        data(){
            return {
                detail:{
                    title:'',
                    time:'',
                }
            }
        },
        mounted() {
            this.detailId = this.$route.query.id || '';
            this.getDetail();
        },
        methods: {
            //获取作品信息
            getDetail() {
                this.$http.get('/Home/Api/get_goods_content', {
                    id: this.detailId
                }, (res) => {
                    this.detail = res || {}
                },(err)=>{
                    let errMsg =  err.msg ? err.msg : '该作品不存在';
                    alert(errMsg);
                })
            }

        }

    }
</script>

<style lang="less" scoped>
    @import "../../less/common.less";

    .content {
        padding: 45px 0;
    }
    .detail_info {
        font-size: 18px;
        line-height: 32px;
        white-space: normal;
        text-align: left;
    }
    .detail_img {
        width: 100%;
        height: auto;
        margin: 40px 0;
        display: block;
    }
</style>
