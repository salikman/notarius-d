import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";
import * as swiper from "./modules/swiper.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();
swiper.swiper();

$(function() {
	//BEGIN
	$(".accordion__title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion__content").slideUp(400);
			$(".accordion__title").removeClass("accordion-active");
			$('.accordion__arrow').removeClass('accordion__rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion__arrow',this).toggleClass('accordion__rotate');
	});
	//END
	
});