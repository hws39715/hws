<!--  -->
<template>
  <div v-bind:class="['container',activeType]">
    <header>
      <span>首页</span>
      <p>剧集</p>
    </header>
    <nav>
      <ul>
        <li v-for="item in navList" v-bind:key="item.id" @click="goPage(item)">{{item.title}}</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    goPage(item) {
      if (this.activeType != item.name) {
        this.$router.push("item.path")
        sessionStorage.setItem("activeNav", item.name)
        this.activeType = item.name;
      }
    }
  },
  data() {
    return {
      activeType: "tvplay",
      navList: [
        {
          id: 1001,
          title: "剧集",
          path: "/",
          name: "typlay"
        },
        {
          id: 1002,
          title: "音乐",
          path: "/music",
          name: "music"
        },
        {
          id: 1003,
          title: "书籍",
          path: "/book",
          name: "book"
        },
        {
          id: 1004,
          title: "聊天",
          path: "/talk",
          name: "talk"
        }
      ]
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.activeType = sessionStorage.getItem("activeNav");
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* @import url(); 引入css类 */
header,
nav {
  height: 1rem;
  background-color: blue;
  color: #666;
  position: fixed;
  width: 100%;
}
header {
  top: 0;
}
nav {
  bottom: 0;
}
nav ul {
  display: flex;
  align-items: center;
  height: 1rem;
}
nav li {
  font-size: 0.5rem;
  flex-grow: 1;
  text-align: center;
}
header span {
  font-size: 0.3rem;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}
header p {
  font-size: 0.7rem;
  text-align: center;
}

.tvplay header,
.movie nav {
  background-color: rgb(33, 150, 243);
}
.music header,
.music nav {
  background-color: rgb(0, 150, 136);
}
.book header,
.book nav {
  background-color: rgb(121, 85, 72);
}
.talk header,
.talk nav {
  background-color: rgb(63, 81, 181);
}
</style>