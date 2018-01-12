(function ($) {
		$.fn.makeSticky = function (options) {

			var settings = $.extend({
				stickBelow: false,
				oneWay: false,
				shadow: true
			}, options);

			var $el = $(this),
					didScroll,
					lastScrollTop = 0,
					h;

			if (settings.stickBelow !== false) {
				h = settings.stickBelow.height();
			} else {
				h = 0;
			}

			var makeSticky = function() {
				$('body').addClass('make-sticky-active');
				$el.addClass('active');
				$('.make-sticky-wrapper').css({
					top: h
				}).addClass('active');
			}
			var removeSticky = function() {
				$('body').removeClass('make-sticky-active');
				$el.removeClass('active');
				$('.make-sticky-wrapper').removeClass('active').css({top: 'auto'});
			}

			if (settings.shadow == true) {
				$el.wrap('<div class="make-sticky-wrapper shadow"><div class="container">');
			} else {
				$el.wrap('<div class="make-sticky-wrapper"><div class="container">');

			}
			$(window).scroll(function (event) {
				didScroll = true;
			});
			setInterval(function () {
				if (didScroll) {
					hasScrolled();
					didScroll = false;
				}
			}, 250);
			var hasScrolled = function() {
				var st = $(this).scrollTop();

				if ( settings.oneWay ) {
					if (st > lastScrollTop && st > h || st < h ) {
						// Scroll Down
						removeSticky();
					} else {
						// Scroll Up
						if (st + $(window).height() < $(document).height()) {
							makeSticky();
						}
					}
					lastScrollTop = st;
				} else {
					if ( st > h) {
						makeSticky();
					} else {
						removeSticky();
					}
				}

			}
		}
}(jQuery));
