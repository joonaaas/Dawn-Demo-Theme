const cartIcon = document.querySelector('#cart-icon-bubble');
const body = document.querySelector('body');
const preScrim = document.querySelector('.pre-scrim');
const cartDrawer = document.querySelector('.cart-drawer__container');
const closeButton = document.querySelector('.cart-drawer__header button');

const list = document.querySelector('#cart-list');
const template = document.querySelector('#list-item-template');

const axios = require('axios').default;

// Open Drawer
cartIcon.addEventListener('click', () => {
	body.classList.toggle('show-cart-drawer');
	preScrim.classList.toggle('show-cart-drawer');
	cartDrawer.classList.toggle('show-cart-drawer');
});

// Close Drawer
preScrim.addEventListener('click', () => {
	body.classList.toggle('show-cart-drawer');
	preScrim.classList.toggle('show-cart-drawer');
	cartDrawer.classList.toggle('show-cart-drawer');
});

// Close Button
closeButton.addEventListener('click', () => {
	body.classList.toggle('show-cart-drawer');
	preScrim.classList.toggle('show-cart-drawer');
	cartDrawer.classList.toggle('show-cart-drawer');
});

// render cart item data to cart drawer
// - img
// - title
// - product link
// - price
// - sub price
document.addEventListener('DOMContentLoaded', () => {
	axios
		.get('/cart.js')
		.then(function (response) {
			let data = response.data;
			let items = data.items;
			let itemsSubPrice = data.items_subtotal_price;
			console.log(items);
			items.forEach((item) => {
				renderCartItems(item);
			});
		})
		.catch(function (error) {
			console.log(error);
		});
});

function renderCartItems(item) {
	const templateClone = template.content.cloneNode(true);

	const image = templateClone.querySelector('[data-list-item-image]');
	const title = templateClone.querySelector('[data-list-item-title]');
	const quantity = templateClone.querySelector('[data-list-item-quantity]');
	const price = templateClone.querySelector('[data-list-item-price]');

	// image.src = item.featured_image.url;
	title.textContent = item.title;
	quantity.value = item.quantity;
	price.textContent = item.price;
	list.appendChild(templateClone);
}
