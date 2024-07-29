import { useRef } from 'react';

const useIntersectionObserver = (setActiveSection) => {
	const observer = useRef(
		new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.75 }
		)
	);

	const observe = (element) => {
		if (element) {
			observer.current.observe(element);
		}
	};

	const unobserve = (element) => {
		if (element) {
			observer.current.unobserve(element);
		}
	};

	return { observe, unobserve };
};

export default useIntersectionObserver;
