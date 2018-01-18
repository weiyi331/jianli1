

$(function(){
	// $(".list li a[href='jianle.html']").addClass("on")
	var index=window.location.href.split("/").length-1;
	console.log(index);
	var href=window.location.href.split("/")[index];
	// alert(href);

	$(".list li a[href^='"+href+"']").addClass("on");

	// if (href>0) {
	// 	$(".list li a[href^='"+href+"']").addClass("on");
	// }else{
	// 	$(".list li a[href^='index']").addClass("on");
	// }

})