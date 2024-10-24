'use client';

import type { FC } from 'react';
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

const formSchema = z.object({
	username: z
		.string()
		.min(2, { message: 'Username needs to be at least 2 characters.' })
		.max(50, { message: `Username can't be longer than 50 characters.` }),
	password: z
		.string()
		.min(8, { message: 'Password needs to be at least 8 characters.' }),
});

const RegisterForm: FC = () => {
	const router = useRouter();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		console.log('heres the values that came through', values);
		router.push('/');
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col w-full gap-4 px-12 md:px-2 md:w-full'
			>
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
									onClear={() => field.onChange()}
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

							<FormDescription className='py-2'>
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
									placeholder='Type password here'
									label='Password'
									labelPlacement='outside'
									type='password'
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
			</form>
		</Form>
	);
};

export default RegisterForm;
