(function($) { "use strict";
	/* slideshow */
	
	if (jQuery(".tp-banner").length) {
		jQuery('.tp-banner').revolution({
			delay:5000,
			startwidth:1170,
			startheight:532,
			hideThumbs:200,
			fullWidth:"off",
			fullScreen:"off",
		});
	}
	
	/* bxSlider */
	
	jQuery(".single-portfolio-slide-3 > ul").bxSlider({easing: "linear",tickerHover: true,adaptiveHeightSpeed: 1500,moveSlides: 1,maxSlides: 1,auto: true});
	
	jQuery(".bxslider-slide > ul").bxSlider({easing: "linear",tickerHover: true,slideWidth: 1170,adaptiveHeightSpeed: 1500,moveSlides: 1,maxSlides: 1,auto: true});
})(jQuery);