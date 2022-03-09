const count = document.querySelectorAll(".count");

const countSection = document.querySelector(".about-count");
let done = true;

const counter = () => {
	windowHeight = window.innerHeight;

	if (countSection.getBoundingClientRect().top < windowHeight - 100 && done) {
		count.forEach((counter) => {
			counter.innerText = "0";

			const updateCounter = () => {
				const target = +counter.getAttribute("data-target");
				const c = +counter.innerText;

				const increment = target / 100;

				if (c < target) {
					counter.innerText = `${Math.ceil(c + increment)}`;

					setTimeout(updateCounter, 40);
				} else {
					counter.innerText = target;
				}
			};
			updateCounter();
		});
		done = false;
	}
};

window.addEventListener("scroll", counter);
