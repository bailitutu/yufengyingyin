<template>
    <div class="sec">
        <div class="content">
            <normal-detail :title="detail.title" :time="detail.time" >
                <img src="../../assets/1.png" class="detail_img" slot="img" alt="">
                <div slot="html" class="detail_info">
                    <p>爱上了的框架发生的浪费卡卡是砥砺奋进阿的说法爱上了的框架发生的浪费卡卡是砥砺奋进阿的说法爱上了的框架发生的浪费卡卡是砥砺奋进阿的说法爱上了的框架发生的浪费卡卡是砥砺奋进阿的说法爱上了的框架发生的浪费卡卡是砥砺奋进阿的说法</p>
                </div>
            </normal-detail>
        </div>
    </div>
</template>

<script>
    import normalDetail from '../../components/normalDetail'
    export default {
        name: "about-dec-detail",
        components:{
            normalDetail
        },
        data(){
            return {
                detail:{
                    title:'复仇者联盟',
                    time:'2018-09-09 12:00:00',
                }
            }
        },
        mounted() {
            this.detailId = this.$route.query.id || ''
        },
        methods: {
            //获取宣发信息
            getDetail() {
                this.$http.get('', {
                    id: this.detailId
                }, (res) => {
                    console.log(res);

                },(err)=>{
                    let errMsg =  err.msg ? err.msg : '系统异常';
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
    }
</style>


