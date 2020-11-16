// <!--崩溃欺骗-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr('href', "/img/failure.png");
        document.title = '(●—●)喔哟，崩溃啦！';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="shortcut icon"]').attr('href', "/img/favicon.png");
        document.title = '(/≧▽≦/)噫? 又好了! ';
        // titleTime = setTimeout(function () {
        //     document.title = '🤔 啊来来! 原标题是啥来着?  ';
        // }, 2000);
		
		// titleTime = setTimeout(function () {
        //     document.title = '😮哦~! 想起来了!  ';
        // }, 4000);
		
		titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 6000);
    }
});