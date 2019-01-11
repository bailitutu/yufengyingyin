<template>
    <div class="sec">
        <div class="content ">
            <section-title text="宣发合作"></section-title>
            <div class="culture_detail" v-html="content" style="font-size:16px;">
            </div>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/sectionTitle.vue'

    export default {
        name: "dispersing",
        components:{
            sectionTitle,
        },
        data(){
            return {
                content:''
            }
        },
        created(){
            this.getPageData();
        },
        methods:{

            getPageData(){
                this.$http.get('/Home/Api/get_cooperation',{},(res)=>{
                    console.log(res)
                    this.content =  res.content || {};
                    return;
                })
            }
        }
    }
</script>

<style lang="less" scoped>

    @import "../../less/common.less";
    .content{
        padding:45px 0;
        .culture_detail{
            width: 100%;
            margin-top: 40px;
            p{
                font-size:18px;
                word-break: break-all;
                white-space: normal;
                text-indent:2em;
                line-height: 32px;
            }
            img{
                max-width: 100%;
                margin:40px auto;
                display: block;
            }
        }
    }
</style>
