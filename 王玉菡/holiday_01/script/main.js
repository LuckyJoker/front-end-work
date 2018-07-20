window.onload = function () {
    var myTab = document.getElementById("tab");    //整个div
    var myUl = myTab.getElementsByTagName("ul")[0];//一个节点
    var myLi = myUl.getElementsByTagName("li");    //数组
    var myDiv = myTab.getElementsByTagName("div"); //数组

  for (let i = 0; i < myLi.length; i++) {
    myLi[i].index = i;
    myLi[i].onclick = function () {
      for (let j = 0; j < myLi.length; j++) {
        myLi[j].className = 'off';
        myDiv[j].className = 'hide';
      }
      this.className = 'on';
      myDiv[this.index].className = 'show';
    };
  }
}
;