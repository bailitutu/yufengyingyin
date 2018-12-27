<template>
    <div class="title">
        {{ text }}
    </div>
</template>

<script>
    export default {
        name: "section-title",
        props:[ 'text']
    }
</script>

<style lang="less" scoped>
    .title{
        font-size:30px;
        line-height: 42px;
    }
</style>
