<template>
    <div id="app">
        <header-bar></header-bar>
        <router-view/>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
    import headerBar from './components/headerBar.vue'
    import footerBar from './components/footerBar.vue'
    export default {
        name: 'App',
        components: {
            headerBar,
            footerBar
        },
        data() {
            return {
                showsearch: false,
                showLoad: true
            }
        },
        created() {
            setTimeout(() => {
                this.showLoad = false;
            }, 2000)
        },

    }
</script>

<style lang="less">
    #app {
        width: 100%;
        height: 100%;
    }
</style>
