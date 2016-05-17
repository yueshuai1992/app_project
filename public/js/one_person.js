/* 显示遮罩层 */
function showOverlay() {
    $("#overlay").height(pageHeight());
    $("#overlay").width(pageWidth());
    $("#overlay").show();
	// $(".P_changeNav").animate({"position":"absolute","top":"1.6rem"},5000)
}

/* 隐藏覆盖层 */
function hideOverlay() {
    $("#overlay").hide();
}

/* 当前页面高度 */
function pageHeight() {
    return document.body.scrollHeight;
}

/* 当前页面宽度 */
function pageWidth() {
    return document.body.scrollWidth;
}
$(".nav li").eq(0).tap(function() {
	var display = $(".P_changeNav").css("display")
	if(display=="none"){
		showOverlay();
		$(".P_changeNav").show();
		$(".P_changeNav2").hide();
	}
	else{
		hideOverlay();
   		$(".P_changeNav").hide();
   		$(".P_changeNav2").hide();
	}

});
$(".nav li").eq(1).tap(function() {
	var display = $(".P_changeNav2").css("display")
	if(display=="none"){
		showOverlay();
		$(".P_changeNav2").show();
		$(".P_changeNav").hide();
	}
	else{
		hideOverlay();
   		$(".P_changeNav2").hide();
   		$(".P_changeNav").hide();
	}

});
$("#overlay").tap(function () {
	$(this).hide();
	$(".P_changeNav2").hide();
   	$(".P_changeNav").hide();
})


// console.log($(".payOne").val());
function delOption(){
	if($(".payOne").val()=="付款"){
		 $(".payOne option[value='取消'").remove();
		 return;
	}
	if($(".payOne").val()=="点评"){
		 $(".payOne option[value='取消'").remove();
		 $(".payOne option[value='付款'").remove();
		 return;
	}
	if($(".payOne").val()=="查看"){
		 $(".payOne option[value='取消'").remove();
		 $(".payOne option[value='付款'").remove();
		 $(".payOne option[value='点评'").remove();
		 return;
	}
}
$(".payOne").change(function() {
	delOption()
})