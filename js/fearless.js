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
	var top=$('.down-nav').offset().top;
	var ntop=$('.end').offset().top;
	if(top>ntop){
		$('.down-nav').css('z-index','-5');
	}else{
		$('.down-nav').css('z-index','50');
	}
})
$(window).resize(()=>{
	var wwid=$(window).width();
	if(wwid<1000){
		$('.down-nav').hide();
	}else{
		$('.down-nav').show();
	}
})
//中间图片变灰色
function add(a){
	$(a).hover(function(){
		$(this).children().stop().fadeToggle(200);
	})
}
add('.up-l-img');
add('.l-down-up');
add('.l-down-down');
add('.r-down');
add('.up-r-img');
add('.down-r-img');

//打开和关闭轮播图
$('.fix').hide();
$('.up-l-img,.l-down-up,.l-down-down,.r-down,.up-r-img,.down-r-img').click(function(){
	$('.fix').show();
})
$('.colse').click(function(){
	$('.fix').hide();
})

//轮播图
var num=0;
$('.fix-l').click(function(){
	num--;
	if(num<0){
		num=6;
		$('.fix-img').css({'left':-1094*num+'px'},500);
		num=5;
	}
	$('.fix-img').stop().animate({'left':-1094*num+'px'},500);
	
	if(num==1 || num==3){
		$('.fix-f').css('transform','translateX('+num*-70+'px)');
	}else{
		if(num<0){
			num=5;
		}
		$('.fix-f').css('transform','translateX('+num*-80+'px)');
	}
})
$('.fix-r').click(function(){
	num++;
	if(num>6){
		num=0;
		$('.fix-img').css({'left':-1094*num+'px'});
		num=1;
	}
		$('.fix-img').stop().animate({'left':-1094*num+'px'},500);
	
	
	if(num==1 || num==3){
		$('.fix-f').css('transform','translateX('+num*-70+'px)');
	}else{
		if(num>6){
			//为什么等于6的时候就没有无缝了
			num=0;
		}
		$('.fix-f').css('transform','translateX('+num*-80+'px)');
	}
})

//小轮播图点击事件
$('.fix-f>img').click(function(){
	num=$(this).index();
	$('.fix-img').css('left',-1094*num+'px');
	$('.fix-f').css('transform','translateX('+num*-80+'px)');
})