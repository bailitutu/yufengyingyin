<template>
    <div class="sec">
        <div class="content">
            <div class="actor_info">
                <div class="actor_img_item">
                    <img :src="actorDetail.actorImg | urlImg" alt="">
                </div>
                <div class="actor_info_cell">
                    <h2>{{actorDetail.name}}</h2>
                    <p><span>生日：</span> {{ actorDetail.birthday}} </p>
                    <p><span>星座：</span> {{actorDetail.constellation}}</p>
                    <p><span>身高：</span> {{ actorDetail.height}} cm</p>
                    <p><span>体重：</span> {{ actorDetail.weight}} kg</p>
                    <p><span>籍贯：</span> {{ actorDetail.place}}</p>
                    <p><span>毕业院校：</span> {{ actorDetail.school}}</p>
                    <p><span class="fl">简介：</span> <i class=" fr" style="">{{ actorDetail.company}} </i></p>
                </div>

            </div>
            <div class="actor_works">
                <p class="c-28">代表作品</p>
                <ul class="actor_work_list">
                    <li v-for="(works,index) in list" :key="index">
                        <img :src="works.imgs | urlImg" alt="">
                        <p class="tac c-28 one_raw">《{{ works.title}}》</p>
                    </li>

                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "actor-detail",
        data(){
            return {
                actorDetail:{},
                actorId:''
            }
        },
        mounted(){
            this.actorId = this.$route.query.id || '';
            this.getDetail();
        },
        methods:{
            //获取艺人详细信息
            getDetail(){
                this.$http.get('/Home/Api/get_artist_content',{
                    id:this.actorId
                },(res)=>{
                    this.actorDetail = res || {};
                    this.list = res.goods || [];
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../../less/common";
    .content{
        min-height:1000px;
        padding: 45px 0;
        .actor_info{
            width: 100%;
            min-height: 500px;
            padding:27px 40px;
            overflow: hidden;
            box-shadow:0px 0px 4px 0px rgba(0,0,0,0.2);
            .actor_img_item{
                float: left;
                width: 360px;
                height: 446px;
                text-align: center;
                position: relative;
                &:before{
                    content:'';
                    width: 240px;
                    height: 306px;
                    border:1px solid rgba(250,204,0,1);
                    position: absolute;
                    left:0;
                    top:0;
                    z-index: 1;
                }
                &:after{
                    content:'';
                    width: 240px;
                    height: 306px;
                    border:1px solid rgba(250,204,0,1);
                    position: absolute;
                    right:0;
                    bottom:0;
                    z-index: 1;
                }
                img{
                    width: 300px;
                    height: 400px;
                    border:1px solid #f4f4f4;
                    position: absolute;
                    top:21px;
                    left:50%;
                    z-index: 10;
                    margin-left:-150px;
                }
            }
            .actor_info_cell{
                float: left;
                margin-left: 90px;
                width: 700px;
                height: 100%;
                color: @c-28;
                h2{
                    font-size:24px;
                    margin:21px 0 45px;
                }
                p{
                    font-size:18px;
                    margin-top:24px;
                    line-height: 26px;
                    span{
                        display: inline-block;
                        min-width:100px;
                    }
                    i{
                        font-style:normal;
                        width: 600px;
                    }
                }

            }
        }
        .actor_works{
            margin-top: 40px;
            width: 100%;
            >p{
                font-size:24px;
            }
            .actor_work_list{
                margin-top: 34px;
                width: 100%;
                font-size:0;
                li{
                    display: inline-block;
                    width:200px;
                    margin-right:20px;
                    height:auto;
                    img{
                        width: 200px;
                        height: 300px;
                        display: block;
                    }
                    p{
                        font-size:20px;
                        margin: 28px 0 20px;
                    }
                }
            }
        }
    }
</style>
