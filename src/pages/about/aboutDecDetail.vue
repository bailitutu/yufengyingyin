<template>
    <div class="sec">
        <div class="content">
            <!--<company-info :pageInfo="companyData"></company-info>-->
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
                },
                companyData:{}
            }
        },
        mounted() {
            this.id = this.$route.query.id || '';
            // this.getDetail();
        },
        methods: {
            //获取宣发信息
            getDetail() {
                this.$http.get('/Home/Api/get_partner_content', {
                    id: this.id
                }, (res) => {
                    console.log(res);


                    return;
                    this.detail = res || {}
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


