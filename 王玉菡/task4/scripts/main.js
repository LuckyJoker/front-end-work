/*
 *获取城市名称以及空气质量指数
 */
function getData() {
    var data = [];
    //获取ul中的各个li元素
    var list = document.getElementById("source").childNodes;
    for (var i = 0; i < list.length; i++) {
        if (list[i].innerHTML != undefined) {
            var city = list[i].innerHTML.substring(0, 2);
            var num = list[i].childNodes[1].innerHTML;
            data.push([city, num]);
        }
    }
    return data;
}

/*
 *排序函数
 */
function sortData(data) {
    return data.sort(function (x, y) {
        return y[1] - x[1];
    })
}

/*
 *显示排名
 */
function render(data) {
    var chineseRank = ["一", "二", "三", "四", "五", "六", "七"];
    for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = "第" + chineseRank[i] + "名：" + data[i][0] + "空气质量：";
        var b = document.createElement("b");
        b.innerHTML = data[i][1];
        li.appendChild(b);

        var element = document.getElementById("resort");
        element.appendChild(li);
    }
}

function Handle() {
    var contentData = getData();
    contentData = sortData(contentData);
    render(contentData);
}

function init() {
    document.getElementById("sort-btn").onclick = function () {
        Handle();
    }
}

init();