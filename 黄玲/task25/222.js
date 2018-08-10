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
//定义全局变量，棋子开始是由第一行（x），第一列（y）开始，初始方向（direction控制）为朝右，每个格子50x50,sum控制旋转方向
var x = 50,y = 50,direction = 1,sum = 0;  
//全局变量方便使用             
var selectedBox = document.getElementById("selected-box");       
//前进GO函数
function boxGO(){                     
    if(direction == 1 || direction == -3){ //direction为1或-3时，朝右
        traRight();
    }
    if(direction == 2 || direction == -2){  //direction为2或-2时，朝下
        traBottom();
    }
    if(direction == 3 || direction == -1){  //direction为3或-1时，朝左
        traLeft();
    }
    if(direction == 0){  //direction为0时，朝上
        traTop();
    }
}
//左转-1求余，可正可负
function turnLeft(){
    direction = (direction - 1)%4; //左转-1求余，可正可负
    sum -= 1;
    selectedBox.style.transform = "rotate("+ 90*sum + "deg)";
}
//右转+1求余，可正可负
function turnRight(){
    direction = (direction + 1)%4;
    sum += 1;
    selectedBox.style.transform = "rotate("+ 90*sum + "deg)";
}
//转180，+2求余，可正可负
function turnBac(){
    direction = (direction + 2)%4;
    sum += 2;
    selectedBox.style.transform = "rotate("+ 90*sum + "deg)";
}
//使屏幕的下面移动一格，方向不变
function traBottom(){
    if(y < 500){                  //是否到达下边界
        y += 50;
        selectedBox.style.top = y + "px";       //设置棋子位置
    }else{
        alert("已达到下边界");                    //否则，警告,返回错误
        return false;
    }
    return true;
}
//使屏幕的左侧移动一格，方向不变
function traLeft(){
    if(x > 50){                    //是否到达左边界
        x -= 50;
        selectedBox.style.left = x + "px";          //设置棋子位置
    }else{
        alert("已达到左边界");
        return false;                           //否则，警告,返回错误
    }
    return true;
}
//使屏幕的右侧移动一格，方向不变
function traRight(){
    if(x < 500){                       //是否到达右边界
        x += 50;
        selectedBox.style.left = x + "px";       //设置棋子位置
    }else{
        alert("已达到右边界");               //否则，警告
        return false;
    }
    return true;
}
//使屏幕的上边移动一格，方向不变
function traTop(){
    if(y > 50){                     //是否到达上边界
        y -= 50;
        selectedBox.style.top = y + "px";        //设置棋子位置
    }else{
        alert("已达到上边界");       //否则，警告
        return false;      //不能再移动，返回false
    }
    return true;
}
//在转向其正确方向时，都采用右转的方式
//实现方向转向屏幕左侧，并向屏幕的左侧移动一格
function moveLeft(){
    if(traLeft()){        //先判断是否能向左，能则继续
        while(direction !== -1 && direction !== 3){          //向右转直到方向向左
            direction = (direction + 1)%4;
            sum += 1;            //度数统计
        }
        selectedBox.style.transform = "rotate("+ 90*sum + "deg)";
    }
   
}
//实现方向转向屏幕下面，并向屏幕的下面移动一格
function moveBottom(){
    if(traBottom()){       //先判断是否能向下移，能则继续
        while(direction !== -2 && direction !== 2){         //向右转直到方向向下
            direction = (direction + 1)%4;
            sum += 1;
        }
        selectedBox.style.transform = "rotate("+ 90*sum + "deg)";
    }
   
}
//实现方向转向屏幕右侧，并向屏幕的右侧移动一格
function moveRight(){
    if(traRight()){             //先判断是否能向右移，能则继续
        while(direction !== -3 && direction !== 1){        //向右转直到方向向右
            direction = (direction + 1)%4;
            sum += 1;
        }
        selectedBox.style.transform = "rotate("+ 90*sum + "deg)";
    }
   
}
//实现方向转向屏幕上面，并向屏幕的上面移动一格
function moveTop(){
    if(traTop()){                 //先判断是否能向上移，能则继续
        while(direction !== 0){           //向右转直到方向向上
            direction = (direction + 1)%4;
            sum += 1;
        }
        selectedBox.style.transform = "rotate("+ 90*sum + "deg)";
    }
    
}
//点击执行按钮时的函数
function changeBox(){
    var button = document.getElementById("text-input").value; //获得输入框值
    switch (button){
        case "GO":    boxGO();   break;      //若为GO，执行前进函数
        case "TUN LEF":  turnLeft();   break;     //若为TUN LEF，执行左转函数
        case "TUN RIG":  turnRight();   break;     //若为TUN GIR，执行右转函数
        case "TUN BAC":  turnBac();   break;     //若为TUN BAC，执行180转函数
        case "TRA LEF":  traLeft();   break;      //执行函数使屏幕的左侧移动一格，方向不变
        case "TRA TOP":  traTop();   break;      //执行函数使屏幕的上面移动一格，方向不变
        case "TRA RIG":  traRight();   break;      //执行函数使屏幕的右侧移动一格，方向不变
        case "TRA BOT":  traBottom();   break;      //执行函数使屏幕的下面移动一格，方向不变
        case "MOV LEF":  moveLeft();   break;      //执行moveleft函数，实现方向转向屏幕左侧，并向屏幕的左侧移动一格
        case "MOV TOP":  moveTop();   break;      //执行moveTop函数，实现方向转向屏幕上面，并向屏幕的上面移动一格
        case "MOV RIG":  moveRight();   break;      //执行moveRight函数，实现方向转向屏幕右侧，并向屏幕的右侧移动一格
        case "MOV BOT":  moveBottom();   break;      //执行moveBottom函数，实现方向转向屏幕下面，并向屏幕的下面移动一格
        default: alert("请输入正确的指令！"); break;     //否则，警告
    }
}