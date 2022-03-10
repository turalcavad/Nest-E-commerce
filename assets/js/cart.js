//adding products to cart

const cartTable = document.querySelector(".cart-table");
const cartQuantity = document.querySelector(".cart-quantity-icon");
const totalPrice = document.querySelector(".total-price");

let products = [];

const updateTotalPrice = function (subTotal) {
	let sum = 0;
	subTotal.forEach((item) => {
		sum = sum + Number(item.textContent.replace(/\$/g, ""));
		if (subTotal.length == 0) {
			totalPrice.textContent = "$0";
		} else {
			totalPrice.textContent = "$" + sum;
		}
	});
};

const renderCart = function () {
	if (cartTable == null) return;
	if (products.length == 0) products = JSON.parse(localStorage.getItem("cart"));

	let cartItems = JSON.parse(localStorage.getItem("cart"));

	// cartItems.forEach(item => {
	// 	if (item.quantity ==0 &&) {

	// 	}

	// })

	cartItems.forEach((item) => {
		cartTable.insertAdjacentHTML(
			"beforeend",
			`<div class="cart-product-wrapper">
        <div class="product-cart cart-item">
            <img class="default-img" src="${item.productImage}" alt="">
            <img src="${item.productHoverImage}" alt="" class="hover-img">
            <div class="product-content">
                <a class="product-tittle" href="">Snack</a>
                <h4>
                    <a class="product-description" href="shop.html">${
											item.productName
										}</a>
                </h4>
    
                <div class="product-rate">
                    <div class="product-rating" style="width: 90%"></div>
                </div>
            </div>
        </div>
    
        <div class="cart-product-info">
            <span class="unit-price">${item.price}</span>
			<div class="quantity-box">
				<span class="unit-quantity unit-price">${item.quantity}</span>
				<i class="fa-solid fa-angle-up qty-up"></i>
				<i class="fa-solid fa-angle-down qty-down"></i>
			</div>           
            <span class="unit-subtotal">$${
							item.price.replace(/\$/g, "") * item.quantity
						}</span>
            <i class="fa-solid fa-trash delete-cart-item"></i>
        </div>
    </div>`
		);
	});
	const subTotal = document.querySelectorAll(".unit-subtotal");

	updateTotalPrice(subTotal);

	// subTotal.forEach((item) => {
	// 	console.log(item.textContent);
	// 	sum = sum + Number(item.textContent.replace(/\$/g, ""));
	// 	totalPrice.textContent = "$" + sum;
	// });
};

window.addEventListener("load", renderCart);

window.addEventListener("load", function () {
	//delete product from cart

	let deleteBtn = document.querySelectorAll(".delete-cart-item");
	const qtyUp = document.querySelector(".qty-up");
	const qtyDown = document.querySelector(".qty-down");

	const deleteProduct = function (event) {
		const shopItem = event.target.parentElement.parentElement;

		const quantity = shopItem.querySelector(".unit-quantity");

		//remove from html

		shopItem.remove();

		//getting products name from cart
		let productName = shopItem.querySelector(
			".product-description"
		).textContent;
		let productQuantity = shopItem.querySelector(".unit-quantity").textContent;

		//remove item from local storage
		let productArr = JSON.parse(localStorage.getItem("cart"));

		let newProductArr = productArr.filter(
			(item) => item.productName !== productName
		);
		localStorage.setItem("cart", JSON.stringify(newProductArr));

		cartQuantity.textContent = JSON.parse(localStorage.getItem("cart")).length;
		const subTotal = document.querySelectorAll(".unit-subtotal");

		updateTotalPrice(subTotal);
	};

	deleteBtn.forEach((deleteBtn) => {
		deleteBtn.addEventListener("click", deleteProduct);
	});

	qtyUp.addEventListener("click", function () {
		let cartItems = JSON.parse(localStorage.getItem("cart"));
		let quantity = document.querySelector(".unit-quantity");
		let currentProduct =
			quantity.parentElement.parentElement.parentElement.querySelector(
				".product-description"
			).textContent;

		cartItems.forEach((item) => {
			if (item.productName == currentProduct) {
				item.quantity = Number(item.quantity) + 1;
				localStorage.setItem("cart", JSON.stringify(cartItems));
			} else {
				return;
			}
		});
		window.location.reload();
	});

	qtyDown.addEventListener("click", function () {
		let cartItems = JSON.parse(localStorage.getItem("cart"));
		let quantity = document.querySelector(".unit-quantity");
		let currentProduct =
			quantity.parentElement.parentElement.parentElement.querySelector(
				".product-description"
			).textContent;

		cartItems.forEach((item) => {
			if (item.productName == currentProduct && item.quantity > 1) {
				item.quantity = Number(item.quantity) - 1;
				localStorage.setItem("cart", JSON.stringify(cartItems));
			} else {
				return;
			}
		});
		window.location.reload();
	});
});

//delete all products from cart

const deleteAll = document
	.querySelector(".delete-cart")
	.addEventListener("click", function () {
		localStorage.clear();
		window.location.reload();

		cartProduct.forEach((item) => {
			item.remove();
		});
	});

//change cart quantity in icon

//detect changes on cart

let body = document.querySelector("body");

body.addEventListener("DOMSubtreeModified", function () {
	cartQuantity.textContent = JSON.parse(localStorage.getItem("cart")).length;
});
