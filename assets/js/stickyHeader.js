const mainHeader = document.querySelector(".header-bottom");

window.addEventListener("scroll", function () {
	if ($(window).scrollTop() && $(window).innerWidth() > 991) {
		mainHeader.classList.add("sticky");
		mainHeader.classList.add("p-10");
	} else {
		mainHeader.classList.remove("sticky");
		mainHeader.classList.remove("p-10");
	}
});
