let mix = require('laravel-mix');

mix
	.postCss('src/css/component-cart-drawer.css', 'assets')
	.js('src/js/cart-drawer.js', 'assets')
	.js('src/js/custom-cart.js', 'assets');
