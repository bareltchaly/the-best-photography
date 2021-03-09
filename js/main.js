(function ($) {

	/**loader */
	var loader = '<div style="" id="ctn-preloader" class="ctn-preloader"><div class="loader_wrapper"><div class="camera"><div class="lens"></div><div class="flashLight"></div><div class="picture"><div class="imgBox"><img src="./best_logo_.jpg" /></div></div><div class="mouse"></div></div><div class="loader-dots"><span style="--i:1;">L</span><span style="--i:2;">o</span><span style="--i:3;">a</span><span style="--i:4;">d</span><span style="--i:5;">i</span><span style="--i:6;">n</span><span style="--i:7;">g</span><span style="--i:8;">.</span><span style="--i:9;">.</span><span style="--i:10;">.</span></div></div></div>'
	$('body').append(loader);
	$(window).on('load', function () {
		setTimeout(removeLoader, 500); //wait for page load PLUS two seconds.

		AOS.refresh();
	});
	function removeLoader() {
		$("#ctn-preloader").fadeOut(500, function () {
			// fadeOut complete. Remove the loading div
			$("#ctn-preloader").remove(); //makes page more lightweight
		});
	}

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();


	// Scrollax
	$.Scrollax();

	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-ios-arrow-back'></span>", "<span class='ion-ios-arrow-forward'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			autoplay: true,
			items: 1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
		if ($.fn.owlCarousel) {
			var instagramFeedSlider = $('.instragram-feed-area');
			instagramFeedSlider.owlCarousel({
				items: 6,
				loop: true,
				dots: false,
				autoplay: true,
				smartSpeed: 1000,
				autoplayTimeout: 3000,
				responsive: {
					0: {
						items: 2
					},
					576: {
						items: 3
					},
					768: {
						items: 4
					},
					992: {
						items: 5
					},
					1200: {
						items: 6
					}
				}
			})
		}
	};
	carousel();



	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.f_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();



	// *********************************
	// :: 5.0 Masonary Gallery Active Code
	// *********************************

	if ($.fn.imagesLoaded) {
		$('.alime-portfolio').imagesLoaded(function () {
			// filter items on button click
			$('.project-menu').on('click', 'button', function () {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});
			// init Isotope
			var $grid = $('.alime-portfolio').isotope({
				itemSelector: '.single_gallery_item',
				percentPosition: true,
				masonry: {
					columnWidth: '.single_gallery_item'
				}
			});
		});
	}
	// ***********************************
	// :: 6.0 Portfolio Button Active Code
	// ***********************************

	$('.project-menu button.btn').on('click', function () {
		$('.project-menu button.btn').removeClass('active');
		$(this).addClass('active');
	})
	// *********************************
	// :: 9.0 Magnific Popup Active Code
	// *********************************
	if ($.fn.magnificPopup) {
		$('.video-play-btn').magnificPopup({
			type: 'iframe'
		});
		$('.portfolio-img').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
				preload: [0, 2],
				navigateByImgClick: true,
				tPrev: 'Previous',
				tNext: 'Next'
			}
		});
	}



	//counter   
	var counted = 0;
	$(window).scroll(function () {

		var oTop = $('#counter').offset().top - window.innerHeight;
		if (counted == 0 && $(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-target');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				},

					{

						duration: 6000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
							//alert('finished');
						}

					});
			});
			counted = 1;
		}

	});

	//responcive grid
	var gallery = document.querySelector('#gallery');
	var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
	var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
	var resizeAll = function () {
		var altura = getVal(gallery, 'grid-auto-rows');
		var gap = getVal(gallery, 'grid-row-gap');
		gallery.querySelectorAll('.gallery-item').forEach(function (item) {
			var el = item;
			el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
		});
	};
	gallery.querySelectorAll('img').forEach(function (item) {
		item.classList.add('byebye');
		if (item.complete) {
			console.log(item.src);
		}
		else {
			item.addEventListener('load', function () {
				var altura = getVal(gallery, 'grid-auto-rows');
				var gap = getVal(gallery, 'grid-row-gap');
				var gitem = item.parentElement.parentElement;
				gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
				item.classList.remove('byebye');
			});
		}
	});
	window.addEventListener('resize', resizeAll);
	gallery.querySelectorAll('.gallery-item').forEach(function (item) {
		item.addEventListener('click', function () {
			window.location.href = "./gallery.html";
		});
	});




	AOS.init({
		duration: 1400
	})




})(jQuery);


