const prevIcon =
	'<span class="slider-prev-btn product-slider-btn"><i class="fa-solid fa-angle-left"></i></span>';
const nextIcon =
	'<span class="slider-next-btn product-slider-btn"><i class="fa-solid fa-angle-right"></i></span>';

$(".owl-one").owlCarousel({
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
	},
	items: 1,
});
