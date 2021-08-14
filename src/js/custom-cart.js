const forms = document.querySelectorAll('.quick-add-cart');
const body = document.querySelector('body');
const preScrim = document.querySelector('.pre-scrim');
const cartDrawer = document.querySelector('.cart-drawer__container');

const axios = require('axios').default;

// * Quick add to cart on the collection --------------------------
forms.forEach((form) => {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);

		axios
			.post('/cart/add.js', {
				items: [
					{
						id: formProps.id,
						quantity: 1,
					},
				],
			})
			.then(function (response) {
				console.log(response);
				getCartItems();
				showCartDrawer();
			})
			.catch(function (error) {
				console.log(error);
				console.log(formProps);

				showCartDrawer();
			});
	});
});

function showCartDrawer() {
	body.classList.add('show-cart-drawer');
	preScrim.classList.add('show-cart-drawer');
	cartDrawer.classList.add('show-cart-drawer');
}

// * Rendering Cart Item to the cart drawer --------------------------

const list = document.querySelector('#cart-list');
const template = document.querySelector('#list-item-template');
const emptyText = document.querySelector('[data-cart-empty]');

// - img
// - title
// - product link
// - price
// - sub price
document.addEventListener('DOMContentLoaded', () => {
	getCartItems();
});

function getCartItems() {
	axios
		.get('/cart.js')
		.then(function (response) {
			let data = response.data;

			let cartItems = [];
			cartItems = data.items;
			console.log(cartItems);

			checkCartItemsLength(cartItems);

			let itemsSubPrice = data.items_subtotal_price;

			list.innerHTML = '';
			cartItems.forEach((item) => {
				renderCartItems(item);
			});
		})
		.catch(function (error) {
			console.log(error);
		});
}

function renderCartItems(item) {
	const templateClone = template.content.cloneNode(true);
	// list.innerHTML = '';
	const listID = templateClone.querySelector('[data-list-item-id]');
	const imageWrapperLink = templateClone.querySelector(
		'[data-list-item-image-wrapper]'
	);
	const image = templateClone.querySelector('[data-list-item-image]');
	const titleWrapperLink = templateClone.querySelector(
		'[data-list-item-title-wrapper]'
	);
	const title = templateClone.querySelector('[data-list-item-title]');
	const quantity = templateClone.querySelector('[data-list-item-quantity]');
	const price = templateClone.querySelector('[data-list-item-price]');

	listID.dataset.listItemId = item.id;
	imageWrapperLink.href = item.url;
	titleWrapperLink.href = item.url;
	image.src = item.featured_image.url;
	title.textContent = item.title;
	quantity.value = item.quantity;
	price.textContent = item.price;

	list.appendChild(templateClone);
}

function checkCartItemsLength(items) {
	const checkoutButton = document.querySelector('[data-show-checkout-button]');

	console.log(checkoutButton);
	if (items.length) {
		emptyText.dataset.cartEmpty = 'false';
		checkoutButton.dataset.showCheckoutButton = 'true';
	} else {
		checkoutButton.dataset.showCheckoutButton = 'false';
		emptyText.dataset.cartEmpty = 'true';
	}
}
