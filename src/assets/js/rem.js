class Rem {

    constructor() {
        this.render();
    }

    render() {
        var SCREENTYPE = 'orientationchange' in window ? 'orientationchange' : 'resize';
        var DEFINENUMBER = 10; // 假设设计图大小 640px  字体大小 64px   DEFINENUMBER就是比例

        function setView() {
            var html = document.documentElement;
            var width = html.clientWidth;
            if (html.clientWidth > 720) {
                width = 720;
            } else if (html.clientWidth < 320) {
                width = 320;
            }

            html.style.fontSize = width/DEFINENUMBER +"px";
            return setView;
        }

        window.addEventListener(SCREENTYPE,setView());
        // document.addEventListener('touchstart',function (event) {
        //     if (event.touches.length>1){
        //         event.preventDefault();
        //     }
        // })
        //
        // var lastTouchEnd =0;
        // document.addEventListener('touchend',function (event) {
        //     var now = new Date().getTime();
        //     if (now - lastTouchEnd<=300){
        //         event.preventDefault();
        //     }
        //     lastTouchEnd = now;
        //
        // },false)


    }
}

export default Rem;