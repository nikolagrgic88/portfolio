import { createContext, useContext, useRef } from "react";

const ScrollContext = createContext();

export const ScrollingProvider = ({ children }) => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <ScrollContext.Provider
      value={{
        heroRef,
        aboutRef,
        experienceRef,
        projectsRef,
        contactRef,
        skillsRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
export const useScroll = () => useContext(ScrollContext);
