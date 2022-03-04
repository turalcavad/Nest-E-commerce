const mobileMenu = document.querySelector(".mobile-menu");

//buttons
const openButton = document.querySelector(".mobile-menu-btn");
const closeButton = document.querySelector(".close-mobile-btn");

const openMobileMenu = () => {
	mobileMenu.classList.add("mobile-menu-active");
};

const closeMobileMenu = () => {
	mobileMenu.classList.remove("mobile-menu-active");
};

openButton.addEventListener("click", openMobileMenu);
closeButton.addEventListener("click", closeMobileMenu);
