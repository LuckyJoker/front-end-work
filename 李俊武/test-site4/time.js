    window.onload = function(){
     changeColor();
    }
    function changeColor(){
    var r = parseInt(Math.random() * 255);
    var g = parseInt(Math.random() * 255);
    var b = parseInt(Math.random() * 255);
    var colorHex = r.toString(16) + g.toString(16) + b.toString(16);
    document.body.bgColor = "#"+colorHex;
    window.setTimeout("changeColor()",1000);
    }
    function startTime()
    {
    var today=new Date()
    var h=today.getHours()
    var m=today.getMinutes()
    var s=today.getSeconds()
 
    m=checkTime(m)
    s=checkTime(s)
    document.getElementById('txt').innerHTML=h+":"+m+":"+s
    t=setTimeout('startTime()',500)
    }
 
    function checkTime(i)
    {
    if (i<10) 
    {i="0" + i}
    return i
    }