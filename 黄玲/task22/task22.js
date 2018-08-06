function initChessboard(){            //棋盘初始化
    var table = document.getElementById("chessBoard");
    var inner = "";
    for(var i = 0;i < 11;i++){            //tr
        inner += "<tr>";
        if(i == 0){                        //第一行为数字
            for(var j = 0;j < 11;j++){
                if(j ==0){             //首格为空
                    inner += "<td></td>";
                }
                else{                  //后依次输入数字
                    inner += "<td>"+j+"</td>";
                }
            }
        }else{                         //其他行则正常输入
            for(var j = 0;j < 11;j++){
                if(j == 0){           //第一列也为数字
                    inner += "<td>" +i+ "</td>";
                }else{
                    inner +="<td></td>";
                }
            }
        }
        inner += "</tr>";       //tr标签闭合
    }
    table.innerHTML = inner;                //初始化完成
}
initChessboard();                //使用初始化函数
//定义全局变量，棋子开始是由第一行（x），第一列（y）开始，初始方向（direction控制）为朝右，每个格子50x50
var x = 50,y = 50,direction = 1;  
//全局变量方便使用             
var selectedBox = document.getElementById("selected-box");       
//前进GO函数
function boxGO(){                     
    if(direction == 1 || direction == -3){ //direction为1或-3时，朝右
        if(x < 500){                       //是否到达右边界
            x += 50;
            selectedBox.style.left = x + "px";       //设置棋子位置
        }else{
            alert("已达到右边界");               //否则，警告
        }
    }
    if(direction == 2 || direction == -2){  //direction为2或-2时，朝下
        if(y < 500){                  //是否到达下边界
            y += 50;
            selectedBox.style.top = y + "px";       //设置棋子位置
        }else{
            alert("已达到下边界");
        }
    }
    if(direction == 3 || direction == -1){  //direction为3或-1时，朝左
        if(x > 50){
            x -= 50;
            selectedBox.style.left = x + "px";
        }else{
            alert("已达到左边界");
        }
    }
    if(direction == 0){  //direction为0时，朝上
        if(y > 50){
            y -= 50;
            selectedBox.style.top = y + "px";
        }else{
            alert("已达到上边界");
        }
    }
}
//左转-1求余，可正可负
function turnLeft(){
    direction = (direction - 1)%4; //左转-1求余，可正可负
}
//右转+1求余，可正可负
function turnRight(){
    direction = (direction + 1)%4;
}
//转180，+2求余，可正可负
function turnBac(){
    direction = (direction + 2)%4;
}
//点击执行按钮时的函数
function changeBox(){
    var button = document.getElementById("text-input").value; //获得输入框值
    if(button == "GO"){     //若为GO，执行前进函数
        boxGO();
    }else if(button == "TUN LEF"){      //若为TUN LEF，执行左转函数
        turnLeft();
    }else if(button == "TUN RIG"){      //若为TUN GIR，执行右转函数
        turnRight();
    }else if(button == "TUN BAC"){      //若为TUN BAC，执行180转函数
        turnBac();
    }else{                              //否则，警告
        alert("请输入正确的指令！");
    }
    if(direction == 1 || direction == -3){          //direction为1或-3时，设置棋子蓝色方向朝右
        selectedBox.style.borderWidth = "0px";
        selectedBox.style.borderRight = "10px solid blue";
    }
    if(direction == 2 || direction == -2){            //direction为2或-2时，设置棋子蓝色方向朝下
        selectedBox.style.borderWidth = "0px";
        selectedBox.style.borderBottom = "10px solid blue";
    }
    if(direction == 3 || direction == -1){             //direction为-1或3时，设置棋子蓝色方向朝左
        selectedBox.style.borderWidth = "0px";
        selectedBox.style.borderLeft = "10px solid blue";
    }
    if(direction == 0){                                  //direction为0时，设置棋子蓝色方向朝上
        selectedBox.style.borderWidth = "0px";
        selectedBox.style.borderTop = "10px solid blue";
    }
    
}