<template>
    <div>
        <top-section :pageData="pagedata"></top-section>
        <company-info :pageInfo="companyData"></company-info>
    </div>
</template>

<script>
    import topSection from '../../components/topSection'
    import companyInfo from '../../components/companyInfo'

    export default {
        name: "contact",
        components: {
            topSection,
            companyInfo
        },
        data() {
            return {
                pagedata: {
                    bg_words: 'CONTACT',
                    title_words: '联系我们',
                    title_info: '驭风者影视联系方式！',
                },
                companyData:{}
            }
        },
        mounted(){
            this.getData();
        },
        methods:{
            getData(){
                this.$http.get('/Home/Api/get_configs',{},(res)=>{
                    let company  = {};
                    company.companyAddress = res.configs.webaddr || '';
                    company.companyName = res.configs.webname || '';
                    company.companyPhone = res.configs.webtel || '';
                    company.companyEmail = res.configs.webemail || '';
                    this.companyData = company
                })
            }
        }
    }
</script>
