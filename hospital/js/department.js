
$.fn.departmentItem=function(){
	var menuItem=$(".menu-item");
	for(var i=0;i<menuItem.length;i++){
		$(menuItem[i]).on("click",function(){
			var item=$(".department-right .item");
			$(item).siblings().hide().eq($(this).index()).show();
		})
	}
}
$.fn.openAll=function(){
	var a=$(".box-right a");
	/*console.log(a)*/
	a.on("click",function(){
		if(a.html()=="展开全部"){
			$(".department-top").css('height','174px');
			$(".close").show();
			a.html("只看热门");
		}else{
			$(".department-top").css('height','104px');
			$(".close").hide();
			a.html("展开全部");
		}
	})
}





$(function(){
	$(".department-top").openAll();
	/*console.log(menuItem);*/
	$(".menu-list").departmentItem();
})