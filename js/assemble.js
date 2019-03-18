//导航下拉框
$('.r-nav>ul>li').hover(function(){
	$(this).children('.tab').toggle();
})
//导航栏消失
var s;
var x;
$(window).scroll(function(){
	x=$(window).scrollTop();
	if(x>=s){
		if(x>=400){
			$('nav').css('display','none');
		}
		$('nav').css('background','white');
		$('.l-nav img').attr('src','../img/logo2.png');
		$('.r-nav>ul>li>a').css('color','black');
		$('.button span').css('background','black');
	}else{
		$('nav').css('display','block');
	}
	if(x==0){
		$('nav').css('background','transparent');
		$('.l-nav img').attr('src','../img/logo.png');
		$('.r-nav>ul>li>a').css('color','white');
		$('.button span').css('background','white');
	}
	s=x;
})
//导航右按钮
var n=0;
$('.r-nav>div').click(function(){
	$(this).toggleClass('button');
	$('nav').toggleClass('click-nav');
	n=n+1;
	if(n%2==0){
		if(x==0){
			$('nav').css('background','transparent');
			$('.l-nav img').attr('src','../img/logo.png');
			$('nav>ul').css('display','none');
		}else{
			$('.l-nav img').attr('src','../img/logo2.png');
			$('nav>ul').css('display','none');
		}
	}else{
		$('nav>ul').css('display','block');
		$('.l-nav img').attr('src','../img/logo2.png');
		$('nav').css('background','white');
		$('.button span').css('background','black');
	}
})
//下导航栏消失
$(window).scroll(function(){
	var top=$(window).scrollTop();
	if(top>10040){
		$('.down-nav').hide();
	}else{
		$('.down-nav').show();
	}
})
//轮播图
var n=0;
var w=0;
$('.btn-l').click(function(){
	var wid=$('.main-down-r').css('width');
	w=parseInt(wid);
	n--;
	if(n<0){
		n=6;
		$('.main-down-r ul').css('left',n*-w+'px');
		n=5;
	}
	$('.main-down-r ul').stop().animate({'left':n*-w+'px'});
	$('ol li').eq(n).addClass('current');
	$('ol li').eq(n).siblings().removeClass('current');
})
var a=n;
$('.btn-r').click(function(){
	var wid=$('.main-down-r').css('width');
	w=parseInt(wid);
	a++;
	n++;
	if(a==6){
		a=0;
	}
	if(n>6){
		n=0;
		$('.main-down-r ul').css('left',n*-w+'px');
		n=1;
	}
	$('.main-down-r ul').stop().animate({'left':n*-w+'px'});
	$('ol li').eq(a).addClass('current');
	$('ol li').eq(a).siblings().removeClass('current');
})
$('ol li').click(function(){
	n=$(this).index();
	a=$(this).index();
	$('.main-down-r ul').stop().animate({'left':n*-w+'px'});
	$('ol li').eq(n).addClass('current');
	$('ol li').eq(n).siblings().removeClass('current');
})
$('.main-down-r').hover(function(){
	$('.btn-l').stop().animate({'left':'10px','opacity':'1'},200);
	$('.btn-r').stop().animate({'right':'0px','opacity':'1'},200);
},function(){
	$('.btn-l').stop().animate({'left':'-23px','opacity':'0'},200);
	$('.btn-r').stop().animate({'right':'-32px','opacity':'0'},200);
})
