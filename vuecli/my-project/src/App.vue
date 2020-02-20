<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/MyPage">MyPage</router-link> |
      <router-link to="/ParentPage">Parent</router-link> |
      <router-link to="/home">返回首页</router-link> |
      <span @click="routerhander">编程式导航</span>
    </div>
    <div class="posi">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    
    
  </div>
</template>
<script>
export default {
  methods:{
    routerhander(){
      this.$router.push('MyPage')
    }
  }
}
</script>
<style scoped>
.posi{
  position: relative;
}
.fade-enter{
  transform: translateX(100%)
}
.fade-enter-active{
  transition: all 1s ease;
  top: 0;
  position: absolute;
  width: 100%;
}
.fade-enter-to{
  transform: translateX(0)
}
.fade-leave{
  transform: translateX()
}
.fade-leave-active{
  transition: all 1s ease;
  top: 0;
  position: absolute;
  width: 100%;
}
.fade-leave-to{
  transform: translateX(-100%)
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
