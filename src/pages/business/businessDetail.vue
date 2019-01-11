<template>
    <div class="sec">
        <div class="content" v-if="detail">
            <normal-detail :title="detail.title" :time="detail.uptime" >
                <img :src="detail.imgs" class="detail_img" slot="img" alt="">
                <div slot="html" class="detail_info" v-html="detail.content" >
                </div>
            </normal-detail>
        </div>
    </div>
</template>

<script>
    import normalDetail from '../../components/normalDetail'
    export default {
        name: "business-detail",
        components:{
            normalDetail
        },
        data(){
            return {
                detail:{
                    title:'',
                    uptime:'',
                    content:'',
                    imgs:''
                }
            }
        },
        mounted() {
            this.detailId = this.$route.query.id || '8';
            this.getDetail();
        },
        methods: {
            //获取作品信息
            getDetail() {
                this.$http.get('/Home/Api/get_agents_content', {
                    id: this.detailId
                }, (res) => {
                    console.log(res)
                    this.detail = res || {};
                },(err)=>{
                    let errMsg =  err.msg ? err.msg : '该合作不存在';
                    alert(errMsg);
                })
            }

        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/common.less";
    .content{
        padding:45px 0;
        .detail_info{
            font-size:18px;
        }
    }
</style>


