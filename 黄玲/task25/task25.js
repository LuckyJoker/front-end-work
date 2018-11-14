
//显示浮出框
function showBox(){
    var cover = document.getElementById("cover");
    var box = document.getElementById("float-box");
    box.style.display = "flex";
    cover.style.display = "block";
}
//隐藏浮出框
function hiddenBox(){
    var cover = document.getElementById("cover");
    var box = document.getElementById("float-box");
    box.style.display = "none";
    cover.style.display = "none";
}
function init(){
    var button = document.getElementById("floatBox-button");     //按钮
    var confirm = document.getElementById("confirm");            //浮出框确认键
    var cancle = document.getElementById("cancle");         //浮出框取消键
    var cover = document.getElementById("cover");           //浮出框出现时的背景
    
    if(button.addEventListener){
        button.addEventListener("click",showBox,false);
    }
    if(confirm.addEventListener){
        confirm.addEventListener("click",hiddenBox,false);
    }
    if(cancle.addEventListener){
        cancle.addEventListener("click",hiddenBox,false);
    }
    if(cover.addEventListener){
        cover.addEventListener("click",hiddenBox,false);
    }
}
init();