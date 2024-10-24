'use client';

import { createContext, useState, useContext, type ReactNode } from 'react';
import type { IUser } from 'types';

interface UserContextType {
	user: IUser | null;
	setUser: (user: IUser | null) => void;
	signIn: (email: string, password: string) => Promise<void>;
	signOut: () => void;
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

	const signIn: UserContextType['signIn'] = async (
		email: string,
		password: string
	) => {
		try {
			// TODO: just dummy auth for now, come back at some point and implement some actual auth
			const res = await fetch(`/api/signin`, {
				method: 'POST',
				body: JSON.stringify({ email, password }),
			});
			if (!res.ok) {
				throw new Error(`Failed to sign in user: ${email}`);
			}
			const data = await res.json();
			setUser(data);
		} catch (err) {
			console.error(err);
			setUser(null);
		}
	};

	const signOut = () => {
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, setUser, signIn, signOut }}>
			{children}
		</UserContext.Provider>
	);
};
