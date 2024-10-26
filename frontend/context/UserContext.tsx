'use client';

import { useRouter } from 'next/navigation';
import { createContext, useState, useContext, type ReactNode } from 'react';
import type { IUser } from 'types';

interface UserContextType {
	user: IUser | null;
	signedIn: boolean;
	signIn: (username: string, password: string) => Promise<boolean>;
	signOut: () => void;
	register: (
		username: string,
		email: string,
		password: string,
		name: string
	) => Promise<boolean>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUserContext must be used within a UserProvider');
	}

	return context;
};

interface UserProviderProps {
	children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [signedIn, setSignedIn] = useState<boolean>(false);

	const router = useRouter();

	const register: UserContextType['register'] = async (
		username,
		email,
		password,
		name
	) => {
		try {
			const res = await fetch(`/api/users`, {
				method: 'POST',
				body: JSON.stringify({ username, email, password, name }),
			});
			if (!res.ok) {
				throw new Error(`Failed to register user: ${username}`);
			}
			const data = await res.json();
			setUser(data);
			setSignedIn(true);
			return true;
		} catch (err) {
			console.error(err);
			setUser(null);
			setSignedIn(false);
			return false;
		}
	};

	const signIn: UserContextType['signIn'] = async (
		username: string,
		password: string
	) => {
		try {
			// TODO: just dummy auth for now, come back at some point and implement some actual auth
			const res = await fetch(`/api/signin`, {
				method: 'POST',
				body: JSON.stringify({ username, password }),
			});
			if (!res.ok) {
				throw new Error(`Failed to sign in user: ${username}`);
			}
			const data = await res.json();
			setUser(data);
			setSignedIn(true);
			return true;
		} catch (err) {
			console.error(err);
			setUser(null);
			setSignedIn(false);
			return false;
		}
	};

	const signOut = () => {
		setUser(null);
		setSignedIn(false);
		router.push('/sign-in');
	};

	return (
		<UserContext.Provider value={{ user, signedIn, signIn, signOut, register }}>
			{children}
		</UserContext.Provider>
	);
};
