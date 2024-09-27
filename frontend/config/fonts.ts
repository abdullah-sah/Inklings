import { Poppins, Roboto } from 'next/font/google';

export const fontBody = Roboto({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-roboto',
});

export const fontHeading = Poppins({
	weight: '700',
	subsets: ['latin'],
	variable: '--font-poppins',
});
