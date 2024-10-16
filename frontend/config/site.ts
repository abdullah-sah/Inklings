export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'Inklings',
	navItems: [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Blogs',
			href: '/blogs',
		},
		{
			label: 'Posts',
			href: '/posts',
		},
		{
			label: 'Profile',
			href: '/profile',
		},
		{
			label: 'About',
			href: '/about',
		},
	],
	links: {
		github: 'https://github.com/nextui-org/nextui',
		twitter: 'https://twitter.com/getnextui',
		docs: 'https://nextui.org',
		discord: 'https://discord.gg/9b6yyZKmH4',
		sponsor: 'https://patreon.com/jrgarciadev',
	},
	showSidebar: true,
};
