<template>
    <div class="w-f h-f" id="container"></div>
</template>

<script>
    export default {
        name: "create-map",
        data(){
            return{

            }
        },
        mounted(){
            this.createMap();
        },
        methods:{
            createMap(){
                var map = new BMap.Map("container");
                var point = new BMap.Point(116.404, 39.915);
                map.centerAndZoom(point, 15);
                window.setTimeout(function(){
                    map.panTo(new BMap.Point(116.409, 39.918));
                }, 2000);
            }
        }
    }
</script>

<style scoped>

</style>
