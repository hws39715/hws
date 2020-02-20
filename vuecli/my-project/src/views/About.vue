<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>vuex-count={{$store.state.count}}</h1>
    <h1>vuex-count={{$store.getters.newcount}}</h1>
    <button @click="addHander">add</button>
    <button @click="$store.commit('reduce')">reduce</button>
    <button @click="addAction">addAction</button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  methods:{
    addHander(){
      this.$store.commit("add")
    },
    ...mapActions(['addAction'])
  },
  // computed:{
  //   ...mapcount
  // }
}
</script>
