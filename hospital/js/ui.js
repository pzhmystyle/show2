/*
	var index=0;
	var uiSlider=$(".banner-slider div");
	var time=null;*/
//医院下拉框
$.fn.hospitalMenu =function(){
	var menu=$(this);

	$(menu).on("click",function(){
		$(".hospital-menu",menu).show();
		return false;
	});
	$(".hospital-menu a").on("click",function(){
		$(".hospital-select").html($(this).html());
		$(".hospital-menu").hide();
		return false;
	});

	$("body").on("click",function(){
		$(".hospital-menu").hide();
	});
}
//轮播图片:
//1.左右箭頭控制翻頁；翻頁的時候，下一頁需要回到第一頁
//
//2.進度點，在點擊時需要切換到對應頁面
//
//3.進入網頁時需要自動滾動圖片
//
//4滾動時屏蔽其他操作
$.fn.uiSlider=function(){
	var ui= $(this);
	var items=$(".ui-banner-wrap a");
	var prev=$ (".ui-banner-btn .left");
	var next=$ (".ui-banner-btn .right");
	var dots=$(".ui-slider-process span");
	var wrap=$(".ui-banner-wrap");
	var current=0;
	var len = items.length;
	var width = items.eq(0).width();
	var enable=true;
	//具体操作
	ui.on("mouseover",function(){
		enable=false;
	})
	.on("mouseout",function(){
		enable=true;
	})
	wrap.on("move_to",function(evt,index){
		$(this).css("left",index*width*-1)
		dots.removeClass("dots_focus").eq(index).addClass("dots_focus")
	})
	.on("move_prev",function(){
		current--;
		if(current<0)current=2;
		$(this).triggerHandler("move_to",current);
	})
	.on("move_next",function(){
		current++;
		if(current>len-1)current=0;
		$(this).triggerHandler("move_to",current);
	})
	.on("auto_move",function(){
		setInterval(function(){
			enable && wrap.triggerHandler("move_next")
		},3000)
	})
	.triggerHandler("auto_move")
	//事件
	prev.on("click",function(){
		wrap.triggerHandler("move_prev",current)
	})

	next.on("click",function(){
		wrap.triggerHandler("move_next",current)
	})

	dots.on("click",function(){
		var index = $(this).index();
		wrap.triggerHandler("move_to",index);
	})

}

/*ui-tab*/
$.fn.uiTab=function(){
	var ui=$(this);
	var tabItem=$(".tab-item a");
	
	var block=$(".block");
	var areaItem=$(".tab-area-item a");
	
	var pic=$(".content-pic");
	tabItem.on("click",function(){
		var index= $(this).index();
		tabItem.removeClass("tab-item_focus").eq(index).addClass("tab-item_focus");
		block.hide().eq(index).show();
	})

	areaItem.on("click",function(){
		var index= $(this).index();
		areaItem.removeClass("tab-area-item_focus").eq(index).addClass("tab-area-item_focus");
		pic.hide().eq(index).show();
	})
}

/*回到顶部*/
$.fn.uiBackTop=function(){
	var ui=$(this);
	var el = $('<a class="ui-backTop" href="#backTop"></a>');
	ui.append(el);
	var windowHeight=$(window).height();
	$(window).on("scroll",function(){
		var scrollTop=$('html').scrollTop();
		if(scrollTop>windowHeight)el.show();
			else el.hide();
	});
	el.on("click",function(){
		$(window).scrollTop(0);
	});


}

/*ui-cascading*/
/*$.fn.uiCascading=function(){
	var ui = $(this);
	var selects = $('select',ui);

	selects
	.on('change',function(){
		var val = $(this).val();
		var index = selects.index(this);
		debugger
	})
	.on('reloadOptions',function(){

	})
}
*/






//页面加载完才运行脚本
$(function(){

	$(".hospital").hospitalMenu();

	$(".ui-slider").uiSlider();
	
	$(".ui-tag").uiTab();
	$("body").uiBackTop();
	/*$("ui-cascading").uiCascading();*/
})