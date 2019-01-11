<template>
    <div class="sec">
        <div class="content">
            <p>Copyright&copy;{{copyRight}}</p>
            <p class="tac">{{infoCenter}}</p>
            <p class="tal beiHao">{{recodeInfo}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer-bar",
        data(){
          return {
              copyRight:'',
              infoCenter:'',
              recodeInfo:''
          }
        },
        created(){
            this.getData();
        },
        methods:{
            getData(){
                this.$http.get('/Home/Api/get_configs',{},(res)=>{
                    this.copyRight = res.configs.webcopy || '';
                    this.infoCenter = res.configs.webicp || '';
                    this.recodeInfo = res.configs.webpolicy || '';
                })
            }
        }
    }
</script>

<style lang="less" scoped>
@import "../less/common.less";

    .sec{
        background: @bg-black;
        .content{
            height:100px;
            line-height: 100px;
            color: @c-6E;
            font-size:18px;
            p{
                float: left;
                width: 33.33%;
                height: 100%;
            }
            .beiHao{
                padding-left:24px;
                background: url("../assets/icon_beian.png") no-repeat left center;
                background-size:20px 20px;
            }
        }
    }

</style>
