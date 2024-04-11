'use client';
import { links } from '@/lib/data';
import { createContext, useContext, useState } from 'react';

type SelectionName = (typeof links)[number]['name'];

type ActiveSectionContextType = {
	activeSection: SelectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SelectionName>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
	null
);

export default function ActiveSectionProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [activeSection, setActiveSection] = useState<SelectionName>('Home');

	return (
		<ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
			{children}
		</ActiveSectionContext.Provider>
	);
}

export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext);
	if (context === null) {
		throw new Error(
			'useActiveSectionContext must be used within a ActiveSectionProvider'
		);
	}
	return context;
}
