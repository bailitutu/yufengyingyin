<template>
    <div class="sec contact_sec bg-white">
        <div class="content contact_content" v-if="pageInfo">
            <div class="map_item">
                <create-map :address="pageInfo.companyAddress"></create-map>
            </div>
            <div class="info_item" >
                <h3>{{pageInfo.companyName}}</h3>
                <p>联系电话：{{pageInfo.companyPhone}}</p>
                <p>企业邮箱：{{pageInfo.companyEmail}}</p>
                <p>公司地址：{{pageInfo.companyAddress}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import createMap from '../components/createMap'
    export default {
        name: "company-info",
        components: {
            createMap
        },
        props:['pageInfo']
    }
</script>

<style lang="less" scoped>
    @import "../less/common.less";
    .contact_sec {
        .contact_content {
            height:500px;
            padding-top: 55px;
            .map_item {
                width: 624px;
                height: 380px;
                background: red;
                float: right;
            }

            .info_item {
                float: left;
                width: 500px;
                height: 380px;
                margin-left: 43px;
                color: @c-28;
                h3 {
                    font-size: 30px;
                    margin-top: 72px;
                    margin-bottom: 28px;
                }

                p {
                    font-size: 18px;
                    padding-top: 24px;
                }

            }
        }
    }
</style>
