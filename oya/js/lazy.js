var Img = "img/6.jpg";
jQuery.noConflict()(function() {
	jQuery.noConflict()("img").lazyload({
		placeholder: Img,
		effect: "fadeIn"
	});
});