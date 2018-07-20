function getData() {
    var source=document.getElementById("source");
    var cities=source.getElementsByTagName("li");
    var data=new Array();
    for(var i=0;i<cities.length;i++){
       data[i]=new Array();
       data[i][0]=cities[i].innerHTML.substring(0,cities[i].innerHTML.indexOf("空"));
       var b=cities[i].getElementsByTagName("b");
       data[i].push(parseInt(b[0].innerHTML));
    }
     return data;
}
 
function sortAqiData(data) {
    data.sort(function(a,b){
      return a[1]-b[1];
    });
    return data;
}

function render(data) {
    var resort=document.getElementById("resort");
    var arr=["一","二","三","四","五","六","七"];
    var str="";
    for(var i=0;i<data.length;i++){
      str+="<li>第"+arr[i]+"名:"+data[i][0]+"空气质量：<b>"+data[i][1]+"</b></li>";
    }
    resort.innerHTML=str;
}

function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
}

function init() {
    document.getElementById("sort-btn").onclick=btnHandle;
}
init();