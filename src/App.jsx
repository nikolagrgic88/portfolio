import Header from "./Components/Header";
import { ActiveSectionProvider } from "./context/ActiveSetionProvider";
import { ScrollingProvider } from "./context/ScrollProvider";
import Sections from "./Sections";

const App = () => {
  return (
    <ActiveSectionProvider>
      <ScrollingProvider>
        <div className="flex flex-col items-center relative w-screen  text-orange-50 bg-black font-poppins-font z-0 overflow-x-hidden overflow-y-hidden">
          <Header />
          <main className=" w-full lg:max-w-[100rem]">
            <Sections.Hero />
            <Sections.AboutMe />
            <Sections.Experience />
            <Sections.Skills />
            <Sections.Projects />
            <Sections.Contact />
          </main>
        </div>
      </ScrollingProvider>
    </ActiveSectionProvider>
  );
};

export default App;
