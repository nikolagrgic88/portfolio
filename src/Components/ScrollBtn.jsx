import { motion } from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";
import { useActiveSection } from "../context/ActiveSetionProvider";
import { useScroll } from "../context/ScrollProvider";
import "../index.css";

const ScrollBtn = ({ direction, text }) => {
  const [arrowdirection, setArrowDirection] = useState("");
  const { setActiveSection } = useActiveSection();
  const { aboutRef, heroRef } = useScroll();

  const handleScroll = (ref, section) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    setActiveSection(section);
  };

  useEffect(() => {
    if (direction === "up") {
      setArrowDirection("up");
    } else {
      setArrowDirection("down");
    }
  }, [direction]);

  const variants = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      y: [-10, 10],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1.5,
      },
    },
  };
  const arrow =
    arrowdirection === "up" ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;

  return (
    <motion.div className="w-max bg-crimson rounded-2xl h-10 px-3 pt-2 button">
      <motion.button
        className="flex items-center align-middle"
        onClick={
          direction === "up"
            ? () => handleScroll(heroRef, "hero")
            : () => handleScroll(aboutRef, "about")
        }
      >
        <span className="inline-block">{text}</span>
        <motion.div variants={variants} initial="initial" animate="animate">
          {arrow}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};
export default ScrollBtn;
