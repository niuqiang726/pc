//1.��ȡҪ������Ԫ��
var $box=$('#box');
var $banner=$('#banner');
var $aImg=$banner.find('img');
var $ul=$box.find('ul');
var $aLis=$ul.find('li');
console.log($aLis)
var n=0;//��¼��ʼ��λ��
var timer=null;

// 2.�Զ��ֲ�

timer=setInterval(autoMove,2000);

function autoMove() {
    // �߽�ֵ���жϣ����n>=ͼƬ�����һ�ŵ��±��ʱ���������������±����0
    if(n>=$aImg.length-1){
        n=0;
        // ����banner ��left ֵ
        $banner.css('left',0);
    }
    n++;
    $banner.animate({'left':-n*1920},800);
    bindTip();
}

//3.�����Զ�����

function bindTip() {
    var temp=(n>=$aImg.length-1?0:n);
    $.each($aLis,function (index, item) {
        item.className=index===temp?'on':null;
    });
}

//// 4.�������ֹͣ�˶���ͬʱ ���Ұ�ťҪ��ʾ ����Ƴ������˶���ͬʱ���Ұ�ťҪ����

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

// 5.�ֶ��л�����
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

// 6.������Ұ�ť�����л�
//
//$btnRight.click(function () {
//    autoMove();
//});
//
//$btnLeft.click(function () {
//    // �߽���жϣ�һ��Ҫ����n-- ǰ�棬����һ�����͵����ఴť�Ļ����˶������һ�žͺ͵�һ��һģһ���������������˶���Ч��
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



//���ض���
var oDiv=document.getElementsByClassName('returnTop')[0];
oDiv.onclick=function () {
    var target=document.documentElement.scrollTop||document.body.scrollTop;
    console.log(target);
    var duration=500; //��ʱ��                               ��
    var interval=300; // Ƶ��
    // ���������
    var step=target/duration*interval;
    var timer=setInterval(function () {
        // ��ȡ�ĵ�ǰ���µ�λ�� ����   �����ľ���
        var currentTop=document.documentElement.scrollTop||document.body.scrollTop;
        console.log(currentTop);
        // �����ʱ�Ѿ����ﶥ�������ǾͲ���Ҫ�ö�ʱ��������
        if(currentTop<=0){
            clearInterval(timer);
        }
        currentTop-=step;
        console.log(currentTop);
        // û��һ��  ����Ҫ���������µ�ǰ��scrollTop
        document.documentElement.scrollTop=document.body.scrollTop=currentTop;
    },interval);
}
/////////////////////////////////////////////

