<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <Navagation></Navagation>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navagation from '@/components/Navagation.vue'
export default {
  components:{
    Navagation,
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}

body{
  padding: 1rem 0;
}
</style>
