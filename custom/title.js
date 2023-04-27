var OriginTitle = document.title;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '╭(°A°`)╮ 你去哪了? 快回来!!!';
    }else {
        document.title = '(ฅ>ω<*ฅ) 你终于回来了 ~';
        setTimeout(function () {
            if(!document.hidden){
                document.title = OriginTitle;
            }
        }, 2000);
    }
});