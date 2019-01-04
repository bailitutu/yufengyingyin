<template>
    <div>
        <ul class="show_list" v-if="list.length > 0">
            <li v-for="(item,index) in list" :key="index" @click.stop="playVideo(item)">
                <img :src="item.imgUrl" alt="">
                <p class="one_raw c-white">{{item.title}}</p>
            </li>
        </ul>
        <video-play v-if="list.length > 0" :video-type="currentType" :video-url="currentUrl" :video-img="currentImg" @closeVideo="closeVideo" :show-video="showVideo"></video-play>
        <blank-page v-if="list.length === 0 "></blank-page>
    </div>
</template>

<script>
    import videoPlay from '@/components/videoPlay.vue'
    import blankPage from '@/components/blankPage.vue'

    export default {
        name: "three-col",
        components:{
            videoPlay,
            blankPage
        },
        props:{
            list:{
                type:Array,
                default:[]
            }
        },
        data(){
            return {
                showVideo: false,
                currentImg:'',
                currentType:'',
                currentUrl:''
            }
        },
        methods:{
            // 点击播放花絮视频
            playVideo(item){
                console.log(item)
                this.currentImg = item.imgUrl;
                this.currentType = item.videoType;
                this.currentUrl = item.videoUrl;
                this.showVideo = true;
            },
            // 关闭视频
            closeVideo(){
                this.showVideo = false
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../less/common";
    .show_list{
        width: 100%;
        font-size:0;
        margin-top: 27px;
        li{
            width:400px;
            height: 300px;
            font-size:18px;
            margin-left: 30px;
            position: relative;
            color: @c-white;
            display: inline-block;
            margin-bottom: 20px;
            overflow: hidden;
            img{
                width:400px;
                height: 300px;
            }
            p{
                position: absolute;
                bottom:1px;
                left: 1px;
                width: 100%;
                height: 44px;
                line-height: 44px;
                padding:0 15px;
                text-align: left;
            }
        }
        li:nth-of-type(3n+1){
            margin-left:0;
        }
    }
</style>
