<template>
    <div class="w-f h-f" id="container"></div>
</template>

<script>
    export default {
        name: "create-map",
        props:['address'],
        mounted(){
            this.createMap();
        },
        watch:{
            address: {
                handler( val){
                    this.address = val;
                    this.createMap();
                    return ;
                },
                deep:true
            }
        },
        methods:{
            // 创建地图
            createMap(){
                this.map = new BMap.Map("container");
                this.point = new BMap.Point(116.404, 39.915);
                this.map.centerAndZoom(this.point, 12);
                this.local = new BMap.LocalSearch(this.map, {
                    renderOptions:{map: this.map}
                });
                this.local.search(this.address);
                this.local.setPageCapacity(1,1); //设置只显示第一个
            }
        }
    }
</script>

<style scoped>

</style>
