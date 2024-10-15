import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontBody } from '@/config/fonts';
import Footer from '@/components/footer';
import Header from '@/components/header';

export const metadata: Metadata = {
	title: siteConfig.name,
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang='en'>
			<head />
			<body
				className={clsx(
					'min-h-screen bg-background font-roboto text-text antialiased',
					fontBody.variable
				)}
			>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
					<Header />
					<div className='relative flex flex-col h-screen'>
						<main className='container sm:grid flex-grow sm:grid-cols-[3fr_1fr] px-6 pt-12 mx-auto max-w-7xl sm:px-16 lg:px-20'>
							{children}
						</main>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
