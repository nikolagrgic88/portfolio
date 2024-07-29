import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollingProvider = ({ children }) => {
	const heroRef = useRef(null);
	const aboutRef = useRef(null);
	const experienceRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<ScrollContext.Provider
			value={{ heroRef, aboutRef, experienceRef, projectsRef, contactRef }}
		>
			{children}
		</ScrollContext.Provider>
	);
};
export const useScroll = () => useContext(ScrollContext);
