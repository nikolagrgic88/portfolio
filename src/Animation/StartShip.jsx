import { motion } from "framer-motion";
import spaceShip from "/assets/logos/space1.png";
import tail from "/assets/logos/blue.png";

const StarShip = ({ isInView }) => {
  const variants = {
    hidden: { opacity: 0, x: "-90vw", y: 200 },
    visible: {
      opacity: 1,
      x: "100vw",
      y: -600,
      transition: {
        repeat: Infinity,
        duration: 20,
        ease: "easeIn",
        delay: 0,
      },
    },
  };

  return (
    <motion.div
      className="relative"
      variants={variants}
      initial="hidden"
      animate={isInView && "visible"}
    >
      <motion.img
        src={tail}
        alt="spaceShip"
        className="w-6 rounded-full animate-pulse shadow-xl shadow-sky-300 rotate-90 absolute top-5 -left-3 -z-40 "
      ></motion.img>
      <motion.img src={spaceShip} alt="spaceShip" className="h-16 z-50" />
    </motion.div>
  );
};
export default StarShip;
