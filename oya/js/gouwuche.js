;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var sel=$(".select");
		var all=$(".all");
		var allMoney=$(".allMoney");
		var add=$(".add");
		var subtract=$(".subtract");
		var del=$(".del");	
		
		
		
		
		sel.on("tap",function(){
			var bool=true;
			if($(this).hasClass("icon-xuanze1")){
				$(this).removeClass("icon-xuanze1").addClass("icon-xuanze");
			}else{
				$(this).removeClass("icon-xuanze").addClass("icon-xuanze1");
				all.removeClass("icon-xuanze").addClass("icon-xuanze1");
			}
			for(var i=0;i<sel.length;i++){
				if(!$(sel[i]).hasClass("icon-xuanze")){
					bool=false;
				}
			}
			if(bool){
				all.removeClass("icon-xuanze1").addClass("icon-xuanze");
			}else{
				all.removeClass("icon-xuanze2").addClass("icon-xuanze1");
			}
			
			sum();
		});
		all.on("tap",function(){
			if($(this).hasClass("icon-xuanze1")){
				$(this).removeClass("icon-xuanze1").addClass("icon-xuanze");
				sel.removeClass("icon-xuanze1").addClass("icon-xuanze");
				sum();
			}else{
				$(this).removeClass("icon-xuanze").addClass("icon-xuanze1");
				sel.removeClass("icon-xuanze").addClass("icon-xuanze1");
				allMoney[0].innerHTML="";
			}
			
		});
		add.on("tap",function(){
			$(this).siblings(".center")[0].innerHTML=parseInt($(this)
			.siblings(".center")[0].innerHTML)+1;
			$(this).siblings(".subtract").css("opacity",1);
			sum();
		});
		subtract.on("tap",function(){
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
		del.on("tap",function(){
			$(this).closest(".shoppingList").remove();
			console.log(sel);
			sum();
		});
		
		function sum(){
			var money=0;
			var num=0;
			var price=0;
			for(var i=0; i<sel.length;i++){
				if($(sel[i]).has("icon-xuanze")){
					price=parseInt($(sel[i]).siblings(".number").find(".price")[0].innerHTML.split(";")[1]);
					num=parseInt($(sel[i]).siblings(".number").find(".center")[0].innerHTML);
					money=money+price*num;
				}
			}
			allMoney[0].innerHTML="("+money+")";
		}
		
	})
	
	
	
})();
