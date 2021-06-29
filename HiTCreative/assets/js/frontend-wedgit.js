(function ($) {
	"use strict";

	function sliders() {
		/*banner slider*/
		var swiper = new Swiper('.tst-main-slider', {
			slidesPerView: 1,
			speed: 800,
			effect: 'fade',
			fadeEffect: {
			  crossFade: true
			},
			pagination: {
			  el: '.tst-main-pagination',
			  clickable: true,
			},
			parallax: true,
			autoplay: false,
			navigation: {
			  prevEl: '.tst-main-prev',
			  nextEl: '.tst-main-next',
			},
		});
	}

	/* Init Elementor Front Scripts */
	$(window).on('elementor/frontend/init', function () {

		// Widgets
		elementorFrontend.hooks.addAction( 'frontend/element_ready/tastyc-hero-slider.default', function() {
			//sliders();
		} );
		
		elementorFrontend.hooks.addAction( 'frontend/element_ready/tastyc-cta.default', function() {
			if ( $('.tst-call-to-action').length ) {
			    var divider_el = $('.tst-call-to-action');
			    var divider_sec = divider_el.closest('section');

			    if ( divider_sec.length ) {
			      divider_sec.css('background-color', 'transparent');
			    }
			}
		} );

		// Global
		elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
			
		} );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
			
		} );
	});
})(jQuery);