<template>
    <div>
        <div class="sec bg-white">
            <div class="content">
                <section-title text="企业介绍"></section-title>
                <div class="intro_item">
                    <div class="intro_left fl" v-html="companyInfo.content">
                    </div>
                    <div class="intro_right fl">
                        <img :src="companyInfo.imgs" class="w-f h-f" alt="">
                    </div>
                </div>

            </div>
        </div>
        <div class="sec bg-black">
            <div class="content dev_content">
                <h1 class="dev_title tac c-active">发展历程</h1>
                <div class="dev_section" v-if="devList.length > 0">
                    <i class="line"></i>
                    <span class="pre_btn" @click.stop="handlerClick(1)"></span>
                    <span class="next_btn" @click.stop="handlerClick(2)"></span>
                    <div class="dev_list_box">
                        <ul class="dev_list" ref="swiperList" :style="{ left: swiperLeft + 'px'}">
                            <li v-for="(item,index) in devList" :key="index">
                                <p class="time tac">{{item.year}}</p>
                                <span class="dot"></span>
                                <div class="words">{{item.desc}}</div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/sectionTitle.vue'

    export default {
        name: "about-intro",
        components: {
            sectionTitle,
        },
        data() {
            return {
                companyInfo:{},
                devList: [],
                itemWitch: 0,
                swiperLeft: 0,
                lastIndex: 0, //最前面的下标
                isGoing: false,//是否正在过渡
            }

        },

        mounted() {
            this.getPageData();
        },
        updated(){
            this.$nextTick(()=>{
                this.itemWitch = this.$refs ? this.$refs.swiperList.clientWidth  / this.devList.length : 0;
            })
        },
        methods: {
            getPageData(){
                this.$http.get('/Home/Api/get_company_info',{},(res)=>{
                    console.log(res);
                    this.companyInfo = res ||{};
                    this.devList = res.licheng || [];

                    return;
                })
            },

            // 左右切换
            handlerClick(type) {
                if (this.isGoing || this.devList.length <= 4) {
                    return;
                }
                if (type == 1) { //点击前一个按钮，下标减小
                    if (this.lastIndex == 0 ) { //已经是第一个了
                        return;
                    }
                    this.lastIndex = this.lastIndex - 1;
                } else { //点击后一个按钮，下标增大
                    if ( this.lastIndex == this.devList.length -4 ) { //已经是最后一个了或者没有下一个了
                        return;
                    }
                    this.lastIndex = this.lastIndex + 1;
                }

                this.changeItem();
            },

            // 切换
            changeItem() {
                this.swiperLeft = this.lastIndex * -this.itemWitch;
                this.isGoing = true;
                setTimeout(() => {
                    this.isGoing = false
                }, 600)
            }
        }
    }
</script>
<style>
    .intro_left>p{
        font-size:18px;
        text-indent:2em;
    }
</style>
<style lang="less" scoped>
    @import "../../less/common";

    .sec {
        .content {
            padding: 45px 0;
            .intro_item {
                margin-top: 40px;
                margin-bottom: 20px;
                overflow: hidden;
                width: 100%;
                .intro_left {
                    width: 770px;
                    font-size:18px;
                    >p {
                        font-size: 18px;
                        color: @c-28;
                        text-indent: 2em;
                        white-space: normal;
                        line-height: 32px;
                    }
                }
                .intro_right {
                    width: 450px;
                    height: 450px;
                    margin-left: 36px;
                }
            }

        }
    }

    .dev_content {
        padding: 120px 0;
        .dev_title {
            font-size: 30px;
        }
        .dev_section {
            margin-top: 60px;
            padding: 0 140px;
            width: 100%;
            height: 400px;
            overflow: hidden;
            position: relative;
            .line {
                height: 2px;
                width: 100%;
                background: @c-6E;
                position: absolute;
                top: 70px;
                left: 0;
                z-index: 1;
            }
            span.pre_btn {
                width: 40px;
                height: 40px;
                position: absolute;
                top: 50px;
                left: 2px;
                z-index: 11;
                background: @c-white;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                -webkit-box-shadow: 0 0 2px 2px 0 @c-white;
                -moz-box-shadow: 0 0 2px 2px @c-white;
                box-shadow: 0 0 2px 2px @c-white;
                &:after {
                    content: '';
                    width: 14px;
                    height: 14px;
                    border-top: 4px solid #434343;
                    border-left: 4px solid #434343;
                    border-right: 2px solid @c-white;
                    border-bottom: 2px solid @c-white;
                    -webkit-border-radius: 4px;
                    -moz-border-radius: 4px;
                    border-radius: 4px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: rotateZ(-45deg);
                    margin-top: -8px;
                    margin-left: -4px;
                }
            }
            span.next_btn {
                width: 40px;
                height: 40px;
                position: absolute;
                top: 50px;
                right: 2px;
                z-index: 11;
                background: @c-white;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                -webkit-box-shadow: 0 0 2px 2px 0 @c-white;
                -moz-box-shadow: 0 0 2px 2px @c-white;
                box-shadow: 0 0 2px 2px @c-white;
                &:after {
                    content: '';
                    width: 14px;
                    height: 14px;
                    border-top: 4px solid #434343;
                    border-right: 4px solid #434343;
                    border-left: 2px solid @c-white;
                    border-bottom: 2px solid @c-white;
                    -webkit-border-radius: 4px;
                    -moz-border-radius: 4px;
                    border-radius: 4px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: rotateZ(45deg);
                    margin-top: -8px;
                    margin-left: -14px;
                }
            }
            .dev_list_box {
                width: 100%;
                height: 100%;
                overflow: hidden;
                position: relative;
            }
            .dev_list {
                width: auto;
                height: 100%;
                font-size: 0;
                white-space: nowrap;
                transition: left 600ms ease;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 10;
                color: @c-white;
                clear: both;
                li {
                    width: 200px;
                    height: 360px;
                    display: inline-block;
                    margin-right: 60px;
                    text-align: center;
                    vertical-align: top;
                    p.time {
                        font-size: 24px;
                        width: 200px;
                    }
                    span.dot {
                        margin-top: 25px;
                        display: inline-block;
                        width: 30px;
                        height: 30px;
                        background: @c-active;
                        -webkit-box-shadow: 0 0 6px 2px 0 @c-active;
                        -moz-box-shadow: 0 0 6px 2px @c-active;
                        box-shadow: 0 0 6px 2px @c-active;
                        border: 10px solid #fff;
                        -webkit-border-radius: 50%;
                        -moz-border-radius: 50%;
                        border-radius: 50%;
                    }
                    .words {
                        margin-top: 38px;
                        font-size: 16px;
                        line-height: 22px;
                        white-space: normal;
                        text-align: left;
                        width: 200px;
                        height: 230px;
                        color: @c-white;
                        background: rgba(255, 255, 255, 0.5);
                        -webkit-border-radius: 10px;
                        -moz-border-radius: 10px;
                        border-radius: 10px;
                        padding: 20px 10px;
                    }
                }
            }
        }
    }
</style>
