<template>
    <div class="w-f h-f" id="container"></div>
</template>

<script>
    export default {
        name: "create-map",
        props:{
            lngPoint: {
                type:Number,
                // required: true, //是否必传
                default:116.409
            },

            latPoint: {
                type:Number,
                // required: true, //是否必传
                default: 39.918
            }
        },
        mounted(){
            this.createMap();
        },
        methods:{
            createMap(){
                var map = new BMap.Map("container");
                var point = new BMap.Point(this.lngPoint, this.latPoint);
                map.centerAndZoom(point, 15);
            }
        }
    }
</script>

<style scoped>

</style>
