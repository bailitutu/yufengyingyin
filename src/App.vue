<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
    <navitem></navitem>
    <SearchItem></SearchItem>
    <myfooter></myfooter>
    <load v-bind:showLoad="showLoad"></load>
  </div>
</template>

<script>
import myheader from './pages/Header.vue'
import navitem from './pages/NavItem.vue'
import SearchItem from './pages/SearchItem.vue'
import myfooter from './pages/Footer.vue'
import load from './pages/load.vue'

export default {
  name: 'App',
  components: {
    myheader,
    navitem,
    SearchItem,
    myfooter,
    load
  },
  data(){
    return {
      showsearch:false,
      showLoad:true
    }
  },
  created(){
    setTimeout(()=>{
      this.showLoad = false;
    },2000)
  },

}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
