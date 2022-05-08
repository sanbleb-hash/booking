module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: { poppins: ['Poppins', 'sans-serif'] },
			colors: {
				'brand-primary': '#003580',
				'brand-secondary': '0042a0',
				'brand-tertiary': '002a66',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
