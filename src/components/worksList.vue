<template>
    <div class="works_item">
        <div class="works_recommend">
            <div class="rec_left fl">
                <img src="../assets/1.png" class="w-f h-f" alt="">
            </div>
            <div class="rec_right fl">
                <div class="rec_cell">
                    <img src="../assets/2.png" class="w-f h-f" alt="">
                </div>
                <div class="rec_cell">
                    <img src="../assets/3.png" class="w-f h-f"  alt="">
                </div>
            </div>
        </div>
        <ul class="works_list">
            <li>
                <img src="../assets/3.png" class="w-f h-f"  alt="">
            </li>
            <li>
                <img src="../assets/3.png" class="w-f h-f"  alt="">
            </li>
            <li>
                <img src="../assets/3.png" class="w-f h-f"  alt="">
            </li>
            <li>
                <img src="../assets/3.png" class="w-f h-f"  alt="">
            </li>
            <li>
                <img src="../assets/3.png" class="w-f h-f"  alt="">
            </li>
            <li>
                <img src="../assets/3.png" class="w-f h-f"  alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "works-list"
    }
</script>
<style lang="less" scoped>
    @import "../less/common.less";
    .works_item {
        width: 100%;
        margin-top: 30px;
        .works_recommend {
            height: 360px;
            width: 100%;
            overflow: hidden;
            .rec_left {
                width: 850px;
                height: 360px;
            }
            .rec_right {
                width: 350px;
                height: 350px;
                margin-left: 28px;
                .rec_cell {
                    width: 100%;
                    height: 175px;
                }
                .rec_cell:first-child {
                    margin-bottom: 10px;
                }
            }
        }

        .works_list {
            width: 100%;
            font-size: 0;
            margin-top: 33px;
            li {
                width: 300px;
                height: 400px;
                font-size: 18px;
                margin-left: 10px;
                position: relative;
                display: inline-block;
                margin-bottom: 10px;
                overflow: hidden;
            }
            li:nth-of-type(4n+1) {
                margin-left: 0;
            }

        }

    }

</style>
