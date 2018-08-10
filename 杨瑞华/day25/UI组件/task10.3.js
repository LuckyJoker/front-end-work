/*定义变量
var button=document.getElementById("button");
var box=document.getElementById("box");
var cover=document.getElementById("cover");
/*按钮弹出弹框事件*/
button.addEventListener('click', function () {
    box.style.display = "block";
    box.style.background = "#fff";
    cover.style.background = "#aaa";
    if (cover.style.background = "#aaa") {
        cover.onclick = function () {
          box.style.display = "none";
           cover.style.backgroundColor = "#fff";
           button.style.backgroundColor = "#fff";
        }
    }
},false);
/*确定按钮事件*/
document.getElementById("button1").addEventListener('click' ,function () {
    alert("你已经点击确定");
   box.style.display = "none";
   cover.style.backgroundColor = "#fff";
    button.style.backgroundColor = "#fff";
},false);
/*取消按钮事件*/
document.getElementById("button2").addEventListener('click' ,function () {
    alert("你已经点击取消");
   box.style.display = "none";
   cover.style.backgroundColor = "#fff";
    button.style.backgroundColor = "#fff";
},false);