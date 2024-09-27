import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				body: ['var(--font-roboto)'],
				heading: ['var(--font-poppins)'],
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			defaultTheme: 'dark',
			themes: {
				light: {
					colors: {
						text: '#2D2D2D',
						background: '#F5F5F5',
						primary: '#FF6B6B',
						secondary: '#4ECDC4',
						accent: '#FFD93D',
					},
				},
				dark: {
					colors: {
						text: '#E0E0E0',
						background: '#1A1A1A',
						primary: '#FF6B6B',
						secondary: '#4ECDC4',
						accent: '#FFD93D',
					},
				},
			},
		}),
	],
};
