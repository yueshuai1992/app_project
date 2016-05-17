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
//改变成为默认城市
function cityRestore () {
	 var time = ["不限","北京","南京","上海","杭州"]
	 $(".c_right li").each(function(index,ement) {
	 	$(ement).children('p').text(time[index])
	 })
	 $(".c_left li").eq(0).css({"background":"#ebebeb","color":"#000"});
	 $(".c_left li").eq(1).css({"background":"#fff","color":"#50bbdb"});
	$(".c_left li").eq(2).css({"background":"#ebebeb","color":"#000"});
	$(".c_left li").eq(3).css({"background":"#ebebeb","color":"#000"});
}
// 改变成为出现天数
function changeTime () {
	 var time = ["3天","3~5天","5-7天","7-12天","12天以上"]
	 $(".c_right li").each(function(index,ement) {
	 	$(ement).children('p').text(time[index])
	 })
	 $(".c_left li").eq(0).css({"background":"#ebebeb","color":"#000"});
	 $(".c_left li").eq(1).css({"background":"#ebebeb","color":"#000"});
	$(".c_left li").eq(2).css({"background":"#fff","color":"#50bbdb"});
	$(".c_left li").eq(3).css({"background":"#ebebeb","color":"#000"});
}
//改变出行时间
function goDate(){
	 var time = ["周末","元旦","五一","十一","近期"]
	 $(".c_right li").each(function(index,ement) {
	 	$(ement).children('p').text(time[index])
	 })
	 $(".c_left li").eq(0).css({"background":"#ebebeb","color":"#000"});
	 $(".c_left li").eq(1).css({"background":"#ebebeb","color":"#000"});
	$(".c_left li").eq(2).css({"background":"#ebebeb","color":"#000"});
	$(".c_left li").eq(3).css({"background":"#fff","color":"#50bbdb"});
}
//推荐排序
function marketing(){
	 var time = ["不限","北京","南京","上海","杭州"]
	 $(".c_right li").each(function(index,ement) {
	 	$(ement).children('p').text(time[index])
	 })
	 $(".c_left li").eq(0).css({"background":"#fff","color":"#50bbdb"});
	 $(".c_left li").eq(1).css({"background":"#ebebeb","color":"#000"});
	$(".c_left li").eq(2).css({"background":"#ebebeb","color":"#000"});
	$(".c_left li").eq(3).css({"background":"#ebebeb","color":"#000"});
}
// 点击A
$(".cityNav a").tap(function() {
		$(this).children().css("color", "#50bbdb")
		$(this).siblings().children("i").css("color", "#ccc");
		$(this).siblings().children("p").css("color", "#000");
		var display = $(".cityNavbox").css("display");
		if (display == "none") {
			$(".cityNavbox").css("display", "block")
			showOverlay()
			switch($(this).index()){
				case 1 : changeTime();init();break;
				case 0 : cityRestore();init();break;
				case 3 : marketing();init();break;
				case 2 : goDate();init();break;
			}
		} else {
			$(".cityNavbox").css("display", "none");
			hideOverlay();
		}
	})
	// 点击遮罩
$("#overlay").tap(function() {
		$(".cityNavbox").css("display", "none");
		hideOverlay();
	})
	// 切换城市
function checkBox(str) {
	var arr = ["checkbox-2-2", "checkbox-2-3", "checkbox-2-4", "checkbox-2-5"]
	if (str == "#checkbox-2-1") {
		for (var i in arr) {
			document.getElementById(arr[i]).checked = false;
			$("#" + arr[i]).siblings().css("color", "#000")
		}
	} else {
		if ($(str).is(':checked')) {
			$(str).siblings().css("color", "#50bbdb")
		} else {
			$(str).siblings().css("color", "#000")
		}
		document.getElementById("checkbox-2-1").checked = false;
	}
}
$(".c_right input").change(function() {
	var str = "#" + $(this).attr("id");
	checkBox(str);
})
// 按钮初始化
function init () {
	 var arr = ["checkbox-2-2", "checkbox-2-3", "checkbox-2-4", "checkbox-2-5"];
	 for (var i in arr) {
		document.getElementById(arr[i]).checked = false;
		$("#" + arr[i]).siblings().css("color", "#000")
	}
}
// 点击框中的出发城市不是选择菜单中的
$(".c_left li").eq(0).tap(function() {
	marketing();
	init () ;
})
$(".c_left li").eq(1).tap(function() {
	cityRestore();
	init () ;
})
$(".c_left li").eq(2).tap(function(){
	changeTime () ;
	init () ;
})
$(".c_left li").eq(3).tap(function(){
	goDate () ;
	init () ;
})