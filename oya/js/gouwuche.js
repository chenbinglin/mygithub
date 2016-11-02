;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		
		var sect=$("section");
		
		
		var goodsList=localStorage.getItem("goodsList");
		goodsList=goodsList?JSON.parse(goodsList):[];
		console.log(goodsList);
		var appendDiv="";
		var goodsData=[];
		for(var a=0; a<goodsList.length;a++){
			for(var b in goodsList[a]){
				goodsData.push(goodsList[a][b]);	
			}
			appendDIv=
			    '<div class="shoppingList">'+
					'<div class="iconfont icon-xuanze1 select"></div>'+
					'<img src="' +goodsData[0] +'"/>'+
					'<div class="goodsName">' +goodsData[1] +'</div>'+
					'<div class="number">'+
						'<div class="price">￥&nbsp;' +goodsData[2] +'</div>'+
						'<div class="btn">'+
							'<span class="iconfont icon-jian subtract"></span>'+
							'<span class="center">' +goodsData[3] +'</span>'+
							'<span class="iconfont icon-jia add"></span>'+
						'</div>'+
						'<div class="iconfont icon-delete del"></div>'+
					'</div>'+
				'</div>';
			sect.append(appendDIv);
		};
		//var sel=$(".select");
		var allMoney=$(".allMoney");
		//var add=$(".add");
		//var subtract=$(".subtract");
		//var del=$(".del");	
		sect.on("tap",".select",function(){
			var bool=true;
			if($(this).hasClass("icon-xuanze1")){
				$(this).removeClass("icon-xuanze1").addClass("icon-xuanze");
			}else{
				$(this).removeClass("icon-xuanze").addClass("icon-xuanze1");
				$(".all").removeClass("icon-xuanze").addClass("icon-xuanze1");
			}
			for(var i=0;i<$(".select").length;i++){
				if(!$($(".select")[i]).hasClass("icon-xuanze")){
					bool=false;
				}
			}
			if(bool){
				$(".all").removeClass("icon-xuanze1").addClass("icon-xuanze");
			}else{
				$(".all").removeClass("icon-xuanze2").addClass("icon-xuanze1");
			}
			console.log(111);
			sum();
		});
		$(".all").on("tap",function(){
			if($(this).hasClass("icon-xuanze1")){
				$(this).removeClass("icon-xuanze1").addClass("icon-xuanze");
				$(".select").removeClass("icon-xuanze1").addClass("icon-xuanze");
				sum();
			}else{
				$(this).removeClass("icon-xuanze").addClass("icon-xuanze1");
				$(".select").removeClass("icon-xuanze").addClass("icon-xuanze1");
				allMoney[0].innerHTML="";
			}
			
		});
		sect.on("tap",".add",function(){
			$(this).siblings(".center")[0].innerHTML=parseInt($(this)
			.siblings(".center")[0].innerHTML)+1;
			$(this).siblings(".subtract").css("opacity",1);
			sum();
		});
		sect.on("tap",".subtract",function(){
			$(this).siblings(".center")[0].innerHTML=parseInt($(this)
				.siblings(".center")[0].innerHTML)-1;
			if(parseInt($(this).siblings(".center")[0].innerHTML)<=1){
				$(this).siblings(".center")[0].innerHTML=1;
				$(this).css("opacity",0.5);
			}else{
				$(this).css("opacity",1);
			}
			sum();
		});
		sect.on("tap",".del",function(){
			$(this).closest(".shoppingList").remove();
			console.log($("section"));
			sum();
		});
		
		function sum(){
			var money=0;
			var num=0;
			var price=0;
			var sel=$(".select");
			for(var i=0; i<sel.length;i++){
				if($(sel[i]).hasClass("icon-xuanze")){
					price=parseInt($(sel[i]).siblings(".number").find(".price")[0].innerHTML.split(";")[1]);
					num=parseInt($(sel[i]).siblings(".number").find(".center")[0].innerHTML);
					money=money+price*num;
				}
			}
			allMoney[0].innerHTML="("+money+")";
		}
		
	})
	
	
	
})();
