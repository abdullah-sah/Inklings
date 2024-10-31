'use client';

import { useState, type FC } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useUserContext } from '@/context/UserContext';
import { Link } from '@nextui-org/link';

const formSchema = z.object({
	username: z
		.string()
		.min(2, { message: 'Username needs to be at least 2 characters.' })
		.max(50, { message: `Username can't be longer than 50 characters.` }),
	password: z
		.string()
		.min(8, { message: 'Password needs to be at least 8 characters.' }),
});

const SignInForm: FC = () => {
	const router = useRouter();
	const { signIn } = useUserContext();
	const [error, setError] = useState<string | null>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			const res = await signIn(values.username, values.password);
			if (res) {
				router.push('/');
			} else {
				setError('Username or password is incorrect :(');
			}
		} catch (error) {
			// TODO: find a cleaner solution that just typecasting
			setError(error as string);
		}
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col w-full gap-2 px-12 md:px-2 md:w-full'
			>
				<h1 className='text-3xl font-bold font-heading'>Sign in</h1>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormControl>
								<Input
									placeholder='Type username here'
									label='Username'
									labelPlacement='outside'
									isClearable
									onClear={() => field.onChange('')}
									classNames={{
										inputWrapper:
											'text-text border-cta data-[hover=true]:border-cta/90',
										input: 'text-md text-text font-body',
									}}
									variant='bordered'
									{...field}
								/>
							</FormControl>
							<FormMessage className='text-danger-600' />

							<FormDescription className='pb-2'>
								This is your public display name.
							</FormDescription>
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem className='flex flex-col'>
							<FormControl>
								<Input
									type='password'
									placeholder='Type password here'
									label='Password'
									labelPlacement='outside'
									isClearable
									onClear={() => field.onChange('')}
									classNames={{
										inputWrapper:
											'text-text border-cta data-[hover=true]:border-cta/90',
										input: 'text-md text-text font-body',
									}}
									variant='bordered'
									{...field}
								/>
							</FormControl>
							<FormMessage className='text-danger-600' />
						</FormItem>
					)}
				/>

				<Button
					type='submit'
					variant='ghost'
					className='text-text border-cta data-[hover=true]:!bg-cta w-[150px] self-center'
				>
					Submit
				</Button>

				{error && <p className='mt-2 text-center text-danger-600'>{error}</p>}
				<span>
					Don't have an account?{' '}
					<Link href='/register' className='text-text' underline='always'>
						Register here.
					</Link>
				</span>
			</form>
		</Form>
	);
};

export default SignInForm;
