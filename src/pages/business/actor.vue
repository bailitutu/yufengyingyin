<template>
    <div class="sec">
        <div class="content" style="min-height:600px;">
            <div class="title c-28">艺人合作</div>
            <ul class="actor_list">
                <li @click.stop="checkDetail(actor.id)" v-for="(actor,index) in list" :key="index">
                    <img :src="actor.actorImg | urlImg" alt="">
                    <p class="bg-black ">{{actor.name}}</p>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: "actor",
        data(){
            return{
                list:[]
            }
        },
        mounted(){
            this.getActorList();
        },
        methods:{
            // 获取艺人列表
            getActorList(){
                this.$http.get('/Home/Api/get_artist',{
                    page:1,
                    perpage:9999,
                },(res)=>{
                    console.log(res)
                    this.list =  res.aritist || [];
                    return;
                })
            },
            // 查看艺人详情
            checkDetail(id){
                console.log(id)
                this.$router.push({path: '/actorDetail',query:{ id: id}})
            }
        }

    }
</script>

<style lang="less" scoped>
    @import "../../less/common";
    .sec{
        .content{
            padding:45px 0 40px;
            >.title{
                font-size:30px;
                line-height: 42px;
            }
            .actor_list{
                width: 100%;
                font-size:0;
                margin-top: 27px;
                li{
                    width:300px;
                    height: 400px;
                    font-size:18px;
                    margin-left: 20px;
                    position: relative;
                    color: @c-white;
                    display: inline-block;
                    margin-bottom: 20px;
                    overflow: hidden;
                    img{
                        width:300px;
                        height: 400px;
                    }
                    p{
                        position: absolute;
                        bottom:1px;
                        left: 1px;
                        width: auto;
                        height: 40px;
                        line-height: 40px;
                        padding:0 10px;
                        text-align: center;
                    }
                }
                li:nth-of-type(4n+1){
                    margin-left:0;
                }
            }
        }
    }
</style>
