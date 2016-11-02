var Img = "image/5.jpg";
jQuery.noConflict()(function() {
	jQuery.noConflict()("img").lazyload({
		placeholder: Img,
		effect: "fadeIn"
	});
});