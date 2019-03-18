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
var num=0;
var w=0;
var wid=0;
function play(x,y,z,j){
	$('.lbt-l').click(function(){
		wid=$('.tab2-img').css('width');
		w=parseInt(wid);
		num--;
		if(num<0){
			num=z;
			$(x).css({'left':`${-num*w}px`});
			num=j;
		}
		$(x).stop().animate({'left':`${-num*w}px`});
		$(y).css('right',`${-w}px`);
		$('ol li').eq(num).addClass('current2');
		$('ol li').eq(num).siblings().removeClass('current2');
	})
	
	$('.lbt-r').click(function(){
		wid=$('.tab2-img').css('width');
		var w=parseInt(wid);
		num++;
		if(num>z){
			num=0;
			$(x).css({'left':`${-num*w}px`});
			num=1;
			
		}
		$(x).stop().animate({'left':`${-num*w}px`});
		$(y).css('right',`${-w}px`);
		$('ol li').eq(num).addClass('current2');
		$('ol li').eq(num).siblings().removeClass('current2');
		if(num==z){
			$('ol li').eq(0).addClass('current2');
			$('ol li').eq(0).siblings().removeClass('current2');
		}
	})
}
play('.lbt','.lbt>div:nth-of-type(2)',8,7);



//小圆点
function go(name){
	$('ol li').click(function(){
		wid=$('.tab2-img').css('width');
		w=parseInt(wid);
		num=$(this).index();
		$(name).stop().animate({'left':`${-num*w}px`});
		$('ol li').eq(num).addClass('current2');
		$('ol li').eq(num).siblings().removeClass('current2');
	})
}
go('.lbt');
//tab栏
var index=0;
$('.tab2-txt li').click(function(){
	index=$(this).index();
	$('.tab2-img>div').eq(index).animate({'opacity':'1'});
	$('.tab2-img>div').eq(index).siblings('div').animate({'opacity':'0'});
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	$('ol li').eq(0).addClass('current2');
	$('ol li').eq(0).siblings().removeClass('current2');
	
	if(index==0){
		go('.lbt');
		$('ol li').css('display','block');
	}else if(index==1){
		go('.lbt2');
		$('.poor2').css('display','none');
		$('.poor3').css('display','none');
		$('ol li').eq('ol li:eq(5),ol li:eq(6)').siblings().css('display','block');
	}else if(index==2){
		go('.lbt3');
		$('.poor3').css('display','none');
		$('.poor3').siblings().css('display','block');
	}else{
		go('.lbt4');
		$('.poor1').css('display','none');
		$('.poor2').css('display','none');
		$('.poor3').css('display','none');
	}
})
