
import { useScroll } from '../context/ScrollProvider';

const AboutMe = () => {
	const { aboutRef } = useScroll();
	return (
		<section
			ref={aboutRef}
			id='about'
			className='bg-blue min-h-75v flex items-center justify-center'
		>
			<h1>About</h1>
		</section>
	);
};

export default AboutMe;
