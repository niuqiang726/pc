//1.获取要操作的元素
var $box=$('#box');
var $banner=$('#banner');
var $aImg=$banner.find('img');
var $ul=$box.find('ul');
var $aLis=$ul.find('li');
console.log($aLis)
var n=0;//记录初始的位置
var timer=null;

// 2.自动轮播

timer=setInterval(autoMove,2000);

function autoMove() {
    // 边界值得判断，如果n>=图片的最后一张的下表的时候，我们设置他的下标等于0
    if(n>=$aImg.length-1){
        n=0;
        // 设置banner 的left 值
        $banner.css('left',0);
    }
    n++;
    $banner.animate({'left':-n*1920},800);
    bindTip();
}

//3.焦点自动播放

function bindTip() {
    var temp=(n>=$aImg.length-1?0:n);
    $.each($aLis,function (index, item) {
        item.className=index===temp?'on':null;
    });
}

//// 4.鼠标移入停止运动，同时 左右按钮要显示 鼠标移出继续运动，同时左右按钮要隐藏

$box.mouseover(function () {
    clearInterval(timer);
    //$btnLeft.show();
    //$btnRight.show();
});

$box.mouseout(function () {
    timer=setInterval(autoMove,2000);
    //$btnLeft.hide();
    //$btnRight.hide();
});

// 5.手动切换焦点
handleChange();
function handleChange() {
    $.each($aLis,function (index, item) {
        $(item).click(function () {
            n=$(this).index();
            //alert(n)
            $banner.animate({'left':-n*1920},800);
            bindTip();
        })
    })
}

// 6.点击左右按钮进行切换
//
//$btnRight.click(function () {
//    autoMove();
//});
//
//$btnLeft.click(function () {
//    // 边界的判断，一定要放在n-- 前面，否则一进来就点击左侧按钮的话，运动到最后一张就和第一张一模一样，这样看到不运动的效果
//    if(n<=0){
//        n=$aImg.length-1;
//        $banner.css('left',-n*1920);
//    }
//    n--;
//    $banner.animate({'left':-n*1920},800);
//    bindTip();
//});


$(function(){
    $('.hovertreebox li').mouseover(function (e) {
        $(this).siblings().stop().fadeTo(500,0.5);
    });
    $('.hover'+'treebox li').mouseout(function (e) {
        $(this).siblings().stop().fadeTo(500,1);
    });
})



//返回顶部
var oDiv=document.getElementsByClassName('returnTop')[0];
oDiv.onclick=function () {
    var target=document.documentElement.scrollTop||document.body.scrollTop;
    console.log(target);
    var duration=500; //总时间                               吗
    var interval=300; // 频率
    // 求出步长：
    var step=target/duration*interval;
    var timer=setInterval(function () {
        // 获取的当前最新的位置 距离   顶部的距离
        var currentTop=document.documentElement.scrollTop||document.body.scrollTop;
        console.log(currentTop);
        // 如果此时已经到达顶部，我们就不需要让定时器继续走
        if(currentTop<=0){
            clearInterval(timer);
        }
        currentTop-=step;
        console.log(currentTop);
        // 没走一步  就需要重新设置下当前的scrollTop
        document.documentElement.scrollTop=document.body.scrollTop=currentTop;
    },interval);
}
/////////////////////////////////////////////

