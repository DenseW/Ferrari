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
	
	console.log(top)
	if(top>10040){
		$('.down-nav').hide();
	}else{
		$('.down-nav').show();
	}
	
})