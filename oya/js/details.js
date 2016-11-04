;$(function(){
	  /*json获取数据与加载*/
		 	      jQuery(document).ready(function(){
		 	      	
		 	      	  /*详情页设置*/
		 	     	    var $section=$('<section/>');  //创建section
		 	     	    $section.addClass('section_det'); 
		 	     	    
//		 	     	    console.log("css");
                        $section.appendTo('body');
                        
                         /*捕获按钮，页面加载到后*/
                         var $btn_det=$('#btn_det');
                         var $btn_com=$('#btn_com');
        
                      $.ajax({
                      	type:"get",
                      	url:"../data/detail_det.json",  
                      	async:true,
                      	success:function(res){  //从浏览器上获取数据                  		
                      		 $.each(res,function(idx,item){  //从服务器获取
//                    		 	   console.log(res); 
                        		 	                          		 	   
                      		 	   /*div盒子*/
                      		 	   var $div=$('<div/>').addClass('swiper-container');
                      		 	   $div.appendTo($section);
                      		 	   var $div2=$('<div/>').addClass('swiper-wrapper');
                      		 	   $div2.appendTo($div);
                      		 	   
                      		 	   var $div3=$('<div/>').addClass('swiper-slide');
                      		 	   $div3.appendTo($div2);              		 	   
                      		 	   $('<img/>').attr({src:item.src_pic1}).appendTo($div3);
                      		 	   
                      		 	   var $div4=$('<div/>').addClass('swiper-slide');
                      		 	   $div4.appendTo($div2);
                      		 	   $('<img/>').attr({src:item.src_pic2}).appendTo($div4);
                      		 	   
                      		 	   var $div5=$('<div/>').addClass('swiper-slide');
                      		 	   $div5.appendTo($div2);
                      		 	   $('<img/>').attr({src:item.src_pic3}).appendTo($div5);
                      		 	   
                      		 	   var $div6=$('<div/>').addClass('swiper-slide');
                      		 	   $div6.appendTo($div2);
                      		 	   $('<img/>').attr({src:item.src_pic4}).appendTo($div6);
                      		 	   
                      		 	   /*分页*/
                      		 	   var $div7=$('<div/>').addClass('swiper-pagination');
                      		 	   $div7.appendTo($div);
                      		 	   /*导航按钮*/
//                    		 	   var $div8=$('<div/>').addClass('swiper-button-prev');
//                    		 	   $div8.appendTo($div);
//                    		 	   var $div9=$('<div/>').addClass('swiper-button-next');
//                    		 	   $div9.appendTo($div);
                      		 	   /*滚动条*/
                      		 	   var $div10=$('<div/>').addClass('swiper-scrollbar');
                      		 	   $div10.appendTo($div);
                      		 	   
                      		 	   
                      		 	   
                      		 	   /*商品详情ajxs请求*/
                      		 	    $('<h3/>').html(item.title).appendTo($section);
                                    /*价格*/
                                    $('<p/>').addClass('price').html(item.price).appendTo($section);
                    		 	    /*品牌名称*/
                      		 	    var $p=$('<p/>').appendTo($section);
                      		 	    $('<span/>').html(item.brand).appendTo($p);
                      		 	    $('<a/>').html(item.brand_con).appendTo($p);
                      		 	    /*商品名称*/
                      		 	    var $p=$('<p/>').appendTo($section);
                      		 	    $('<span/>').html(item.name).appendTo($p);
                      		 	    $('<a/>').html(item.name_con).appendTo($p);
                      		 	    /*产地*/
                      		 	    var $p=$('<p/>').appendTo($section);
                      		 	    $('<span/>').html(item.place).appendTo($p);
                      		 	    $('<a/>').html(item.place_con).appendTo($p);
                      		 	    /*材质*/
                      		 	    var $p=$('<p/>').appendTo($section);
                      		 	    $('<span/>').html(item.material).appendTo($p);
                      		 	    $('<a/>').html(item.material_con).appendTo($p);
                      		 	    /*洗涤说明*/
                      		 	   var $p=$('<p/>').addClass('last').appendTo($section);
                      		 	   $('<span/>').html(item.introduce).appendTo($p);
                      		 	  $('<a/>').html(item.introduce_con).appendTo($p);
                      		 	  
                      		 	    /*详情图片*/
                      		 	  var $div=$('<div/>').appendTo($section);
                      		 	  $('<img/>').attr({src:item.src_det1}).appendTo($div);
                      		 	  
                      		 	  var $div=$('<div/>').appendTo($section);
                      		 	  $('<img/>').attr({src:item.src_det2}).appendTo($div);
                      		 	  
                      		 	  var $div=$('<div/>').appendTo($section);
                       		 	  $('<img/>').attr({src:item.src_det3}).appendTo($div);
                      		 	  
                      		 	  var $div=$('<div/>').appendTo($section);
                      		 	  $('<img/>').attr({src:item.src_det4}).appendTo($div);
                      		 	  
                      		 })
                      		 
                      		 /*此时，事件已加载完成，（success）现在写入轮播图js*/
                      		 var mySwiper = new Swiper ('.swiper-container', {
							    direction: 'horizontal',
							    loop: true,
							    //自动轮播
						        autoplay: 1000,
							    
							    //速度(图片移动的速度)
				//			    speed: 100,
							    
							    watchSlidesProgress : true,
							    
							    grabCursor : true,
							    
							     //设定为true时，活动块会居中，而不是默认状态下的居左。
							    slidesPerView : 1,
				                centeredSlides : true,
							    // 如果需要分页器
							    pagination: '.swiper-pagination',
							    watchSlidesVisibility: true,
							    			  
							    // 如果需要前进后退按钮
							    nextButton: '.swiper-button-next',
							    prevButton: '.swiper-button-prev',
							    
							    // 如果需要滚动条
				//			    scrollbar: '.swiper-scrollbar',
							  })        
                      		
                       		   //页面加载完，绑定点击事件
                       		   
                       		    $btn_det.on('tap',function(){
                      		   	       console.log("aaa");
                      		   	       $section.css({display:"block"});
//                    		   	       $section_com.css({display:"none"});
                      		   	       $btn_det.css({background:"white",color:"black"});
//                    		   	       $btn_com.css({background:"#8e488e",color:"white"});
                      		   })
                       		     $btn_com.on('tap',function(){
                      		   	     console.log("bbb");
                      		   	      $section.css({display:"none"});
//                    		   	      $section_com.css({display:"block"});
//                    		   	      $btn_com.css({background:"white",color:"black"});
//                    		   	      console.log("aaa");
                                      $btn_det.css({background:"#8e488e",color:"white"})
                      		   })    
                       		    
                       		   
                      	}
                      	                     	
                    });
                    
                     /*评论页ajax请求*/
                    $.ajax({
					url:"../data/detail_com.json",
					success : function(e){
//						console.log(e);
                      $.each(e,function(idx,item) {
                      	    
                      	     /*评论页设置*/   /*每请求json就创建一个section,注意section的类名*/ 
			                        var $section_com=$('<section/>');   //在评论页创建一个section
			                        $section_com.addClass('section_com'); 
			                        $section_com.appendTo('body');
//                                  console.log($section_com);
                      		 	   
                        		  /*商品详情页*/
                       		 	   var $p1=$('<p/>').appendTo($section_com);
                       		 	  /*创建三个span标签*/
                       		 	   var $span1=$('<span/>').appendTo($p1)
                       		 	   $('<img/>').attr({src:item.src_user}).appendTo($span1);
                       		 	   
                       		 	   $('<span/>').html(item.user_name).appendTo($p1);
                       		 	   
                       		 	   $('<span/>').html(item.comment_time).appendTo($p1);
                       		 	   
                       		 	   var $p2=$('<p/>').appendTo($section_com);
                       		 	   $('<img/>').attr({src:item.src_score}).appendTo($p2);
                       		 	   
                       		 	   $('<p/>').html(item.user_com).appendTo($section_com);
                       		 	   $('<p/>').html(item.buy_time).appendTo($section_com);
                       		 	   $('<p/>').appendTo($section_com);
      
                       		 	   
                       		 	    /*点击事件*/
                           $btn_det.on('tap',function(){
                      		   	       console.log("ccc");
//                    		   	       $section.css({display:"block"});
                      		   	       $section_com.css({display:"none"});
//                    		   	       $btn_det.css({background:"white",color:"black"});
                      		   	       $btn_com.css({background:"#8e488e",color:"white"});
                      		   })
                       		     $btn_com.on('tap',function(){
                      		   	     console.log("ddd");
//                    		   	     console.log($section_com);
//                    		   	      $section.css({display:"none"});
                      		   	      $section_com.css({display:"block"});
                      		   	      $btn_com.css({background:"white",color:"black"});
//                    		   	      console.log("aaa");
//                                    $btn_det.css({background:"#8e488e",color:"white"})；
                      		   })    
                       		 	   
                      });
                      
                     
                                  
					}
				});

                /*在加载完成后实现点击事件*/
                      		  
                      		   var $section_com=$('.section_com');
//                    		   console.log($section_com);
                      		  
                      		       
                    
                    
                              
             }) 
		 
		 	
		 	/*------------------------------------*/
			document.addEventListener("DOMContentLoaded",function(){
				var btn=$(".btn_sc");
				var btn2=$(".btn_buy");
				var number_det=$("#XTU");
				var goodsList=localStorage.getItem("goodsList");
				goodsList=goodsList?JSON.parse(goodsList):[];
				console.log(goodsList);
				var index=0;
				btn.on("tap",function(){
					
				   /*点击事件，添加到购物车innnerHTML是js的方法,需要加[0],将jq的dom节点转化为为js的dom节点*/
				   index=number_det[0].innerHTML=parseInt(number_det[0].innerHTML)+1;
                    
                     
					var obj={};													
					obj.pic="../img/57.jpg";
					obj.name="斯文印花黑灰色短袖连衣裙";
					obj.price="120";
					obj.num=index;
					obj.inter="你呀";
					obj.id="G001";
					goodsList.unshift(obj);
					
					
					
					localStorage.setItem("goodsList",JSON.stringify(goodsList));
				
					
					
				

						
		});
					
				})
			
});
