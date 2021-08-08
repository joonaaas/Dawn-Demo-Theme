const cartIcon = document.querySelector('#cart-icon-bubble');
const body = document.querySelector('body');
const preScrim = document.querySelector('.pre-scrim');
const cartDrawer = document.querySelector('.cart-drawer__container');
const closeButton = document.querySelector('.cart-drawer__header button');

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
