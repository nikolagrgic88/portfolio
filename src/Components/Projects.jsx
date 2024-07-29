import { useScroll } from '../context/ScrollProvider';

const Projects = () => {
	const { projectsRef } = useScroll();
	return (
		<section
			ref={projectsRef}
			id='projects'
			className='bg-blue min-h-75v flex items-center justify-center'
		>
			<h1>Projects</h1>
		</section>
	);
};

export default Projects;
