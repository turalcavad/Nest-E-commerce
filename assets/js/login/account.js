window.addEventListener("load", () => {
	let currentUser = JSON.parse(localStorage.getItem("currentUser"));

	if (currentUser == null) {
		window.location.href = "./page-login.html";
	} else {
		greetUser.textContent = `Hello ${currentUser.username}!`;
	}
});

logoutBtn?.addEventListener("click", () => {
	localStorage.removeItem("currentUser");
	window.location.href = "./page-login.html";
});
