import { useRef } from 'react';
import { useScroll } from '../context/ScrollProvider';

const Experience = () => {
	const { experienceRef } = useScroll();
	return (
		<section
			ref={experienceRef}
			id='experience'
			className='bg-crimson min-h-75v flex items-center justify-center'
		>
			<h1>Experience</h1>
		</section>
	);
};

export default Experience;
