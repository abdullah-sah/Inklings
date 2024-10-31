'use client';

import { useEffect, useState, type FC } from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import { siteConfig } from '@/config/site';
import { Logo, SearchIcon } from '@/components/icons';
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/dropdown';
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { useUserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuItems = siteConfig.navItems;

	const { user, signedIn, signOut } = useUserContext();
	const router = useRouter();

	useEffect(() => {}, [signedIn]);

	return (
		<header className='sticky inset-x-0 top-0 z-50 flex items-center justify-center w-full'>
			<Navbar
				isBordered
				onMenuOpenChange={setIsMenuOpen}
				className='w-full bg-secondary sm:rounded-full sm:mt-3 sm:mx-3'
				classNames={{ wrapper: 'min-w-full' }}
			>
				<NavbarContent as='div' justify='start'>
					<NavbarMenuToggle
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						className='sm:hidden'
					/>
					<NavbarBrand className='mr-4' as='a' href='/'>
						<Logo className='fill-text' size={80} />
					</NavbarBrand>
					<NavbarContent className='hidden gap-6 sm:flex' justify='center'>
						{menuItems.map((item, index) => (
							<NavbarItem key={`${item.label}#1 - ${index}`}>
								<Link href={item.href} className='text-text'>
									{item.label}
								</Link>
							</NavbarItem>
						))}
					</NavbarContent>
				</NavbarContent>

				<NavbarContent as='div' className='items-center' justify='end'>
					<Input
						classNames={{
							base: 'max-w-full sm:max-w-[10rem] h-10',
							mainWrapper: 'h-full',
							input: 'text-small',
							inputWrapper:
								'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 group-data-[focus=true]:bg-background',
						}}
						placeholder='Type to search...'
						size='sm'
						startContent={<SearchIcon size={18} />}
						type='search'
					/>
					{signedIn && user ? (
						<Dropdown
							placement='bottom-end'
							className='bg-background text-text'
						>
							<DropdownTrigger>
								<Avatar
									isBordered
									as='button'
									className='transition-transform min-w-[32px]'
									color='secondary'
									name={user.username}
									size='sm'
									src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
								/>
							</DropdownTrigger>

							<DropdownMenu
								aria-label='Profile Actions'
								variant='solid'
								itemClasses={{
									base: 'data-[hover=true]:bg-secondary data-[hover=true]:text-cta',
								}}
							>
								<DropdownItem
									key='profile'
									className='gap-2 h-14 data-[hover=true]:bg-background data-[hover=true]:text-text cursor-default'
									textValue={`Signed in as ${user.username}`}
								>
									<p className='font-semibold capital '>Signed in as</p>
									<p className='font-semibold'>{user.username}</p>
								</DropdownItem>
								<DropdownItem
									key='profile#2'
									onClick={() => router.push(`${user.username}/profile`)}
								>
									My Profile
								</DropdownItem>
								<DropdownItem key='posts'>My Posts</DropdownItem>
								<DropdownItem
									key='logout'
									className='data-[hover=true]:bg-danger-50 data-[hover=true]:text-danger'
									onClick={signOut}
								>
									Log Out
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					) : (
						<Button
							as='a'
							href='/sign-in'
							variant='solid'
							className='font-bold bg-cta text-text font-heading'
						>
							Sign in
						</Button>
					)}
				</NavbarContent>

				<NavbarMenu>
					{menuItems.map((item, index) => (
						<NavbarMenuItem key={`${item.label}-${index}`}>
							<Link
								className='w-full font-body text-text'
								href={`/${item.href}`}
								size='lg'
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</header>
	);
};

export default Header;
