const slideShowContainer = document.getElementById('slideShowContainer');
const pic = document.getElementById('picUl').getElementsByTagName('li');
const dot = document.getElementById('dotUl').getElementsByTagName('li');
const title = document.getElementById('titleDiv').getElementsByTagName('span');
let index = 0;
let timer = null;

function changePic(curIndex) {
  for (let i = 0; i < pic.length; i++) {
    pic[i].style.display = 'none';
    dot[i].className = 'unselected';
    title[i].className = 'hide';
  }
  pic[curIndex].style.display = 'block';
  dot[curIndex].className = 'selected';
  title[curIndex].className = 'show';
}

function autoPlay() {
  if (+index >= pic.length) {
    index = 0;
  }
  changePic(index);
  index++;
}

timer = setInterval(autoPlay, 1500);

slideShowContainer.onmouseover = function () {
  clearInterval(timer);
};

slideShowContainer.onmouseout = function () {
  timer = setInterval(autoPlay, 1500);
};

for (let i = 0; i < dot.length; i++) {
  dot[i].onmouseover = function () {
    clearInterval(timer);
    index = this.innerText - 1;
    changePic(index);
  };
}

window.onload = function () {
  const myUl = document.querySelectorAll('#tab > ul')[0];// 一个节点
  const myLi = myUl.getElementsByTagName('li'); // 数组
  const myDiv = document.querySelectorAll('#tab > div'); // 数组

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
