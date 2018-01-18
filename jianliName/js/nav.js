
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


$(function(){
	$(".list a").hover(function(){
		$(this).stop().animate({
			"margin-top":-40
		},300)
	},function(){
		$(this).stop().animate({
			"margin-top":0
		},300)
	})



})


$(function(){
	var i=0;
	var size=$(".banner .img li").length;
	for (var j = 0; j < size-3; j++) {
		$(".banner .num").append("<li></li>");
	}
	// var clone=$(".banner .img").children(".oone").clone();
	// $(".banner .img").append($(".oone").clone())
	// console.log(size)
		// alert(size)
	$(".banner .num .one").addClass("on")
	
	//鼠标滑入圆点
	$(".banner .num li").hover(function(){
		var index=$(this).index();
		i=index;
		$(".banner .img").stop().animate({left:-600*index},500)
		$(this).addClass("on").siblings().removeClass("on")
		// $(".banner .num li").eq(index).addClass("on").siblings().removeClass("on")
	})

	// 自动轮播


	var t=setInterval(moveL,1500)

	// 对banner定时器的操作
		$(".banner").hover(function(){
			clearInterval(t);
		},function(){
			t=setInterval(moveL,1500)
		})


	// 向左
	$(".banner .btn_l").click(function(){
		moveL()
	})

	function moveL(){
		i++
		if (i==size){
			$(".banner .img").css({left:0})
			i=1;
		}
		$(".banner .img").stop().animate({left:-600*i},500)
		if (i==size-1) {
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on")
		}else{
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
		}
		
	}


	// 向右
	$(".banner .btn_r").click(function(){
		moveR()
	})

	function moveR(){
		i--
		if (i==-1) {
			$(".banner .img").css({left:-(size-1)*600})
			i=size-2;
		}
		// $(".banner .img").stop().animate({left:-600*i},500)
		// $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
		$(".banner .img").stop().animate({left:-600*i},500)
		if (i==size-1) {
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on")
		}else{
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on")
		}
	}


})


	//one
	$(function(){
         
		$(window).height(function(){
			var h=document.documentElement.clientHeight/2;
			console.log(h);
			$(".one").animate({
				"margin-top":h-50
			},1000)
		})


		$(window).resize(function(){
			var htwo=document.documentElement.clientHeight;
			$(".one").stop().animate({
				"margin-top":htwo/2-50
			},500)
		})
	})


	// $(function(){
	// 	$(".inner ul li").hover(function(){
	// 		$(".li1~li").removeClass("color").css({
	// 			"color":"black"
				
	// 		})
	// 	})

		// $(".inner ul li").mouseenter(function(){
		// 	$(".li1~li").removeClass("color").css({
		// 		"color":"white"
				
		// 	})
		// })
	// })


	// scorllTop()窗口距离顶部的值

	$(function(){
		$(window).scroll(function(){
			var t=$(this).scrollTop()
			if (t>350) {
				$(".jiantou").stop().fadeIn();
			}else{
				$(".jiantou").stop().fadeOut();
			}
		})
	})
