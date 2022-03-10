"use strict";
const addButtons = document.querySelectorAll(".add");
const cartProduct = document.querySelectorAll(".cart-product-wrapper");
const cartQuantity = document.querySelector(".cart-quantity-icon");

let products = [];

if (localStorage.getItem("cart") != null) {
	cartQuantity.textContent = JSON.parse(localStorage.getItem("cart")).length;
}

const addProduct = function (event) {
	event.preventDefault();
	if (localStorage.getItem("cart") != null) {
		cartQuantity.textContent = JSON.parse(localStorage.getItem("cart")).length;
	} else {
		localStorage.setItem("cart", JSON.stringify(products));
	}

	//for not losing data after reload
	if (products.length == 0) products = JSON.parse(localStorage.getItem("cart"));

	const shopItem =
		event.target.parentElement.parentElement.parentElement.parentElement;

	const productContent = shopItem.children[2];


	//product image
	let productImage = shopItem.querySelector(".default-img");
	productImage = productImage.getAttribute("src");

	//hoverimg
	let productHoverImage = shopItem.querySelector(".hover-img");
	productHoverImage = productHoverImage.src;

	let item = {
		productName: productContent.children[1].textContent
			.replace(/\s+/g, " ")
			.trim(),
		price: productContent.children[3].children[0].children[0].textContent
			.replace(/\s+/g, " ")
			.trim(),
		quantity: 1,
		productImage: productImage,
		productHoverImage: productHoverImage,
	};

	let ourProduct = products.filter(
		(product) => product.productName === item.productName
	);
	if (ourProduct.length > 0) {
		ourProduct[0].quantity++;
	} else {
		products.push(item);
	}


	

	localStorage.setItem("cart", JSON.stringify(products));
	cartQuantity.textContent = JSON.parse(localStorage.getItem("cart")).length;
};

addButtons.forEach((addButton) => {
	addButton.addEventListener("click", addProduct);
});

let body = document.querySelector("body");

body.addEventListener("DOMSubtreeModified", function () {
	cartQuantity.textContent = JSON.parse(localStorage.getItem("cart")).length;
});

//adding products to cart

// const cartTable = document.querySelector(".cart-table");

// const renderCart = function () {
// 	if (cartTable == null) return;

// 	let cartItems = JSON.parse(localStorage.getItem("cart"));

// 	cartItems.forEach((item) => {
// 		cartTable.insertAdjacentHTML(
// 			"beforeend",
// 			`<div class="cart-product-wrapper">
//         <div class="product-cart cart-item">
//             <img class="default-img" src="${item.productImage}" alt="">
//             <img src="${item.productHoverImage}" alt="" class="hover-img">
//             <div class="product-content">
//                 <a class="product-tittle" href="">Snack</a>
//                 <h4>
//                     <a class="product-description" href="shop.html">${
// 											item.productName
// 										}</a>
//                 </h4>

//                 <div class="product-rate">
//                     <div class="product-rating" style="width: 90%"></div>
//                 </div>
//             </div>
//         </div>

//         <div class="cart-product-info">
//             <span class="unit-price">${item.price}</span>
//             <span class="unit-price unit-quantity">${item.quantity}</span>
//             <span class="unit-subtotal">$${
// 							item.price.replace(/\$/g, "") * item.quantity
// 						}</span>
//             <i class="fa-solid fa-trash delete-cart-item"></i>
//         </div>
//     </div>`
// 		);
// 	});
// };

// window.addEventListener("load", renderCart);

// window.addEventListener("load", function () {
// 	//delete product from cart

// 	cartQuantity.textContent = products.length;

// 	let deleteBtn = document.querySelectorAll(".delete-cart-item");

// 	const deleteProduct = function (event) {
// 		const shopItem = event.target.parentElement.parentElement;

// 		const quantity = shopItem.querySelector(".unit-quantity");
// 		console.log(quantity);

// 		//remove from html
// 		if (parseInt(quantity.textContent) > 1) {
// 			quantity.textContent = parseInt(quantity.textContent) - 1;
// 		} else {
// 			shopItem.remove();
// 		}

// 		//getting products name from cart
// 		let productName = shopItem.querySelector(
// 			".product-description"
// 		).textContent;

// 		//remove item from local storage
// 		let productArr = JSON.parse(localStorage.getItem("cart"));
// 		let newProductArr = productArr.filter(
// 			(item) => item.productName !== productName
// 		);
// 		localStorage.setItem("cart", JSON.stringify(newProductArr));
// 	};

// 	deleteBtn.forEach((deleteBtn) => {
// 		deleteBtn.addEventListener("click", deleteProduct);
// 	});
// });

// //delete all products from cart

// const deleteAll = document
// 	.querySelector(".delete-cart")
// 	.addEventListener("click", function () {
// 		localStorage.clear();
// 		window.location.reload();

// 		cartProduct.forEach((item) => {
// 			item.remove();
// 		});
// 	});

// //change cart quantity in icon
