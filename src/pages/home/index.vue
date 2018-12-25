<template>
    <div>
        <div class="sec banner-sec">
            <div class="content banner-content">
                <p class="fl">400-9807-8888</p>
                <button class="more_btn fr">MORE>></button>
            </div>
        </div>
        <div class="sec bg-white">
            <div class="content">


            </div>
        </div>

        <div class="sec contact_sec">
            <div class="content contact_content">
                <div class="map_item">

                </div>
                <div class="info_item">
                    <h3>湖南驭风者影视文化传媒有限公司</h3>
                    <p>联系电话：400-0980-0880</p>
                    <p>企业邮箱：400-0980-0880</p>
                    <p>公司地址：湖南省长沙市阜宁县红岭路498号</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="less" scoped>
    @import "../../less/common.less";
    .banner-sec{
        background: url("../../assets/1.png") no-repeat center;
        background-size: cover;
        min-height:960px;
        .banner-content{
            position: absolute;
            bottom:0;
            left:50%;
            margin-left:-630px;
            height:54px;
            line-height: 54px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background: @c-white;
            overflow: hidden;
            font-size:20px;
            color: @c-43;
            >p{
                padding:0 10px 0 60px;
                background: url("../../assets/phone_icon.png") no-repeat  20px center;
                background-size: 27px 20px;
            }
            .more_btn{
                padding:0 10px;
                background: @c-white;
            }
        }
    }
    .contact_sec{
        background: @bg-black;
        .contact_content{
            height:450px;
            padding-top:35px;
            .map_item{
                width:624px;
                height:380px;
                background: red;
                float: left;
            }
            .info_item{
                float: left;
                width:500px;
                height:380px;
                margin-left: 43px;
                color: @c-white;
                h3{
                    font-size:30px;
                    margin-top: 72px;
                    margin-bottom:28px;
                }
                p{
                    font-size:18px;
                    padding-top:24px;
                }
            }
        }
    }
</style>
