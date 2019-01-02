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
                map.centerAndZoom(point, 12);
                var local = new BMap.LocalSearch(map, {
                    renderOptions:{map: map}
                });
                local.search("湖南省长沙市开福区北辰时代广场中信银行大厦");
                local.setPageCapacity(1,1); //设置只显示第一个
            }
        }
    }
</script>

<style scoped>

</style>
