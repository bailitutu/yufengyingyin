<template>
    <header class="sec" :class=" showActive ? 'active': ''">
        <div class="content">
            <img src="../assets/logo.png" class="logo fl" alt="">

            <div class="menu fr">
                <router-link class="menu_cell " :class="item.active ? 'active' : ''" @click.native="changeRouter(item)"
                             v-for="(item,index) in routerList" :key="index" :to="item.url">{{item.title}}
                </router-link>
            </div>

        </div>
    </header>
</template>

<script>
    export default {
        name: "header-bar",
        data() {
            return {
                showActive: false,
                routerList: [
                    {
                        title: '首页',
                        url: '/',
                        active: false
                    },
                    {
                        title: '关于我们',
                        url: '/about',
                        active: false
                    },
                    {
                        title: '新闻中心',
                        url: '/news',
                        active: false
                    },
                    {
                        title: '作品展示',
                        url: '/works',
                        active: false
                    },
                    {
                        title: '商务合作',
                        url: '/business',
                        active: false
                    },
                    {
                        title: '最新活动',
                        url: '/activity',
                        active: false
                    },
                    {
                        title: '联系我们',
                        url: '/contact',
                        active: false
                    }
                ]
            }
        },

        watch: {
            '$route'(to, from) {
                //路由变化时默认滚动条回到顶部
                document.documentElement.scrollTop ? document.documentElement.scrollTop = 0 : document.body.scrollTop = 0 ;
                // 重置路由指向
                this.setRouter()
            }
        },
        mounted() {
            // 设置路由状态
            this.setRouter();
            // 设置顶部导航栏背景状态
            this.setTopBg();
        },
        methods: {
            // 设置顶部导航栏背景状态
            setTopBg() {
                let that = this;
                window.onscroll = function () {
                    let dTop = document.documentElement.scrollTop || document.body.scrollTop;
                    if (dTop > 0) {
                        that.showActive = true;
                    } else {
                        that.showActive = false;
                    }
                }
            },

            // 设置路由状态
            setRouter() {
                this.routerList = this.routerList.map((item) => {
                    if (item.title == this.$route.matched[0].name) { //保持页面刷新时，路由组件状态不变
                        item.active = true;
                    } else {
                        item.active = false;
                    }
                    return item;
                })
            },

            // 切换路由
            changeRouter(item) {
                this.routerList = this.routerList.map((cell) => {
                    if (cell.title == item.title) {
                        cell.active = true
                    } else {
                        cell.active = false
                    }
                    return cell
                })
            }
        }

    }
</script>

<style lang="less" scoped>
    @import "../less/common";

    .sec {
        background: transparent;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        overflow: hidden;
        transition: all 400ms ease;
        &.active {
            background-color: #000000;
        }
        .content {
            height: 120px;
            .logo {
                width: 200px;
                height: 120px;
            }
            .menu {
                height: 120px;
                width: auto;
                padding: 44px 0;
                .menu_cell {
                    float: left;
                    min-width: 100px;
                    padding: 0 20px;
                    text-align: center;
                    height: 32px;
                    line-height: 32px;
                    cursor: default;
                    font-size: 24px;
                    color: @c-b0;
                    &.active {
                        color: @c-active;
                    }
                    &:hover {
                        color: @c-active;
                    }
                }

            }

        }

    }

</style>
