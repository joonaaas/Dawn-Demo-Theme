const forms = document.querySelectorAll('.quick-add-cart');
const body = document.querySelector('body');
const preScrim = document.querySelector('.pre-scrim');
const cartDrawer = document.querySelector('.cart-drawer__container');

const axios = require('axios').default;

forms.forEach((form) => {
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		axios.post('/cart/add.js', {
			items: [
				{
					id: formProps.id,
					quantity: 1,
				},
			],
		});

		openCartDrawer();
	});
});

function openCartDrawer() {
	body.classList.add('show-cart-drawer');
	preScrim.classList.add('show-cart-drawer');
	cartDrawer.classList.add('show-cart-drawer');
}
