import { motion } from "framer-motion";
import BurgerMenu from "./BurgerMenu";
import { useEffect, useState } from "react";
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
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const aboutNode = aboutRef.current;
    const experienceNode = experienceRef.current;
    const projectsNode = projectsRef.current;
    const contactNode = contactRef.current;
    const skillsNode = skillsRef.current;
    const heroNode = heroRef.current;

    if (aboutNode) observe(aboutNode);
    if (experienceNode) observe(experienceNode);
    if (projectsNode) observe(projectsNode);
    if (contactNode) observe(contactNode);
    if (skillsNode) observe(skillsNode);
    if (heroNode) observe(heroNode);

    return () => {
      if (aboutNode) unobserve(aboutNode);
      if (experienceNode) unobserve(experienceNode);
      if (projectsNode) unobserve(projectsNode);
      if (contactNode) unobserve(contactNode);
      if (skillsNode) unobserve(skillsNode);
      if (heroNode) unobserve(heroNode);
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
  //animate header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -100, opacity: showHeader ? 1 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex flex-col fixed xl:flex-row xl:justify-between xl:items-center bg-gradient-to-l from-violet to-dark-violet lg:w-4/6 h-10 top-10 rounded-xl px-5 py-8 z-50 w-4/5"
    >
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
    </motion.header>
  );
};

export default Header;
