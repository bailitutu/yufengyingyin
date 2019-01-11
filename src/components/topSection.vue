<template>
    <div>
        <div class="sec bg-black">
            <div class="content title_content ">
                <p class="bg_words">{{pageData.bg_words}}</p>
                <div class="title_words">
                    <h1 class="c-white">{{pageData.title_words}}</h1>
                    <div class="c-white two_row">{{pageData.title_info}}</div>
                </div>
            </div>
        </div>
        <div class="sec bg-white page_sec">
            <div class="content page_info">
                <p class="page_position c-6E" v-if="pagePosition">当前位置>{{ pagePosition.join('>')}}</p>
                <div class="page_section" v-if="pageSecList.length > 0">
                    <ul>
                        <li @click.stop="checkSec(item)" :class="item.active ? 'active': ''"
                            v-for="(item,index) in pageSecList" :key="index">
                            <img :src="item.active ? item.act_img : item.nor_img" alt="">
                            <span>{{item.title}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "top-section",
        props: ['pageData','pageList'],
        data() {
            return {
                pageSecList: [],
                pagePosition: []
            }
        },

        mounted() {
            console.log(this.pageList)
            // 设置子路由状态
            if (this.pageList && this.pageList.length > 0) {
                this.pageSecList = this.pageList.map((cell) => {
                    if (cell.routerUrl == this.$route.matched[1].path) { //保持页面刷新时，路由组件状态不变
                        cell.active = true
                    } else {
                        cell.active = false;
                    }
                    return cell;
                })
            }
            this.setPagePostion();

        },
        methods: {
            // 设置页面导航路径
            setPagePostion() {
                if (this.$route.matched && this.$route.matched.length > 0) {
                    this.pagePosition = this.$route.matched.map((cell) => {
                        return cell.name
                    })
                }
            },

            // 切换子页面版块
            checkSec(item) {
                this.$router.push({path: item.routerUrl, query: {id: item.id}});
                this.pageSecList = this.pageSecList.map((cell) => {
                    if (cell.title == item.title) {
                        cell.active = true;
                    } else {
                        cell.active = false;
                    }
                    return cell
                })
                this.setPagePostion()
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../less/common.less";

    .title_content {
        height: 500px;
        .bg_words {
            height: 200px;
            font-size: 188px;
            color: #434343;
            position: absolute;
            top: 50%;
            left: 0;
            z-index: 1;
            margin-top: -100px;
            line-height: 200px;
            letter-spacing: 60px;
        }
        .title_words {
            padding-top: 250px;
            position: relative;
            z-index: 10;
            h1 {
                font-size: 44px;
            }
            div {
                font-size: 18px;
                margin-top: 10px;
                line-height: 44px;
            }
        }

    }

    .page_sec {
        border-bottom: 1px solid #d8d8d8;
        .page_info {
            height: 80px;
            .page_position {
                float: left;
                font-size: 16px;
                height: 80px;
                line-height: 80px;
                cursor: default;
                display: inline-block;
            }
            .page_section {
                float: right;
                height: 80px;
                ul {
                    font-size: 0;
                    padding: 10px 10px 0;
                    li {
                        display: inline-block;
                        font-size: 18px;
                        color: @c-6E;
                        height: 70px;
                        line-height: 70px;
                        cursor: pointer;
                        margin-left: 85px;
                        padding: 0 4px;
                        &.active {
                            color: @c-active;
                            border-bottom: 4px solid @c-active;
                        }
                        img {
                            width: 24px;
                            height: auto;
                            vertical-align: middle;
                        }
                        span {
                            margin-left: 6px;
                            vertical-align: middle;
                        }

                    }
                }
            }
        }
    }
</style>

