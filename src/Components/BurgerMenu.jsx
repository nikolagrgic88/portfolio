import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useScroll } from '../context/ScrollProvider';
import { useActiveSection } from '../context/ActiveSetionProvider';

const BurgerMenu = ({ handleScroll }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => setIsOpen(!isOpen);
	const { aboutRef, experienceRef, projectsRef, contactRef } = useScroll();
	const { setActiveSection } = useActiveSection();

	const handleMenuClick = (ref, section) => {
		handleScroll(ref, section);
		setActiveSection(section);
		toggleMenu();
	};

	return (
		<div className='flex flex-col items-end relative -top-4 left-0 xl:hidden'>
			<button onClick={toggleMenu} className='text-3xl'>
				{isOpen ? <FaTimes /> : <FaBars />}
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 55 }}
						exit={{
							opacity: 0,
							y: -30,
						}}
						className='absolute flex flex-col right-0 mt-2 w-full lg:min-w-full min-h-1 bg-white rounded-md shadow-lg '
					>
						<ul>
							<li
								className='mobile-list-item active:bg-crimson'
								onClick={() => handleMenuClick(aboutRef, 'about')}
							>
								About
							</li>
							<li
								className='mobile-list-item active:bg-crimson'
								onClick={() => handleMenuClick(experienceRef, 'experience')}
							>
								Experience
							</li>
							<li
								className='mobile-list-item active:bg-crimson'
								onClick={() => handleMenuClick(projectsRef, 'projects')}
							>
								Projects
							</li>
							<li
								className='mobile-list-item active:bg-crimson'
								onClick={() => handleMenuClick(contactRef, 'contact')}
							>
								Contact
							</li>
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</div>
	);
};

export default BurgerMenu;
