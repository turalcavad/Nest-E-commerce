"use strict";

const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const loginButton = document.querySelector(".login-btn");
const greetUser = document.querySelector(".user-greet");

const logoutBtn = document.querySelector(".logout-btn");

const loginValidation = function () {
	// if inputs are empty
	console.log($(".password-blank-validation"));

	if (usernameInput.value === "") {
		$(".email-blank-validation").show();
		$(".username-input").addClass("error-input");
	} else {
		loginButton.disabled = false;
		$(".email-blank-validation").hide();
		$(".username-input").removeClass("error-input");
	}
	if (passwordInput.value === "") {
		$(".password-blank-validation").show();
	} else {
		loginButton.disabled = false;
		$(".password-blank-validation").hide();
	}

	// username length check
	if (usernameInput.value.length <= 5 && usernameInput.value != "") {
		$(".username-length-validation").show();
		$(".username-input").addClass("error-input");
	} else {
		$(".username-length-validation").hide();
	}

	//password length check
	if (passwordInput.value.length <= 8 && passwordInput.value != "") {
		$(".password-length-validation").show();
		$(".username-input").addClass("error-input");
	} else {
		$(".password-length-validation").hide();
	}
};
const login = function (e) {
	e.preventDefault();
	loginValidation();
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
