<template>
    <header class="sec" :class=" showActive ? 'active': ''">
        <div class="content">
            <img src="../assets/logo.png" class="logo fl" alt="">

            <div class="menu fr">
                <router-link class="menu_cell " :class="item.active ? 'active' : ''" @click.native="changeRouter(item)"
                             v-for="(item,index) in routerList" :key="index" :to="item.url">{{item.title}}
                </router-link>
                <!--<router-link class="menu_cell active"  to="/">首页</router-link>-->
                <!--<router-link class="menu_cell"  to="/about">关于我们</router-link>-->
                <!--<router-link class="menu_cell"  to="/about">新闻中心</router-link>-->
                <!--<router-link class="menu_cell"  to="/about">作品展示</router-link>-->
                <!--<router-link class="menu_cell"  to="/about">商务合作</router-link>-->
                <!--<router-link class="menu_cell"  to="/activity">最新活动</router-link>-->
                <!--<router-link class="menu_cell"  to="/contact">联系我们</router-link>-->
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
        created() {
            var that = this;
            window.onscroll = function () {
                var dTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (dTop > 0) {
                    that.showActive = true;
                } else {
                    that.showActive = false;
                }
            }
        },
        watch: {
            '$route': {
                handler: (to) => {
                    console.log(to.matched)
                }
            }
        },
        methods: {
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
