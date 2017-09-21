$(function(){

	/* banner flash */
	$(".banner").slide({autoPlay:true});

	/* top map hover action */
	$(".js-map").hover(function(){
		$(this).children().show().stop().animate({left:50},500)
	},function(){
		$(this).children().stop().animate({left:70},500,function(){$(this).hide()})
	})

	/* nav hover action */
	$(".nav").children().each(function(){
		var $this = $(this),$index = $this.index();
		$this.hover(function(){
			$(this).addClass("hover");
			$(".navSubItems").stop().animate({top:-48*$index},500);
		},function(){
			$(this).removeClass("hover");
		})
	})
	$(".nav,.navSub").hover(function(){
		$(".navSub").stop().animate({height:48},500);
	},function(){
		$(".navSub").stop().animate({height:0},500);
	});

	/* js-opacity hover action */
	var jsOpacity = $(".js-opacity").find("a").children("img");
	jsOpacity.hover(function () {
        jsOpacity.not($(this)).stop().animate({ opacity: 0.5 }, 500);
    }, function () {
        jsOpacity.not($(this)).stop().animate({ opacity: 1 }, 500);
    });

    /* js-mask hover action */
    var jsMask = $(".js-mask").find(".maksImg");

    jsMask.hover(function() {
		$(this).children(".mask").stop().animate({top: 0},500);
	},function(){ 
		$(this).children(".mask").stop().animate({top: -415},500);	
	})

  /** common function **/
    $(".footerNav").find("li").children("a").hover(function(){
    	$(this).children("ins").show().stop().animate({right:0},200,"easeInQuad");
    },function(){
		$(this).children("ins").stop().animate({right:0},{duration:200,easing:"easeInQuad",complete:function(){$(this).hide()}});
	});

    $(".footerSub").find("li").children("a").hover(function(){
		$(this).find("em img").stop().animate({top:0,left:0,width:106,height:106},500);
	},function(){
		$(this).find("em img").stop().animate({top:53,left:53,width:0,height:0},500);	
	});

    var ftoolsBnt = $(".footerTools").children("a");
	ftoolsBnt.hover(function(){
		ftoolsBnt.not($(this)).addClass("hover");
	},function(){
		ftoolsBnt.removeClass("hover");
	});

    /* clear element margin */
	var clearLiMargin = $(".js-clearLiMargin"),caseLi = clearLiMargin.children("li");
	var clearLiMargin3 = $(".js-clearLiMargin3"),case3Li = clearLiMargin3.children("li");
	caseLi.each(function(){
		var index = $(this).index();
		if (index%4 == 0) {	$(this).addClass("ml0")	};
	})
	case3Li.each(function(){
		var index = $(this).index();
		if (index%3 == 0) {	$(this).addClass("ml0")	};
	})

})

