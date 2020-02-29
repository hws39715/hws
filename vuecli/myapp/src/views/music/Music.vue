<template>
  <div>
    <div class="music-player">
      <aplayer
        :music="{
          title: '东西（Cover：林俊呈）',
          artist: '纳豆',
          src: 'https://cdn.moefe.org/music/mp3/thing.mp3',
          pic: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300'
        }"
      />
    </div>
  </div>
</template>

<script>
import aplayer from "vue-aplayer";
export default {
  components: {
    aplayer
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>