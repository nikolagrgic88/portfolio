import { motion } from "framer-motion";
import BurgerMenu from "./BurgerMenu";
import { useEffect } from "react";
import { useScroll } from "../context/ScrollProvider";
import { useActiveSection } from "../context/ActiveSetionProvider";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Header = () => {
  const {
    aboutRef,
    experienceRef,
    projectsRef,
    contactRef,
    heroRef,
    skillsRef,
  } = useScroll();
  const { activeSection, setActiveSection } = useActiveSection();
  const { observe, unobserve } = useIntersectionObserver(setActiveSection);

  useEffect(() => {
    if (aboutRef.current) observe(aboutRef.current);
    if (experienceRef.current) observe(experienceRef.current);
    if (projectsRef.current) observe(projectsRef.current);
    if (contactRef.current) observe(contactRef.current);
    if (skillsRef.current) observe(skillsRef.current);
    if (heroRef.current) observe(heroRef.current);

    return () => {
      if (aboutRef.current) unobserve(aboutRef.current);
      if (experienceRef.current) unobserve(experienceRef.current);
      if (projectsRef.current) unobserve(projectsRef.current);
      if (contactRef.current) unobserve(contactRef.current);
      if (skillsRef.current) unobserve(skillsRef.current);
      if (heroRef.current) unobserve(heroRef.current);
    };
  }, [
    aboutRef,
    experienceRef,
    projectsRef,
    contactRef,
    heroRef,
    skillsRef,
    observe,
    unobserve,
  ]);

  const handleScroll = (ref, section) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    setActiveSection(section);
  };
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeIn" },
    },
  };
  const pVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeIn" },
    },
  };

  return (
    <header className="flex flex-col fixed xl:flex-row xl:justify-between xl:items-center bg-gradient-to-l from-violet to-dark-violet lg:w-4/6 h-10 top-10 rounded-xl px-5 py-8 z-50 w-4/5">
      <motion.div className="flex flex-col justify-center min-h-full text-left">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl pl-5"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          NG
        </motion.h1>
        <motion.p variants={pVariants} initial="hidden" animate="visible">
          Nikola Grgic
        </motion.p>
      </motion.div>
      <div>
        <ul className="hidden xl:flex sm:gap-3 sm:text-xl">
          <li
            className={`list-item ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleScroll(aboutRef, "about")}
            onScroll={() => handleScroll(aboutRef, "about")}
          >
            About
          </li>
          <li
            className={`list-item ${
              activeSection === "experience" ? "active" : ""
            }`}
            onClick={() => handleScroll(experienceRef, "experience")}
          >
            Experience
          </li>
          <li
            className={`list-item ${
              activeSection === "skills" ? "active" : ""
            }`}
            onClick={() => handleScroll(skillsRef, "skills")}
          >
            Skills
          </li>
          <li
            className={`list-item ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => handleScroll(projectsRef, "projects")}
          >
            Projects
          </li>
          <li
            className={`list-item ${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={() => handleScroll(contactRef, "contact")}
          >
            Contact
          </li>
        </ul>
      </div>
      <BurgerMenu handleScroll={handleScroll} />
    </header>
  );
};

export default Header;
