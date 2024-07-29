import { useRef } from 'react';
import ContactMeForm from './ContactMeForm';
import { useScroll } from '../context/ScrollProvider';
import ScrollBtn from './ScrollBtn';

const Contact = () => {
	const { contactRef } = useScroll();
	return (
		<section
			ref={contactRef}
			id='contact'
			className='min-h-75v  flex items-center justify-center'
		>
			<ContactMeForm />
			<ScrollBtn direction={'up'} />
		</section>
	);
};

export default Contact;
