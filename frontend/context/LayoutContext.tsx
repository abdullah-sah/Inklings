import { createContext, useState, useContext, type ReactNode } from 'react';

interface LayoutContextProps {
	showSidebar: boolean;
	toggleSidebar: () => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const useLayoutContext = () => {
	const context = useContext(LayoutContext);
	if (!context) {
		throw new Error('useLayoutContext must be used within a LayoutProvider');
	}
	return context;
};

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
	const [showSidebar, setShowSidebar] = useState(true);

	const toggleSidebar = () => {
		setShowSidebar((prev) => !prev);
	};

	return (
		<LayoutContext.Provider value={{ showSidebar, toggleSidebar }}>
			{children}
		</LayoutContext.Provider>
	);
};
