function getData() {
    var sourceList = document.querySelector("#source");
    var list = sourceList.querySelectorAll("li");
    var a = [] ;
    var data = new Array();
    for (var i = 0; i < list.length; i++) {
        data[i] = new Array(2);
        a.push(list[i].innerText);
        var temp = a[i].split("空气质量：");
        data[i][0] = temp[0];
        data[i][1] = temp[1];
    }
    return data;
}

/*
function getData() {
    var sourceList = document.querySelector("#source");
    var list = sourceList.querySelectorAll("li");
    var data = new Array();
    for (var i = 0; i < list.length; i++) {
        var city = list[i].innerHTML.substr(0, 2);
        var num = list[i].lastChild.innerHTML;
        data.push([city, num]);
    }
    return data;
}
*/

function sortData(data) {
    return data.sort(function (a, b) {
        return a[1] - b[1];
    })
}

function outPutAir(data) {
    var p = document.createElement("p");
    p.innerHTML = "城市空气质量排名：</br>";
    var element = document.getElementById("resort");
    element.appendChild(p);
    for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = "第" + (i + 1) + "名: " + data[i][0] + " --- ";
        var b = document.createElement("b");
        b.innerHTML = data[i][1];
        li.appendChild(b);
        element.appendChild(li);
    }
}

function start() {
    var Data = getData();
    Data = sortData(Data);
    outPutAir(Data);
}