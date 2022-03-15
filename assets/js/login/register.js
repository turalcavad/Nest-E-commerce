const usernameInput = document.querySelector(".username-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");
const confirmPasswordInput = document.querySelector(".confirm-password-input");
const registerBtn = document.querySelector(".register-button");

let users = [];

const registerUser = function (e) {
	console.log(e);
	e.preventDefault();

	//getting user data
	let username = usernameInput.value;
	let email = emailInput.value;
	let password = passwordInput.value;
	let confirmPassword = confirmPasswordInput.value;

	users = localStorage.getItem("users")
		? JSON.parse(localStorage.getItem("users"))
		: [];

	//setting user data
	if (password !== confirmPassword) {
		alert("Passwords do not match");
	} else {
		let user = {
			username: username,
			email: email,
			password: password,
		};

		users.push(user);

		localStorage.setItem("users", JSON.stringify(users));

		console.log(window.location.href);

		location.href = "./page-login.html";
	}
};

registerBtn.addEventListener("click", registerUser);
