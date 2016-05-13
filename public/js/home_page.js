// citychange
$(".header_l").tap(function(){
	$(".citybox").scrollTop(100);
	var display = $(".citybox").css("display");
	if(display=="none"){
		$(".citybox").css("display","block");
		$(".main").css("display","none");
		$(".footer").css("display","none");
	}
	else{
		$(".citybox").css("display","none");
		$(".main").css("display","block");
		$(".footer").css("display","block");
	}

});
$(".citybox a").tap(function(){
	var x = $(this).text();
	$(".header_l .getCity").text(x);
	$(".citybox").css("display","none");
	$(".main").css("display","block");
	$(".footer").css("display","block");
})
// nav改变
$(".changeNav li").tap(function(a){
	var index = $(this).index();
	var background = $(this).css("background-image");
	if(index==0&&background != 'url("../img/nav.png"))'){
		$(".toggleNav2").hide(3000);
		if(background !='url("")'){
			$(".toggleNav").show(3000);
		}
	}
	if(index==1){
		$(".toggleNav").hide(3000);
		if(background != "none"&&background !='url("")'){
			$(".toggleNav2").show(3000);
		}
	}
	$(this).css({
		"background-image": 'url("img/nav.png")',
		"background-repeat": "no-repeat",
		"color":"#50bbdb"
	}).siblings().css({
		"background-image": 'url("")',
		"color":"#fff"
	});
	a.stopPropagation();
})
$(document).tap(function(){
	$(".toggleNav").hide(0);
	$(".toggleNav2").hide(0)
})
// $(document).click(function(a){
// 		a.button!=2&&$(".toggleNav").hide(0);
// 		a.button!=2&&$(".toggleNav2").hide(0);
// });
$(".toggleNav li").tap(function(){
	var nevText = $(this).text();
	if(nevText=="全部"){
		$(".changeNav li").eq(0).text("爱自驾");
	}else {
		$(".changeNav li").eq(0).text(nevText);
	}
	$(this).css({
		"background":"rgba(0,0,0,0.8)",
		"color":"#ee7e3e",
		"font-size":"0.21rem",
	}).siblings().css({
		"background":"rgba(0,0,0,0)",
		"color":"#fff",
		"font-size":"0.20rem",
	})
})
$().tap(function(){
	$(".toggleNav").hide(3000);
	$(".toggleNav2").hide(3000);
})
// 图片轮播
var mySwiper = new Swiper('.swiper-container', {
	autoplay:3000,//可选选项，自动滑动
	loop:true,
	pagination:'.swiper-pagination',
	paginationClickable :true,
})

// home_page2 borderChange
$(".borderChange a").tap(function  () {
	$(this).css({"color":"#50bbdb",
	"border-color":"#50bbdb",}).siblings().css({"color":"#cccccc",
	"border-color":"#cccccc",})

})


//footer 的 change
$(".footer a").tap(function(){
	$(this).children().css("color","#5abfdd");
	$(this).siblings().children().css("color","#7f7f7f");
})