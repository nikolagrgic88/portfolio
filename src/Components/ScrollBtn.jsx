import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';
import { useActiveSection } from '../context/ActiveSetionProvider';
import { useScroll } from '../context/ScrollProvider';

const ScrollBtn = ({ direction }) => {
	const [arrowdirection, setArrowDirection] = useState('');
	const { setActiveSection } = useActiveSection();
	const { aboutRef, heroRef } = useScroll();

	const handleScroll = (ref, section) => {
		ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
		setActiveSection(section);
	};

	useEffect(() => {
		if (direction === 'up') {
			setArrowDirection('up');
		} else {
			setArrowDirection('down');
		}
	}, [direction]);

	const variants = {
		hidden: { opacity: 0, y: -20 },
		animate: {
			opacity: 1,
			y: 10,
			transition: {
				repeat: Infinity,
				repeatType: 'reverse',
				duration: 1.2,
			},
		},
	};
	const arrow =
		arrowdirection === 'up' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;

	return (
		<motion.button
			variants={variants}
			initial='initial'
			animate='animate'
			className='  bg-crimson rounded-2xl h-10 '
			onClick={
				direction === 'up'
					? () => handleScroll(heroRef, 'hero')
					: () => handleScroll(aboutRef, 'about')
			}
		>
			{arrow}
		</motion.button>
	);
};
export default ScrollBtn;
