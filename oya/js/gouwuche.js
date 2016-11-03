;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		
		var sect=$("section");
		
		var goodsList=localStorage.getItem("goodsList");
		goodsList=goodsList?JSON.parse(goodsList):[];
		console.log(goodsList);
		var appendDiv="";
		var goodsData=[];
		var rightBtn=$(".icon-icon");
		var rightUl=$(".headright");
		rightBtn.on("tap",function(){
			rightUl.css("display","block");
		});
		rightUl.on("tap",function(){
			rightUl.css("display","none");
		})
		for(var a=0; a<goodsList.length;a++){
			for(var b in goodsList[a]){
				goodsData.push(goodsList[a][b]);	
			}
			appendDIv=
			    '<div class="shoppingList">'+
					'<div class="iconfont icon-danxuananniuweixuanzhong select"></div>'+
					'<img src="' +goodsData[0] +'"/>'+
					'<div class="goodsName">' +goodsData[1] +'</div>'+
					'<div class="number">'+
						'<div class="price">￥&nbsp;' +goodsData[2] +'</div>'+
						'<div class="btn">'+
							'<span class="iconfont icon-jianhao subtract"></span>'+
							'<span class="center">' +goodsData[3] +'</span>'+
							'<span class="iconfont icon-jiahao add"></span>'+
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
			if($(this).hasClass("icon-danxuananniuweixuanzhong")){
				$(this).removeClass("icon-danxuananniuweixuanzhong").addClass("icon-xuanzeanniu");
			}else{
				$(this).removeClass("icon-xuanzeanniu").addClass("icon-danxuananniuweixuanzhong");
				$(".all").removeClass("icon-xuanzeanniu").addClass("icon-danxuananniuweixuanzhong");
			}
			for(var i=0;i<$(".select").length;i++){
				if(!$($(".select")[i]).hasClass("icon-xuanzeanniu")){
					bool=false;
				}
			}
			if(bool){
				$(".all").removeClass("icon-danxuananniuweixuanzhong").addClass("icon-xuanzeanniu");
			}else{
				$(".all").removeClass("icon-xuanzeanniu").addClass("icon-danxuananniuweixuanzhong");
			}
			console.log(111);
			sum();
		});
		$(".all").on("tap",function(){
			if($(this).hasClass("icon-danxuananniuweixuanzhong")){
				$(this).removeClass("icon-danxuananniuweixuanzhong").addClass("icon-xuanzeanniu");
				$(".select").removeClass("icon-danxuananniuweixuanzhong").addClass("icon-xuanzeanniu");
				sum();
			}else{
				$(this).removeClass("icon-xuanzeanniu").addClass("icon-danxuananniuweixuanzhong");
				$(".select").removeClass("icon-xuanzeanniu").addClass("icon-danxuananniuweixuanzhong");
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
				if($(sel[i]).hasClass("icon-xuanzeanniu")){
					price=parseInt($(sel[i]).siblings(".number").find(".price")[0].innerHTML.split(";")[1]);
					num=parseInt($(sel[i]).siblings(".number").find(".center")[0].innerHTML);
					money=money+price*num;
				}
			}
			allMoney[0].innerHTML="("+money+")";
		}
		
	})
	
	
	
})();
