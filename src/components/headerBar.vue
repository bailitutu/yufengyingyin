<template>
    <header class="sec" :class=" showActive ? 'active':''">
        <div class="content">
            <img src="../assets/logo.png" class="logo fl" alt="">

            <div class="menu fr">
                <p class="active">首页</p>
                <p>关于我们</p>
                <p>新闻中心</p>
                <p>作品展示</p>
                <p>商务合作</p>
                <p>最新活动</p>
                <p>联系我们</p>
            </div>

        </div>
    </header>
</template>

<script>
    export default {
        name: "header-bar",
        data () {
            return {
                showActive:false
            }
        },
        created(){
            var that = this;
            window.onscroll= function(){
                var dTop = document.documentElement.scrollTop;
                // var openNav = that.$store.state.showMenu;
                // if(openNav){
                //     return false;
                // }
                if(dTop > 0){
                    that.showActive = true;
                }else{
                    that.showActive = false;
                }
            }

        }

    }
</script>

<style lang="less" scoped>
    @import "../less/common";
    .sec{
        background: transparent;
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        z-index: 100;
        overflow: hidden;
        transition: all 400ms ease;
        &.active{
            background: #000;
        }
        .content{
            height:120px;
            .logo{
                width: 200px;
                height:120px;
            }
            .menu{
                height:120px;
                width:auto;
                padding: 44px 0;
                p{
                    float: left;
                    min-width:100px;
                    padding:0 20px;
                    text-align: center;
                    height:32px;
                    line-height: 32px;
                    cursor:default;
                    font-size:24px;
                    color: @c-b0;
                    &.active{
                        color: @c-active;
                    }
                    &:hover{
                        color: @c-active;
                    }
                }

            }



        }


    }

</style>
