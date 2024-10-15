import { DiscordIcon, GithubIcon, TwitterIcon } from '@/components/icons';
import Link from 'next/link';
import type { FC } from 'react';

const Footer: FC = () => {
	return (
		<footer className='flex flex-row p-4 px-24 mt-8 rounded-t-3xl bg-secondary'>
			<section className='flex flex-col justify-between w-1/3'>
				<div>
					<h2 className='text-3xl font-heading text-bold'>Inklings</h2>
					<p className='text-sm font-body'>© 2024 Inklings</p>
				</div>

				<div className='flex flex-row justify-start py-4 mt-2 space-x-4'>
					{/* TODO: add this to the siteConfig, then can map over an array of socials to render */}
					<Link href='https://www.x.com'>
						<TwitterIcon className='transition-colors duration-150 fill-cta hover:fill-[#1DA1F2]' />
					</Link>

					<Link href='https://www.discord.com'>
						<DiscordIcon className='transition-colors duration-150 fill-cta hover:fill-[#7289DA]' />
					</Link>

					<Link href='https://www.github.com/abdullah-sah'>
						<GithubIcon className='transition-colors duration-150 fill-cta hover:fill-white' />
					</Link>
				</div>
			</section>

			<section className='flex flex-row w-2/3 gap-12'>
				<div className='w-1/2'>
					<h2 className='text-xl font-bold border-b-4 border-background font-heading w-fit'>
						Explore
					</h2>
					<ul className='text-cta'>
						<li>About</li>
						<li>Privacy</li>
						<li>Terms</li>
						<li>Sitemap</li>
					</ul>
				</div>

				<div className='w-1/2'>
					<h2 className='text-xl font-bold border-b-4 border-background font-heading w-fit'>
						The Developer (me)
					</h2>
					<ul className='text-cta'>
						<li>TechStack</li>
						<li>
							<Link href='https://www.github.com/abdullah-sah'>GitHub</Link>
						</li>
						<li>
							<Link href='https://www.abdullahsahraoui.dev'>Portfolio</Link>
						</li>
						<li>
							<Link href='https://www.abdullahsahraoui.dev/contact'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
