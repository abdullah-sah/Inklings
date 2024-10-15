'use client';
import { useState, type FC } from 'react';
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
import { SearchIcon } from '@/components/icons';
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from '@nextui-org/dropdown';
import { Avatar } from '@nextui-org/avatar';

const Header: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuItems = siteConfig.navItems;

	// TODO: Change this once we have auth & a signin context/state
	const loggedInUser = 'Jason Bourne';
	const signedIn = true;

	return (
		<header className='sticky inset-x-0 top-0 z-50 flex items-center justify-center w-full'>
			{/* TODO: replace text with the logo: */}
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
					<NavbarBrand className='mr-4 text-xl font-bold font-heading'>
						Inklings
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
					{signedIn && (
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
									name={loggedInUser}
									size='sm'
									src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
								/>
							</DropdownTrigger>

							<DropdownMenu
								aria-label='Profile Actions'
								variant='flat'
								itemClasses={{
									base: 'data-[hover=true]:bg-secondary data-[hover=true]:text-cta',
								}}
							>
								<DropdownItem
									key='profile'
									className='gap-2 h-14 data-[hover=true]:bg-background data-[hover=true]:text-text cursor-default'
								>
									<p className='font-semibold capital '>Signed in as</p>
									<p className='font-semibold'>{loggedInUser}</p>
								</DropdownItem>
								<DropdownItem key='settings'>My Settings</DropdownItem>
								<DropdownItem key='posts'>My Posts</DropdownItem>
								<DropdownItem key='posts'>My Posts</DropdownItem>
							</DropdownMenu>
						</Dropdown>
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
