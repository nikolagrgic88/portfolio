import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "../context/ScrollProvider";
import { useActiveSection } from "../context/ActiveSetionProvider";

const BurgerMenu = ({ handleScroll }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { aboutRef, experienceRef, projectsRef, contactRef, skillsRef } =
    useScroll();
  const { setActiveSection } = useActiveSection();

  const handleMenuClick = (ref, section) => {
    handleScroll(ref, section);
    setActiveSection(section);
    toggleMenu();
  };

  return (
    <div className="flex flex-col items-end relative -top-4 left-0 xl:hidden">
      <motion.button onClick={toggleMenu}>
        <div className="space-y-2">
          {/* Top Line */}
          <motion.div
            className="w-8 h-1 bg-white"
            style={{ transformOrigin: "right" }}
            animate={
              isOpen
                ? {
                    rotateZ: "-45deg",
                    y: 1,
                    transition: { duration: 0.3, delay: 0.5 },
                  }
                : { rotateZ: "0deg", y: 0, transition: { duration: 0.3 } }
            }
          ></motion.div>

          {/* Middle Line */}
          <div className="overflow-hidden">
            <motion.div
              className="w-8 h-1 bg-white"
              animate={
                isOpen
                  ? {
                      x: 40,
                      transition: { duration: 0.3 },
                    }
                  : {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3, delay: 0.5 },
                    }
              }
            ></motion.div>
          </div>

          {/* Bottom Line */}
          <motion.div
            className="w-8 h-1 bg-white"
            style={{ transformOrigin: "right" }}
            animate={
              isOpen
                ? {
                    rotateZ: "45deg",
                    y: -1,
                    transition: { duration: 0.3, delay: 0.5 },
                  }
                : {
                    rotateZ: "0deg",
                    y: 0,
                    transition: { duration: 0.3 },
                  }
            }
          ></motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
            }}
            className="absolute flex flex-col right-0 mt-14 w-full lg:min-w-full min-h-1 bg-white rounded-md shadow-lg "
          >
            <ul>
              <li
                className="mobile-list-item active:bg-crimson"
                onClick={() => handleMenuClick(aboutRef, "about")}
              >
                About
              </li>
              <li
                className="mobile-list-item active:bg-crimson"
                onClick={() => handleMenuClick(experienceRef, "experience")}
              >
                Experience
              </li>
              <li
                className="mobile-list-item active:bg-crimson"
                onClick={() => handleMenuClick(skillsRef, "skills")}
              >
                Skills
              </li>
              <li
                className="mobile-list-item active:bg-crimson"
                onClick={() => handleMenuClick(projectsRef, "projects")}
              >
                Projects
              </li>
              <li
                className="mobile-list-item active:bg-crimson"
                onClick={() => handleMenuClick(contactRef, "contact")}
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
