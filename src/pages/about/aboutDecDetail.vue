<template>
    <div class="sec">
        <div class="content">
            <company-info :pageInfo="companyData"></company-info>
        </div>
    </div>
</template>

<script>
    import companyInfo from '../../components/companyInfo'
    export default {
        name: "about-dec-detail",
        components:{
            companyInfo
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
            this.getDetail();
        },
        methods: {
            //获取宣发信息
            getDetail() {
                this.$http.get('/Home/Api/get_partner_content', {
                    id: this.id
                }, (res) => {
                    console.log(res);
                    // this.detail = res || {};
                    this.companyData ={
                        companyAddress : res.addr,
                        companyName : res.title,
                        companyPhone : res.tel,
                        companyEmail : res.email,
                    }
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


