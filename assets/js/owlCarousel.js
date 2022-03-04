const prevIcon =
	'<span class="slider-prev-btn product-slider-btn"><i class="fa-solid fa-angle-left"></i></span>';
const nextIcon =
	'<span class="slider-next-btn product-slider-btn"><i class="fa-solid fa-angle-right"></i></span>';

$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	nav: true,
	navText: [prevIcon, nextIcon],
	dots: false,
	responsive: {
		0: {
			items: 1,
		},
		// 600: {
		// 	items: 3,
		// 	nav: false,
		// },
		// 1000: {
		// 	items: 5,
		// 	nav: true,
		// 	loop: false,
		// },
	},
	items: 1,
});
