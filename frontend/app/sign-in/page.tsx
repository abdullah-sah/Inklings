import RegisterForm from '@/components/register-form';
import { Form } from '@/components/ui/form';

export default function SignIn() {
	return (
		<section className='container flex p-6 md:justify-center rounded-3xl sign-in-container bg-secondary'>
			<RegisterForm />
		</section>
	);
}
