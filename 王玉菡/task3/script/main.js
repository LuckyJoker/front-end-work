window.onload = function () {
    function showTime() {
        let now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();
        var arr = new Array();
        /*
        *设置几个变化时可随机选择的颜色
        */
        arr.push('#EED2EE');
        arr.push('#E0EEEE');
        arr.push('#71C671');
        arr.push('#EECBAD');
        arr.push('#6CA6CD');
        arr.push('#E9967A');
        /*
        *设置显示格式
        */
        if (second < 10) {
            second = '0' + second;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
        let index = parseInt(Math.random() * arr.length);
        document.querySelector('#time').innerHTML = `${hour}:${minute}:${second}`;
        document.body.style.backgroundColor = arr[index];
    }

    setInterval(showTime,1000);
}
