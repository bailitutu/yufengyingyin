<template>
    <div>
        <div class="sec banner-sec">
            <div class="img_item">
                <!--<img :src="bgImg | urlImg" class="w-f h-f" alt="">-->

                <swiper :options="swiperOption" ref="mySwiper" >
                    <!-- slides -->
                    <swiper-slide v-for="( bgImg ,index) in bgImgs " :key="index"> <img :src="bgImg | urlImg" class="w-f h-f" alt=""></swiper-slide>

                    <!--<swiper-slide> <img :src="bgImg | urlImg" class="w-f h-f" alt=""></swiper-slide>-->
                    <!--<swiper-slide> <img :src="bgImg | urlImg" class="w-f h-f" alt=""></swiper-slide>-->
                    <!--<swiper-slide> <img :src="bgImg | urlImg" class="w-f h-f" alt=""></swiper-slide>-->
                    <!--<swiper-slide> <img :src="bgImg | urlImg" class="w-f h-f" alt=""></swiper-slide>-->
                    <!--<swiper-slide> <img :src="bgImg | urlImg" class="w-f h-f" alt=""></swiper-slide>-->
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
                    <!--<div class="swiper-button-next" slot="button-next"></div>-->
                    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
                </swiper>


            </div>
            <div class="content banner-content bg-white">
                <p class="fl" v-if="pageInfo">{{pageInfo.webtel}}</p>
                <button class="more_btn fr bg-white" @click.stop="goPage('/about')">MORE>></button>
            </div>
        </div>
        <div class="sec bg-white">
            <div class="content culture_con">
                <div class="culture_title tac">
                    <h1>驭风者文化</h1>
                    <p>QU FEN ZHE CULTURE</p>
                </div>
                <ul class="culture_list">
                    <li>
                        <img :src="pageInfo.index_culture_0 | urlImg" class="w-f h-f" alt="">
                        <!--<div class="culture_cell bg-black c-white">-->
                            <!--<h4>使命</h4>-->
                            <!--&lt;!&ndash;<div class="two_row">以“爱情美剧”品牌（Brand）为灵魂；以富有活力（Energy） 的创意统领营销全程；以观众……..</div>&ndash;&gt;-->
                        <!--</div>-->
                    </li>
                    <li>
                        <img :src="pageInfo.index_culture_1 | urlImg" class="w-f h-f" alt="">
                        <!--<div class="culture_cell bg-black c-white">-->
                            <!--<h4>使命</h4>-->
                            <!--&lt;!&ndash;<div class="two_row">以“爱情美剧”品牌（Brand）为灵魂；以富有活力（Energy） 的创意统领营销全程；以观众……..</div>&ndash;&gt;-->
                        <!--</div>-->
                    </li>
                    <li>
                        <img :src="pageInfo.index_culture_2 | urlImg" class="w-f h-f" alt="">
                    <!--    <div class="culture_cell bg-black c-white">
                            <h4>使命</h4>
                            &lt;!&ndash;<div class="two_row">以“爱情美剧”品牌（Brand）为灵魂；以富有活力（Energy） 的创意统领营销全程；以观众……..</div>&ndash;&gt;
                        </div>-->
                    </li>
                </ul>
            </div>
        </div>
        <div class="sec bg-black">
            <div class="content new_content">
                <div class="more_item">
                    <button class="more_btn bg-black" @click.stop="goPage('/news')">MORE>></button>
                </div>
                <div class="video_item">
                    <video-player  class="video-player vjs-custom-skin"
                                   ref="videoPlayer"
                                   :playsinline="true"
                                   :options="playerOptions"
                    ></video-player>
                </div>
                <div class="news_item">
                    <div class="news_title c-white" @click.stop="goPage('/news')" >
                        <h1>新闻中心</h1>
                        <p>News Center</p>
                    </div>
                    <ul class="news_list" v-if="newsList">
                        <li class="c-white" v-for=" (news,n) in newsList" :key="n" @click.stop="goPage('newsDetail',{ id : news.id})">
                            <div class="news_info one_raw">{{ news.title}}</div>
                            <span>{{news.uptime}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="sec bg-white" v-if="workList && workList.length > 0">
            <div class="content works_content">
                <div class="works_title">
                    <button class="more_work bg-black c-white" @click.stop="goPage('/works')">READ MORE</button>
                </div>
                <ul class="works_list">
                    <li  v-for="( works,w) in workList" :key="w" @click.stop="goPage( '/worksDetail', { id: works.id} )">
                        <div class="work_cell">
                            <img :src="works.imgs | urlImg " class="" alt="">
                            <h4 class="c-28 tal one_raw">{{works.title}}</h4>
                            <p class="c-6E tal one_raw">{{works.desc || '暂无描述'}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sec contact_sec">
            <div class="content contact_content" v-if="pageInfo">
                <div class="map_item">
                    <create-map :address="pageInfo.webaddr"></create-map>
                </div>
                <div class="info_item" >
                    <h3>{{pageInfo.webname}}</h3>
                    <p>联系电话：{{pageInfo.webtel}}</p>
                    <p>企业邮箱：{{pageInfo.webemail}}</p>
                    <p>公司地址：{{pageInfo.webaddr}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import createMap from '../../components/createMap'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "index",
        components: {
            createMap,swiper, swiperSlide
        },
        data(){
            return {
                bgImgs:'',
                swiperOption: {
                    autoplay:true,
                    pagination: {
                        el: '.swiper-pagination',
                        currentClass:'currentSwiper'
                    }
                },
                index_culture_0:'',
                index_culture_1:'',
                index_culture_2:'',
                pageInfo:{}, //主要信息
                workList:[], //作品列表
                newsList: [], //新闻列表
                playerOptions:{
                    // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '14:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: '',
                        src: ''//url地址
                    }],
                    poster: "", //你的封面地址
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true  //全屏按钮
                    }
                }
            }
        },
        mounted(){
            this.getPageData();
            this.getWorkData();
        },
        methods: {
            // 获取页面数据
            getPageData(){
                this.$http.get('/Home/Api/get_configs',{},(res)=>{
                    console.log(res);
                    this.bgImgs = res.configs.web_bg_0 || [] ;
                    this.pageInfo = res.configs || {};
                    this.playerOptions.sources[0].type = 'video/mp4';
                    this.playerOptions.sources[0].src = 'http://www.yowind.cn'+ res.configs.webvideo_url;
                    return;
                })
            },

            // 获取作品和新闻信息
            getWorkData(){
                this.$http.get('/Home/Api/get_index_infos',{},(res)=>{
                    console.log(res);
                    if(res.goods && res.goods.length > 0){
                        res.goods = res.goods.filter((item,index) =>{ return index < 4});
                        this.workList = res.goods;
                    }
                    this.newsList = res.news || [];
                })
            },

            // 跳转页面
            goPage(path, query) {
                this.$router.push({path: path, query: query || {}})
            }

        }
    }
