import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { fontBody } from '@/config/fonts';
import { GithubIcon } from '@/components/icons';

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
					'min-h-screen bg-background font-roboto antialiased',
					fontBody.variable
				)}
			>
				<Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
					<div className='relative flex flex-col h-screen'>
						<main className='container flex-grow px-6 pt-16 mx-auto max-w-7xl'>
							{children}
						</main>
						<footer className='flex items-center justify-center w-full py-3'>
							<Link
								isExternal
								className='flex items-center gap-1 text-current'
								href='https://www.github.com/abdullah-sah/Inklings'
								title='Follow on GitHub'
							>
								<GithubIcon />
								Follow on GitHub
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
