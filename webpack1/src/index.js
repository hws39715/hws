import css from "./css/main.css"
import scss from "./style/test.scss"
// import $ from "jquery"

window.onload = function(){
  let str = "hello world!";
  let oDiv1 = document.getElementById("div1");
  console.log(oDiv1)
  let num = 100;
  console.log(num);
  oDiv1.innerText = str;
  $(".div3").text("hello world");
}
