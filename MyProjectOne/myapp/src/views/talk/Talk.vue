<template>
  <div>
    <div class="form-bar">
      <input v-model="inpVal" type="text" placeholder="请输入您的问题">
      <button @click="sendMes">发送</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import md5 from 'md5';
export default {
  data() {
    return {
      inpVal:""
    };
  },
  methods: {
    //生成时间戳
    getTimeStamp(){
      let timer = new Date();
      timer = Date.parse(timer);
      timer = timer.toString().substr(0,10);
      timer = Number.parseInt(timer);
      return timer;
    },
    //生成16进制随机字符串
    getNonceStr(){
      let str = Math.random();
      str = str.toString(16);
      str = str.substr(2);
      return str;
    },
    //生成签名
    getSign(obj){
      //第一步将<key, value>请求参数对按key进行字典升序排序，得到有序的参数对列表N
      let arr = Object.keys(obj).sort();
      //第二部 对排列后的对象进行url格式拼接
      let str = "";
      arr.map(function(val){
        str += `${val}=${encodeURI(obj[val])}&` 
      })
      //第三步 将应用密钥以app_key为键名，组成URL键值拼接到字符串T末尾
      str += "app_key=8DP8bSZueZaxF4zt"
      //第四步 对字符串进行MD5运算，将得到的MD5值所有字符转换成大写
      str = md5(str).toUpperCase();
      // 第五步返回结果
      return str;
    },

    //发送请求
    sendMes(){
      let birdUrl = "https://bird.ioliu.cn/v2?url=";
      let thisUrl = "https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat";
      let params = {
        app_id:2128648485,
        time_stamp:this.getTimeStamp(),
        nonce_str:this.getNonceStr(),
        session:"10000",
        question:this.inpVal
      }
      let sign = this.getSign(params);
      params.sign = sign;

      axios.get(birdUrl+thisUrl,{
        params
      }).then((res)=>{
        console.log(res)
      })
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
.form-bar{
  position: fixed;
  bottom: 1rem;
  text-align: center;
  width: 100%;
  height: 1rem;
  background-color: #eee;
  line-height: 0.5rem;
}
.form-bar input{
  width: 70%;
  height: 0.5rem;
}
.form-bar button{
  background-color: green;
  padding:8px;
}
</style>