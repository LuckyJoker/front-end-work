function showTime() {
    var date = new Date(); //创建对象  
    var y = date.getFullYear(); //获取年份  
    var m = date.getMonth() + 1; //获取月份   
    var d = date.getDate(); // 获取日  
    var w = date.getDay(); //获取星期几
    var h = date.getHours();
    var minute = date.getMinutes()
    var s = date.getSeconds();

    m = checkTime(m);
    d = checkTime(d);
    minute = checkTime(minute);
    s = checkTime(s);

    if (w == 0) {
        w = "Sunday";
    } else if (w == 1) {
        w = "Monday";
    } else if (w === 2) {
        w = "Tuesday";
    } else if (w == 3) {
        w = "Wednesday";
    } else if (w == 4) {
        w = "Thursday";
    } else if (w == 5) {
        w = "Friday";
    } else if (w == 6) {
        w = "Satday";
    }


    document.getElementById('now-time').innerHTML = y + "-" + m + "-" + d + "  " + w + "<br/>" + h + ":" + minute + ":" + s + "   ";

    setTimeout('showTime()', 1000); 

}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getRandomNum(s) {
    s = Math.floor(Math.random() * 100);
    setTimeout('getRandomNum()', 1000);
    return s;
}

function changeColor() {
    var s = getRandomNum(s);
    var r = s * 3 - 30;
    var g = s * 2 + 62;
    var b = s * 2 + 100;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    setTimeout('changeColor()', 1000);
}