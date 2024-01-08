/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		colors: {
			grey_dark: '#262228',
			green_med: '#007849',
			blue_med: '#0375B4',
			yellow_med: '#FFCE00',

			stone: colors.stone,
			sky: colors.sky,
			violet: colors.violet,
			gdnBlue: {
				100: '#052962',
			},
		},
		extend: {},
	},
	plugins: [],
};
