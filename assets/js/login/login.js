"use strict";

const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const loginButton = document.querySelector(".login-btn");
const greetUser = document.querySelector(".user-greet");

const logoutBtn = document.querySelector(".logout-btn");

const login = function (e) {
	e.preventDefault();
	let users = JSON.parse(localStorage.getItem("users"));
	console.log(users);
	let username = usernameInput.value;
	let password = passwordInput.value;

	let user = users.find((user) => {
		return user.username === username && user.password === password;
	});

	if (user) {
		window.location.href = "./account.html";
		localStorage.setItem("currentUser", JSON.stringify(user));
	} else {
		alert("Invalid username or password");
	}
};

loginButton?.addEventListener("click", login);


