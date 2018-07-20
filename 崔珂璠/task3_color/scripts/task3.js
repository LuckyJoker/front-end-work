var Time = document.getElementById("time");
var d=new Date();
Time.innerHTML=d.toLocaleTimeString();
var r=parseInt(Math.random()*255);
var g=parseInt(Math.random()*255);
var b=parseInt(Math.random()*255);
var color=r.toString(16)+g.toString(16)+b.toString(16);
document.body.style.backgroundColor="#"+color;