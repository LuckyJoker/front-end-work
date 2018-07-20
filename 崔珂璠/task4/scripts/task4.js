var myButton=document.getElementById("sort-btn");
myButton.onclick=ul_resort;

function ul_resort(){
    var ul1=document.getElementById('source');
    var oli=ul1.getElementsByTagName('li');
    var b_arr=[];
    for(var i=0;i<oli.length;i++){
        b_arr[i]=[];
        b_arr[i][0]=oli[i].innerHTML.substring(0,oli[i].innerHTML.indexOf("空"));
        var b=oli[i].getElementsByTagName("b");
        b_arr[i].push(parseInt(b[0].innerHTML));
    }
    b_arr.sort(function(a,b){return b[1]-a[1]});
    var ul2=document.getElementById("resort");
    for(var i=0;i<b_arr.length;i++){
      var node = document.createElement("Li");
      node.innerHTML = "第"+(i+1)+"名："+b_arr[i][0]+"空气质量：<b>"+b_arr[i][1]+"</b>";
      ul2.appendChild(node);
    }
}

