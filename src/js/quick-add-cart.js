const forms = document.querySelectorAll('.quick-add-cart');
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
	});
});
