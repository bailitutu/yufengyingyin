<template>
    <div class="sec">
        <div class="content" style="min-height:600px;">
            <section-title text="企业文化"></section-title>
            <div class="culture_detail">
                <p class="c-28">  面对日益激烈的市场竞争，山影制作创作团队坚持以人民为中心的创作导向，坚持出精品，出人才，出效益，捍卫“鲁剧品牌， 良心品质”的金字招牌，先后推出《闯关东》《大染坊》《琅琊榜》《伪装者》《马向阳下乡记》《温州一家人》《父母爱情》《北 平无战事》等优秀作品，不仅获得市场认可，更充分发挥了影视作品对社会的积极影响，成为鼓舞人心的精神力量。</p>
                <img src="../../assets/1.png" class="culture_img" alt="">
                <p class="c-28">  面对日益激烈的市场竞争，山影制作创作团队坚持以人民为中心的创作导向，坚持出精品，出人才，出效益，捍卫“鲁剧品牌， 良心品质”的金字招牌，先后推出《闯关东》《大染坊》《琅琊榜》《伪装者》《马向阳下乡记》《温州一家人》《父母爱情》《北 平无战事》等优秀作品，不仅获得市场认可，更充分发挥了影视作品对社会的积极影响，成为鼓舞人心的精神力量。</p>
                <img src="../../assets/1.png" class="culture_img" alt="">
                <p class="c-28"> 面对日益激烈的市场竞争，山影制作创作团队坚持以人民为中心的创作导向，坚持出精品，出人才，出效益，捍卫“鲁剧品牌， 良心品质”的金字招牌，先后推出《闯关东》《大染坊》《琅琊榜》《伪装者》《马向阳下乡记》《温州一家人》《父母爱情》《北 平无战事》等优秀作品，不仅获得市场认可，更充分发挥了影视作品对社会的积极影响，成为鼓舞人心的精神力量。</p>
            </div>
        </div>
    </div>
</template>

<script>
    import sectionTitle from '@/components/sectionTitle.vue'

    export default {
        name: "about-culture",
        components:{
            sectionTitle
        }
    }
</script>

<style lang="less" scoped>

    @import "../../less/common.less";
    .content{
        padding:45px 0;
    }
    .culture_detail{
        width: 100%;
        margin-top: 40px;
        p{
            font-size:18px;
            word-break: break-all;
            white-space: normal;
            text-indent:2em;
            line-height: 32px;
        }
        img.culture_img{
            max-width: 100%;
            margin:40px auto;
            display: block;
        }
    }
</style>
