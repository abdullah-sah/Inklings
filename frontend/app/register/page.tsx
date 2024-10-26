'use client';

import RegisterForm from '@/components/register-form';

export default function Register() {
	return (
		<section className='container flex p-6 md:justify-center rounded-3xl sign-in-container bg-secondary'>
			<RegisterForm />
		</section>
	);
}
