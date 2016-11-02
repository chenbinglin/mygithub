;jQuery(function() {
	//   	        var $header =document.querySelector("header")
	var $btn = document.querySelector(".icon-icon");
	var menu = document.querySelector(".center-menu")
	var footlist = document.querySelector("footer ul");
	var $li = document.querySelectorAll("footer ul li");

	console.log($btn)
		//点击头部菜单文字图标 出现菜单列表
   var i=0;
	$($btn).on("click", function() {
			i+=1
			if(i%2!=0){
				menu.style.display="block";
				
			}
			if(i%2==0){
				menu.style.display="none";
			}
				
				
		
		})
		//遍历底部菜单，点击时给高亮效果
	$.each($li, function(index, item) {
		item.onclick = function() {
		//					console.log(item);

		//				 	 item.classList.add("active");


			item.classList.remove("active")
			$.each($li, function(index, item) {
				item.classList.remove("active")
			})
			this.classList.add("active");
		}
	});
});