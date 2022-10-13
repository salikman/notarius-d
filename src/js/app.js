import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";
import * as swiper from "./modules/swiper.js";
import * as rating from "./modules/star-rating-svg.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();
swiper.swiper();
rating.rating();

$(function() {
	$('.header__collapse').on('click', () => {
		$('.header__collapse').toggleClass('active');
		$('.menu').toggleClass('open-menu');
	})
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

	function owlInitialize() {
		const gallerySlider = $('.gallery-js');

		if ($(window).width() <= 768 ) {
			gallerySlider.addClass("owl-carousel");
			gallerySlider.owlCarousel({
				center: false,
				dots: false,
				items:1,
				loop:true,
				margin:10,
				stagePadding: 15,
			});
		} else {
			gallerySlider.owlCarousel('destroy');
			gallerySlider.removeClass("owl-carousel");
		}
	}
	$(document).ready(function (e) {
        owlInitialize();
    });
    $(window).resize(function () {
        owlInitialize();
    });

	$(".my-rating").starRating({
		initialRating: 4,
		strokeColor: '#894A00',
		strokeWidth: 10,
		starSize: 25
	  });
});