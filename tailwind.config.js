/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const height = {
	'30v': '30vh',
	'40v': '40vh',
	'50v': '50vh',
	'60v': '60vh',
	'75v': '75vh',
	'85v': '85vh',
};
const width = {
	'30w': '30vw',
	'40w': '40vw',
	'50w': '50vw',
	'60w': '60vw',
	'75w': '75vw',
	'85w': '85vw',
};
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				blue: '#0d00a4',
				violet: '#22007c',
				'violet-transparent': '#21007c91',
				'dark-violet': '#140152',
				black: '#02010a',
				coral: '#FF7F50',
				mango: '#FF8C00',
				'burnt-orange': '#CC5500',
				'golden-yellow': '#FFD700',
				'lemon-yellow': '#FFFF00',
				ochre: '#CC7722',
				crimson: '#DC143C',
				'crimson-light': '#F02850',
				'crimson-shadow': '#dc143c6f',
			},
			height: height,
			minHeight: height,
			maxHeight: height,
			width: width,
			maxWidth: width,
			minWidth: width,
			fontFamily: {
				'poppins-font': ['Poppins', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
