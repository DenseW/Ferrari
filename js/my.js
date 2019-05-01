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
		$('.l-nav img').attr('src','img/logo2.png');
		$('.r-nav>ul>li>a').css('color','black');
		$('.button span').css('background','black');
	}else{
		$('nav').css('display','block');
	}
	if(x==0){
		$('nav').css('background','transparent');
		$('.l-nav img').attr('src','img/logo.png');
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
			$('.l-nav img').attr('src','img/logo.png');
			$('nav>ul').css('display','none');
			$('.r-nav span').css('background','white');
		}else{
			$('.l-nav img').attr('src','img/logo2.png');
			$('nav>ul').css('display','none');
		}
	}else{
		$('nav>ul').css('display','block');
		$('.l-nav img').attr('src','img/logo2.png');
		$('nav').css('background','white');
		$('.r-nav span').css('background','black');
	}
})
//中间放大动画
function big(){
	$('.box>a').hover(function(){
		$(this).css({'opacity':'1','width':'25%','transform':'scale(1.1)','z-index':'2'});
		$(this).siblings().css({'opacity':'0.5','width':'23%'});
		$(this).children('p').css('width','70%');
	},function(){
		$('.box>a').css({'opacity':'1','width':'23%','transform':'scale(1)','z-index':'1'});
		$(this).children('p').css('width','50%');
	})
}
big();
// 一些图片的消失和显示
$(window).resize(function(){
	var wid=$(window).width();
	if(wid>=1002){
		$('.bias').children(0).show();
		$('.blog-img').children(0).show();
		$('.box3-head').children(0).show();
	}else{
		$('.box>a').unbind();
		$('.bias').children(0).hide();
		$('.blog-img').children(0).hide();
		$('.box3-head').children(0).hide();
	}
})