</script>
<style>
    .video-js  .vjs-big-play-button{
        position: absolute;
        top:50%!important;
        left:50%!important;
        margin-left:-50px !important;
        margin-top:-50px!important;
        width:100px!important;
        height:100px!important;
        -webkit-border-radius: 50%!important;
        -moz-border-radius: 50%!important;
        border-radius: 50%!important;
        font-size:1rem!important;
        line-height: 1.2rem!important;
    }

    .swiper-pagination-bullet-active{
        background: black !important;
    }
</style>
<style lang="less" scoped>
    @import "../../less/common.less";

    .banner-sec {
        width: 100%;
        .img_item {
            height: 100%;
            width: 100%;
        }
        .banner-content {
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -630px;
            height: 54px;
            line-height: 54px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            overflow: hidden;
            font-size: 20px;
            color: @c-43;
            > p {
                padding: 0 10px 0 60px;
                background: url("../../assets/phone_icon.png") no-repeat 20px center;
                background-size: 27px 20px;
            }
            .more_btn {
                padding: 0 10px;
            }
        }
    }

    .culture_con {
        height: 480px;
        .culture_title {
            color: @c-28;
            h1 {
                font-size: 40px;
            }
            p {
                font-size: 18px;
            }
        }
        .culture_list {
            margin-top: 65px;
            font-size: 0;
            li:first-child {
                margin-left: 30px;
            }
            li {
                position: relative;
                width: 390px;
                height: 270px;
                display: inline-block;
                margin-left: 16px;
                overflow: hidden;
                .culture_cell {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 1;
                    height: 108px;
                    width: 100%;
                    overflow: hidden;
                    h4 {
                        font-size: 22px;
                        display: inline-block;
                        border-bottom: 1px solid @c-white;
                        line-height: 44px;
                        margin-left: 8px;
                    }
                    > div {
                        font-size: 14px;
                        margin-left: 8px;
                        line-height: 20px;
                        height: 40px;
                        margin-top: 12px;
                    }
                }
            }
        }
    }

    .new_content {
        padding-bottom: 80px;
        position: relative;
        overflow: hidden;
        .more_item {
            height: 65px;
            padding: 20px 0;
            text-align: right;
            .more_btn {
                height: 25px;
                color: @c-white;
                margin-right: 50px;
                font-size: 18px;
            }
        }
        .video_item {
            width: 650px;
            height: 418px;
            position: absolute;
            top: 97px;
            left: 0px;
            z-index: 10;
        }
        .news_item {
            float: right;
            height: 420px;
            width: 500px;
            margin-top: 32px;
            overflow: hidden;
            margin-right: 40px;
            cursor: pointer;
            .news_title {
                h1 {
                    font-size: 28px;
                    line-height: 30px;
                }
                p {
                    font-size: 18px;
                }
            }
            .news_list {
                width: 100%;
                margin-top: 18px;
                li {
                    width: 100%;
                    overflow: hidden;
                    height: 44px;
                    line-height: 44px;
                    font-size: 18px;
                    .news_info {
                        width: 370px;
                        display: inline-block;
                    }
                    span {
                        width: 120px;
                        white-space: nowrap;
                        float: right;
                        display: inline-block;
                        font-size: 18px;
                    }
                }
            }

        }
    }

    .works_content {
        padding-top: 100px;
        padding-bottom: 40px;
        position: relative;
        .works_title {
            width: 426px;
            height: 243px;
            position: absolute;
            top: 100px;
            right: 50px;
            z-index: 1;
            background: url('../../assets/works_title_bg.png') no-repeat center;
            background-size: 426px 243px;
            .more_work {
                height: 60px;
                width: 200px;
                position: absolute;
                font-size: 18px;
                bottom: 30px;
                left: 53px;
                z-index: 10;
            }
        }
        .works_list {
            width: 100%;
            overflow: hidden;
            li {
                width: 600px;
                height: 450px;
                float: left;
                text-align: center;
                position: relative;
                padding: 30px 0 0;
                .work_cell {
                    height: 420px;
                    width: 450px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 10;
                    img {
                        width: 450px;
                        height: 300px;
                    }
                    h4 {
                        height: 40px;
                        line-height: 40px;
                        width: 450px;
                        font-size: 20px;
                    }
                    p {
                        height: 40px;
                        line-height: 40px;
                        width: 450px;
                        font-size: 18px;
                    }
                }
            }
            li:nth-of-type(1) {
                margin-top: 60px;
                .work_cell:before {
                    content: 'YOU';
                    word-break: break-all;
                    white-space: normal;
                    position: absolute;
                    left: -50px;
                    color: #D8D8D8;
                    font-size: 102px;
                    top: -60px;
                    z-index: 1;
                    opacity: 0.3;
                }
                .work_cell:after {
                    content: 'TYPESOMETHING';
                    width: 10px;
                    height: auto;
                    word-break: break-all;
                    white-space: normal;
                    position: absolute;
                    right: -20px;
                    color: #D8D8D8;
                    font-size: 12px;
                    top: 0;
                    z-index: 1;
                }
            }
            li:nth-of-type(2) {
                margin-top: 300px;
                margin-left: 20px;
                .work_cell:before {
                    content: 'SATISFIED';
                    white-space: nowrap;
                    position: absolute;
                    right: -50px;
                    color: #D8D8D8;
                    font-size: 102px;
                    top: 100px;
                    z-index: 1;
                    opacity: 0.3;
                }
                .work_cell:after {
                    content: 'TYPESOMETHING';
                    width: 10px;
                    height: auto;
                    word-break: break-all;
                    white-space: normal;
                    position: absolute;
                    left: -20px;
                    color: #D8D8D8;
                    font-size: 12px;
                    top: 0;
                    z-index: 1;
                }
            }
            li:nth-of-type(3) {
                margin-top: -160px;
                .work_cell:before {
                    content: 'WO';
                    word-break: break-all;
                    white-space: normal;
                    position: absolute;
                    left: -50px;
                    color: #D8D8D8;
                    font-size: 102px;
                    top: 100px;
                    z-index: 1;
                    opacity: 0.3;
                }
                .work_cell:after {
                    content: 'TYPESOMETHING';
                    width: 10px;
                    height: auto;
                    word-break: break-all;
                    white-space: normal;
                    position: absolute;
                    right: -20px;
                    color: #D8D8D8;
                    font-size: 12px;
                    top: 0;
                    z-index: 1;
                }
            }
            li:nth-of-type(4) {
                margin-top: 60px;
                margin-left: 20px;
                .work_cell:before {
                    content: 'APPROVAL';
                    white-space: nowrap;
                    position: absolute;
                    left: -50px;
                    color: #D8D8D8;
                    font-size: 102px;
                    top: 100px;
                    z-index: 1;
                    opacity: 0.3;
                }
                .work_cell:after {
                    content: 'TYPESOMETHING';
                    width: 10px;
                    height: auto;
                    word-break: break-all;
                    white-space: normal;
                    position: absolute;
                    left: -20px;
                    color: #D8D8D8;
                    font-size: 12px;
                    top: 0;
                    z-index: 1;
                }
            }
        }

    }

    .contact_sec {
        background: @bg-black;
        .contact_content {
            height: 450px;
            padding: 80px 0;
            .map_item {
                width: 624px;
                height: 380px;
                float: left;
            }
            .info_item {
                float: left;
                width: 500px;
                height: 380px;
                margin-left: 43px;
                color: @c-white;
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
