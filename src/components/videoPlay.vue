<template>

    <div class="videoPlayer" @click.stop.self="closeVideoFn" v-show="showVideo">
        <video-player  class="video-player vjs-custom-skin"
                       ref="videoPlayer"
                       :playsinline="true"
                       :options="playerOptions"
        ></video-player>
    </div>
</template>

<script>

    export default {
        name: "video-play",
        props:{
            videoType:String  ,
            videoUrl:String,
            videoImg:String,
            showVideo: Boolean,
            closeVideo:Function
        },
        data(){
            return{
                playerOptions:{
                    // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 是否循环。
                    preload: 'auto',
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type:'',
                        src:''
                    }],
                    poster:'',
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
        watch:{
            videoType(){
                this.playerOptions.sources[0].type = 'video/'+ this.videoType;
            },
            videoUrl(){
                this.playerOptions.sources[0].src = this.videoUrl;
            },
            videoImg(){
                this.playerOptions.poster = this.videoImg;
            }
        },
        methods:{
            closeVideoFn(){
                this.$refs.videoPlayer.player.pause();
                this.$emit('closeVideo',true)
            }
        }
    }
</script>
<style>
    .video-js  .vjs-big-play-button{
        position: absolute;
        top:50%;
        left:50%;
        margin-left:-50px;
        margin-top:-50px;
        width:100px;
        height:100px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        font-size:1rem;
        line-height: 1.2rem;
    }

</style>
<style lang="less" scoped>
    .videoPlayer{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        left:0;
        z-index: 1000;
        background: rgba(0,0,0,0.5);
        .video-player{
            width:1000px;
            height: 500px;
            position: absolute;
            top:50%;
            left:50%;
            z-index: 1000;
            margin-left:-500px;
            margin-top:-250px;
        }


    }
</style>
