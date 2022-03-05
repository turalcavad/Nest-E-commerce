const prevIcon =
	'<span class="slider-prev-btn product-slider-btn"><i class="fa-solid fa-angle-left"></i></span>';
const nextIcon =
	'<span class="slider-next-btn product-slider-btn"><i class="fa-solid fa-angle-right"></i></span>';

$(".owl-one").owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	nav: true,
	autoplay: true,

	navText: [prevIcon, nextIcon],
	dots: false,
	responsive: {
		0: {
			items: 1,
		},
	},
	items: 1,
});

const catButtonPrev =
	'<span class="cat-prev-btn product-slider-btn"><i class="fa-solid fa-angle-left"></i></span>';
const catButtonNext =
	'<span class="cat-next-btn product-slider-btn"><i class="fa-solid fa-angle-right"></i></span>';

$(".owl-two").owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	nav: true,
	navText: [catButtonPrev, catButtonNext],
	dots: false,
	autoplay: true,
	responsive: {
		1400: {
			items: 10,
		},
		1200: {
			items: 8,
		},
		992: {
			items: 6,
		},
		768: {
			items: 4,
		},
	},
	// items: 10,
});
