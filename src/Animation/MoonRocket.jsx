import { motion } from "framer-motion";
import spaceShip from "/assets/logos/rocket.png";
import RocketLaunchCanvas from "./RocketLaunchCanvas";

const MoonRocket = ({ isInView }) => {
  const variantsRocket = {
    animate: {
      y: "-550vh",
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 20,
        delay: 5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      className="absolute right-2 bottom-[11.4rem] md:right-12 md:bottom-44"
      animate={isInView && "animate"}
      variants={variantsRocket}
    >
      <motion.img src={spaceShip} className="h-35 w-20 -m-b-10" />
      <motion.div className="max-w-20 relative">
        <RocketLaunchCanvas />
      </motion.div>
    </motion.div>
  );
};

export default MoonRocket;
