const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

console.log(tabContents);

console.log(tabContents);

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		tabs.forEach((tab) => {
			tab.classList.remove("tab--active");
		});
		tab.classList.add("tab--active");

		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach((tabContent) =>
			tabContent.classList.remove("tab-content--active")
		);

		target.classList.add("tab-content--active");
	});
});
