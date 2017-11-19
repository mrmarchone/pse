/*global $, document*/
$(document).ready(function () {
    'use strict';
    $('html').smoothScroll();
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    $('.typed-cursor').remove();
    $("#header").vegas({
        slides: [
            { src: "images/header3.jpg" },
            { src: "images/header2.jpg" },
            { src: "images/g.jpg" },
            { src: "images/header2.jpg" }
        ],
        transition: [ 'fade', 'zoomOut', 'swirlLeft' ]
});
    $('#subload').animate({
        width: '100%'
    }, 'slow', function () {
        $('.loading').delay(2500).animate({opacity: '0'}, function () {
            $('body').css('overflow-y', 'scroll');
            $('.loading').css('display', 'none');
        });
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > '300') {
        $('.navbar-inverse').css('backgroundColor', '#1aa39b');
    } else {
        $('.navbar-inverse').css('backgroundColor', 'transparent');
    }
    });
    $('.v').click(function () {
        $('.v-menu').slideToggle('slow');
        $('.v2-menu').slideUp('slow');
    });
    $('.v2').click(function () {
        $('.v2-menu').slideToggle('slow');
        $('.v-menu').slideUp('slow');
    });
    

// - Noel Delgado | @pixelia_me


var nodes  = document.querySelectorAll('li'),
    _nodes = [].slice.call(nodes, 0);

var getDirection = function (ev, obj) {
    var w = obj.offsetWidth,
        h = obj.offsetHeight,
        x = (ev.pageX - obj.offsetLeft - (w / 2) * (w > h ? (h / w) : 1)),
        y = (ev.pageY - obj.offsetTop - (h / 2) * (h > w ? (w / h) : 1)),
        d = Math.round( Math.atan2(y, x) / 1.57079633 + 5 ) % 4;
  
    return d;
};

var addClass = function ( ev, obj, state ) {
    var direction = getDirection( ev, obj ),
        class_suffix = "";
    
    obj.className = "";
    
    switch ( direction ) {
        case 0 : class_suffix = '-top';    break;
        case 1 : class_suffix = '-right';  break;
        case 2 : class_suffix = '-bottom'; break;
        case 3 : class_suffix = '-left';   break;
    }
    
    obj.classList.add( state + class_suffix );
};

// bind events
_nodes.forEach(function (el) {
    el.addEventListener('mouseover', function (ev) {
        addClass( ev, this, 'in' );
    }, false);

    el.addEventListener('mouseout', function (ev) {
        addClass( ev, this, 'out' );
    }, false);
});
    
});
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