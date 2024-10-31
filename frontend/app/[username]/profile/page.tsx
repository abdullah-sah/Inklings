'use client';

import { useUserContext } from '@/context/UserContext';

type Props = {
	params: {
		username: string;
	};
};

export default function Profile({ params }: Props) {
	const { user } = useUserContext();

	return (
		<div className='user-profile-page'>
			<p>welcome to the user profile page for the user {user?.username}</p>
		</div>
	);
}
