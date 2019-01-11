<template>
    <div class="sec">
        <div class="content" style="min-height:600px;">
            <section-title text="企业文化"></section-title>
            <div class="culture_detail" v-html="content" style="font-size:16px;"></div>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/sectionTitle.vue'

    export default {
        name: "about-culture",
        components:{
            sectionTitle
        },
        data(){
            return {
                content: ''
            }
        },
        created(){
            this.getPageData();
        },
        methods:{
            getPageData(){
                this.$http.get('/Home/Api/get_culture',{},(res)=>{
                    console.log(res);
                    this.content = res.content;
                })
            },
        }
    }
</script>

<style lang="less" scoped>

    @import "../../less/common.less";
    .content{
        padding:45px 0;
    }
    .culture_detail{
        width: 100%;
        margin-top: 40px;
        p{
            font-size:18px;
            word-break: break-all;
            white-space: normal;
            text-indent:2em;
            line-height: 32px;
            color: #282828;
        }
        img{
            max-width: 100%;
            margin:40px auto;
            display: block;
        }
    }
</style>
