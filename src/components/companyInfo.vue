<template>
    <div class="sec contact_sec bg-white">
        <div class="content contact_content">
            <div class="map_item">
                <create-map></create-map>
            </div>
            <div class="info_item">
                <h3>湖南驭风者影视文化传媒有限公司</h3>
                <p>联系电话：400-0980-0880</p>
                <p>企业邮箱：400-0980-0880</p>
                <p>公司地址：湖南省长沙市阜宁县红岭路498号</p>
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
