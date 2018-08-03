在[js获取数值并插入](https://juejin.im/post/5b5aeaa3f265da0f62638839)的基础上加入一些限制条件
### part1
* 限制输入的数字在10-100
* 队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示
* 队列展现方式变化如图，直接用高度表示数字大小
* 实现一个简单的排序功能，如冒泡排序（不限制具体算法），用可视化的方法表达出来
***
* 左侧入：
    * 对输入字符判断是否符合要求
   * 若是，则读取ul *这里注意ul=document.getElementsByTagName("ul")[0]要有[0]*，
   * 判断ul子节点数 *ul.childElementCount*  是否不超过60
   * 若是，创建新的li,
   * 设置li的高度为"输入数字px",
   * 将li添加到ul开头
   
- 左侧出
    - rua 突然变简单了 (゜-゜)つロ /刚才看了[删除节点操作](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001435997163473d309006809fa43abbba322be3eb090a8000)
    - ul貌似跟其他标签不一样？ul比较特殊？非得加个[0]才行
    
- 排排序
    - 我一定要用快排>_<！！！
    - 嗯，又学了几遍快排，还学了一个方法，JavaScript有concat()方法用于连接两个或多个数组，该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
    - 打扰了。。还是直接用[sort()](http://www.w3school.com.cn/js/jsref_sort.asp)，真香.jpg
    - 
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>获取数值并插入</title>
    <style type="text/css">
    li{
        
        list-style: none;
        margin:10px;
        display: inline-block;
        background: red;
        padding:10px;
        color:#fff;
    }

    </style>
    <script type="text/javascript">
        var arr=[];
        function judge_input(num){
            
            if(num>=10&&num<=100){
                
                return true;   
            }
            else {
                alert("请输入范围在10~100的数字！");
                return false;
            }
        } 
        function left_in(){
            var num=document.getElementById('number').value;
            
            if(judge_input(num)){
            var ul=document.getElementsByTagName("ul")[0];
            if(ul.childElementCount>=60){
                alert("元素数量超过60了！！！");
            }
            else {
                var newli=document.createElement("li");
                newli.style.height=num+"px";
                ul.insertBefore(newli,ul.childNodes[0]);
            }
            }
            
        }
        function right_in(){
            var num=document.getElementById('number').value
            if(judge_input(num)){
                var ul=document.getElementsByTagName("ul")[0];
                if(ul.childElementCount>=60){
                    alert("元素数量超过60了！！！");
                }
                else {
                    var newli=document.createElement("li");
                    newli.style.height=num+"px";
                    ul.appendChild(newli);
            }
            }
        }
        function left_out(){
            arr.shift();
            var ul=document.getElementsByTagName("ul")[0];
            ul.removeChild(ul.children[0]);
        }
        function right_out(){
            arr.pop();
            var ul=document.getElementsByTagName("ul")[0];
            ul.removeChild(ul.children[ul.childElementCount-1]);
        }
          
        window.onload=function(){
            document.getElementById("sort").onclick=function(){
            var ul=document.getElementById("showNum");
            var ali=document.getElementsByTagName("li");
            var arr=[];

           //转数组
           for(var i=0;i<ali.length;i++){
               arr[i]=ali[i];
           }
           //排序
           arr.sort(function(li1,li2){
               return parseInt(li1.style.height)-parseInt(li2.style.height);
           });
           //重新载入
           for(var i=0;i<arr.length;i++){
               
               ul.appendChild(arr[i]);
           }
       }
        }
    </script>
</head>
<body>
        <input type="text" id="number" name="input" placeholder="请输入数值(范围10~100)"/>
        <input type="button" value="左侧入" id="left_in" onclick="left_in() " />
        <input type="button" value="右侧入" id="right_in" onclick="right_in()" />
        <input type="button" value="左侧出" id="left_out" onclick="left_out()" />
        <input type="button" value="右侧出" id="right_out" onclick="right_out()" />
        <input type="button" value="排序" id="sort" >
        <ul id="showNum">
           
        </ul>

</body> 
</html>
```
***
### part2
- 将新元素输入框从input改为textarea
- 允许一次批量输入多个内容，格式可以为数字、中文、英文等，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔
- 增加一个查询文本输入框，和一个查询按钮，当点击查询时，将查询词在各个元素内容中做模糊匹配，将匹配到的内容进行特殊标识，如文字颜色等。举例，内容中有abcd，查询词为ab或bc，则该内容需要标识
***
* input改为textarea ,easy, /textarea要加结束标签的
* 正则表达式split()方法把字符串分割后字符串是怎么存储的？每一段分别存到数组里。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>获取数值并插入</title>
    <style type="text/css">
    li{
        
        list-style: none;
        margin:10px;
        display: inline-block;
        background: red;
        padding:10px;
        color:#fff;
    }
    .select{
       color:blue;
    }
    </style>

</head>
<body>
        <textarea row="10" col="40" id="input" name="input"></textarea>
        
        <input type="button" value="左侧入" id="left_in" />
        <input type="button" value="右侧入" id="right_in"/>
        <input type="button" value="左侧出" id="left_out"/>
        <input type="button" value="右侧出" id="right_out"/>

        <input type="text" id="key-word" placeholder="请输入要查询的内容"/>
        <input type="button" value="查询" id="search" >

        <ul id="result">
        </ul>
<script>
    $=function(el){
        return document.querySelector(el);
    };
    var data=[];

    //匹配查询词,并用<span>进行标记
    function render(match){
        $("#result").innerHTML=
            data.map(function(d){
            /*map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
            map() 方法按照原始数组元素顺序依次处理元素。*/
                var r=d;
                if(match!=null&&match.length>0){
                    r=r.replace(new RegExp(match,"g"),"<span class='select'>"+match+"</span>");
                }
                return "<li>"+r+"</li>";
        }).join('');    
        //join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
    }
    
    function deal(func,succ){
        var args = [].slice.call(arguments,2);//arguments是类数组，此处将它转为数组
        return function(e){
            try{
                var arg=args.map(function(item){
                    return typeof item==="function"?item(e):item;
                });
                var result; 
                if(Object.prototype.toString.call(arg[0])==='[object Array]'){
                    arg[0].forEach(function(d){
                        result=func.apply(data,[d].concat(arg.slice(1)));
                    });
                }
                else{
                    result=func.apply(data,arg)
                }
                
                if(succ!=null){
                    succ(result);
                }
                }catch(ex){
                    if(ex.message!='')
                    alert(ex.message);
            }
            render();
        };
    }

    function getInputValue(){
        return $('#input').value.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/).filter(function(d){return d!='';});
        //以数组形式返回已经过处理的输入字符
    //---filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。 注意：filter() 不会对空数组进行检测。注意： filter() 不会改变原始数组。
    }

    function getClickIndex(e){
        var node=e.target;
        if(node.id=="result")throw new Error('');
        return [].indexOf.call(node.parentNode.children,node);
    }

    $('#left_in').onclick=deal([].unshift,null,getInputValue);
    $('#right_in').onclick=deal([].push,null,getInputValue);
    $('#left_out').onclick=deal([].shift,window.alert);
    $('#right_out').onclick+deal([].pop,window.alert);
    $('#result').onclick=deal([].splice,null,getClickIndex,1);
    $('#search').onclick=function(){
        render($('#key-word').value);
    }

</script>
</body> 
</html>
```
