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
                    title_info: '驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业',
                    page_url: ['联系我们']
                },
                companyData:{}
            }
        },
        mounted(){
            this.pageInit();
        },
        methods:{
            pageInit(){
                this.$http.get('/home/homeInfo',{},(res)=>{
                    this.companyData = res.companyInfo;
                })
            }
        }
    }
</script>
