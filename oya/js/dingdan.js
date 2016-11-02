;$(function(){
				$("#btn #del").click(function(){
//					console.log('删除')
					$(this).closest("section").slideUp();
				})
  				
  				$("#btn #fukuan").click(function(){
//					$(this).closest("section").slideUp();
  					alert("亲!确定付款吗?")
  				})
  				
  				$("#btn #chakan").click(function(){
//					$(this).closest("section").slideUp();
  					alert("暂时没有更多信息")
  				})
  				
			});