<template>
    <div class="blank_page">
        <img src="../assets/blank_icon.png" alt="">
        <p>空空如也~</p>
    </div>
</template>

<script>
    export default {
        name: "blank-page"
    }
</script>

<style  scoped>
    .blank_page{
        width: 100%;
        height:auto;
        padding: 40px 0;
        text-align: center;
    }
    .blank_page img{
        width:200px;
        margin:0 auto;
        display: block;
    }

    .blank_page p{
        font-size:18px;
        color: #b0b0b0;
        text-align: center;
        margin-top: 30px;
    }
</style>
