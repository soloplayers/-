let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let div1 = document.querySelector("#div1");
let n = 0;
let str = `/*我是一个前端新人，
接下来我要加样式了*/
body{
  color:green;
}
/*然后我要准备一个div盒子
*/
#div1{
  border:1px solid red;
  width:400px;
  height:400px;
}
/*接下来我要做一个八卦图，看好了。
先将div盒子变成圆：*/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*然后将左右两边渐变成黑白色*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(9,9,121,1) 50%, rgba(0,0,0,1) 50%);
}
/*八卦图是一阴一阳，接下来我要准备一黑一白的两个小球*/
#div1::before{
  position:absolute;
  content:'';
  display:block;
  width:200px;
  height:200px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background-color:black;
  border-radius:50%;
}
#div1::after{
  position:absolute;
  content:'';
  display:block;
  width:200px;
  height:200px;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  background-color:white;
  border-radius:50%;
}
/*点缀两个黑球和白球*/
#div1::before{
  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(9,9,121,1) 25%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(9,9,121,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;

let str2 = "";
/* let timer = setInterval(() => {
  if (n <= 40) {
    demo.innerHTML = n;
    n += 1;
  } else {
    clearInterval(timer);
  }
}, 300);
 */

/* 
    1、八卦图高级写法：
    使用渐变CSS样式：Gradient CSS。设置左边右边50% ，黑白色即可

    2、直接使用伪元素代替额外生成的两个div盒子制作黑白的两个圆
    (注意伪元素默认生成样式是span类型，需要display:block)

    3、抠出白球和黑球：使用镜像渐变
 */
let step = () => {
  setTimeout(() => {
    /* 
      要判断换行符
      在HTML中换行符是<br>
      但又要避免一个字一个字的将<br>打印出来影响美观
    */
    if (str[n] === "\n") {
      str2 += "<br>";
    } else if (str[n] === " ") {
      // 注意在HTML中的空格为&nbsp---这里是为了解决空格和Tab缩进的问题
      str2 += "&nbsp";
    } else {
      str2 += str[n];
    }
    demo.innerHTML = str2;
    style.innerHTML = str.substring(0, n + 1);
    /* style也用同样的内容，不关于css的文字都先注释起来 */
    window.scrollTo(0, 9999);
    /* PC端滚动页面即可 */
    demo.scrollTo(0, 9999);
    /* 手机端滚动包装内容的盒子即可 */
    n += 1;
    if (n < str.length) {
      step();
    }
  }, 20);
};
step();
