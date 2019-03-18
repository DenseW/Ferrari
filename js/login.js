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
		if(x>=200){
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
		// $('nav').css('background','transparent');
		// $('.l-nav img').attr('src','../img/logo2.png');
		// $('.r-nav>ul>li>a').css('color','white');
		// $('.button span').css('background','white');
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
//删除input的valu值
$('input').focus(function(){
	$(this).parent().css('border-bottom','2px solid #99604c');
	$('.check').css('border-bottom','none');
})
$('input').blur(function(){
	$('form div').css('border-bottom','2px solid #eaeaea');
})
//单选框
$('.checkbox>span').click(function(){
	var cli=0;
	n++;
	if(n%2==0){
		$('.checkbox>span>span').animate({'opacity':'0'})
	}else{
		$('.checkbox>span>span').animate({'opacity':'1'})
	}
})

$('.check2>span').click(function(){
	var cli=0;
	n++;
	if(n%2==0){
		$('.check2>span>span').animate({'opacity':'0'})
	}else{
		$('.check2>span>span').animate({'opacity':'1'})
	}
})

$('.inp>input').focus(function(){
	$(this).css({'border-bottom-color':'white'});
	$('.inp p').css({'top':'0px','opacity':'1'});
})
$('.inp>input').blur(function(){
	$(this).css({'border-bottom-color':'#4d4d4d'});
	$('.inp p').css({'top':'30px','opacity':'0'})
})
//正则判断
var pass=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,}$/;
var num=/^[0-9]{11}$/;

function judge(cla,cla2){
	$(cla).blur(function(){
		var onum=$(this).val().match(num);
		if(onum){
			$(cla2).css('opacity','0');
		}else{
			$(cla2).css('opacity','1');
		}
	})
}
judge('.phone','.error');
judge('.phone2','.error2');
$('.pass').blur(function(){
	var opass=$(this).val().match(pass);
	if(opass){
		$('.error3>p').css('opacity','0');
	}else{
		if(/^[^a-z]*$/){
			$('.error3>p:nth-of-type(1)').css('opacity','1');
		}else if(/^[^A-Z]*$/){
			$('.error3>p:nth-of-type(2)').css('opacity','1');
		}else if(/^[^0-9]*$/){
			$('.error3>p:nth-of-type(3)').css('opacity','1');
		}else{
			$('.error3>p:nth-of-type(4)').css('opacity','1');
		}
		
	}
})

