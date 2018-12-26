<template>
    <div>
        <top-section :pageData="pagedata"></top-section>
        <div class="sec  bg-white">
            <div class="content active_content">
                <ul class="normal_list">
                    <li>
                        <img src="../../assets/2.png" class="w-f" alt="">
                        <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
                    </li>
                    <li>
                        <img src="../../assets/2.png" class="w-f" alt="">
                        <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
                    </li>
                    <li>
                        <img src="../../assets/2.png" class="w-f" alt="">
                        <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
                    </li>
                    <li>
                        <img src="../../assets/2.png" class="w-f" alt="">
                        <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
                    </li>
                    <li>
                        <img src="../../assets/2.png" class="w-f" alt="">
                        <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
                    </li>
                    <li>
                        <img src="../../assets/2.png" class="w-f" alt="">
                        <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
                    </li>
                    <li>
                        <img src="../../assets/2.png" class="w-f" alt="">
                        <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
                    </li>
                    <li>
                        <img src="../../assets/2.png" class="w-f" alt="">
                        <p class="c-28 one_raw">这里是标题这里是标题这里是标题这里是标题这里是标题这里是标题</p>
                    </li>

                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    import topSection from '../../components/topSection'

    export default {
        name: "activity",
        components: {
            topSection
        },
        data() {
            return {
                pagedata: {
                    bg_words: 'CONTACT',
                    title_words: '联系我们',
                    title_info: '驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业驭风者影业以“驭风者，皓月当空；任驰骋，万里江山；一切尽在股掌！”为企业之魂，坚持以彰显湖湘精神，推动中国文化产业',
                    page_url: ['联系我们']
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/common.less";

    .active_content {
        min-height: 500px;
        padding: 48px 0;
        .normal_list{
            width: 100%;
            font-size:0;
            overflow: hidden;
            li{
                display: inline-block;
                width: 410px;
                height: 374px;
                margin-left:10px;
                margin-bottom: 10px;
                box-shadow: 0 0 2px #F0F0F0;
                -webkit-border-radius: 4px;
                -moz-border-radius: 4px;
                border-radius: 4px;
                overflow: hidden;
                >img{
                    -webkit-border-radius: 4px;
                    -moz-border-radius: 4px;
                    border-radius: 4px;
                    height: 316px;
                    display: block;
                }
                >p{
                    font-size:20px;
                    height:60px;
                    line-height: 60px;
                    padding:0 10px ;
                }
            }
        }
    }
</style>

