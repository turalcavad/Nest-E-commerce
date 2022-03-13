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
	autoHeight: true,

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
const sellButtonPrev =
	'<span class="sell-prev-btn product-slider-btn"><i class="fa-solid fa-angle-left"></i></span>';
const sellButtonNext =
	'<span class="sell-next-btn product-slider-btn"><i class="fa-solid fa-angle-right"></i></span>';
$(".owl-three").owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	nav: true,
	navText: [sellButtonPrev, sellButtonNext],
	dots: false,
	autoplay: true,
	responsive: {
		1400: {
			items: 4,
		},
		1200: {
			items: 3,
		},
		992: {
			items: 3,
		},
		768: {
			items: 3,
		},
		576: {
			items: 3,
		},
	},
	// items: 10,
});

$(".owl-four").owlCarousel({
	loop: true,
	margin: 20,
	responsiveClass: true,
	nav: true,
	autoplay: true,
	navText: [sellButtonPrev, sellButtonNext],

	dots: false,
	responsive: {
		0: {
			items: 3,
		},
	},
	items: 1,
});
