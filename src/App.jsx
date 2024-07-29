import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import { ActiveSectionProvider } from './context/ActiveSetionProvider';
import { ScrollingProvider } from './context/ScrollProvider';

function App() {
	return (
		<ActiveSectionProvider>
			<ScrollingProvider>
				<div className='flex flex-col items-center relative w-screen  text-orange-50 bg-black font-poppins-font'>
					<Header />
					<main className=' w-5/6  lg:w-4/6'>
						<Hero />
						<AboutMe />
						<Experience />
						<Projects />
						<Contact />
					</main>
				</div>
			</ScrollingProvider>
		</ActiveSectionProvider>
	);
}

export default App;
