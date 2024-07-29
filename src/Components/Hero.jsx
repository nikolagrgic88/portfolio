import { useEffect } from 'react';
import { useScroll } from '../context/ScrollProvider';
import { motion } from 'framer-motion';

import ScrollBtn from './ScrollBtn';

const Hero = () => {
	const { heroRef } = useScroll();

	return (
		<section
			ref={heroRef}
			id='hero'
			className='flex items-center justify-center h-svh'
		>
			<div>
				<h1>Herro Section</h1>
			</div>

			<ScrollBtn direction={'down'} />
		</section>
	);
};

export default Hero;
