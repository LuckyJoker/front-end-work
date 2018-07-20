let timer = null;
back.onclick = function () {
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(function fn() {
    let oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = oTop - 200;
      timer = requestAnimationFrame(fn);
    }else {
      cancelAnimationFrame(timer);
    }
  });
};
