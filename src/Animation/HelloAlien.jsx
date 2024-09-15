import helloAlien from "/assets/logos/alien1a.png";
import { motion } from "framer-motion";

const HelloAlien = () => {
  return (
    <motion.img
      src={helloAlien}
      alt="hello alien"
      className="hidden absolute lg:block lg:right-2 w-44 -z-50"
      style={{ transformOrigin: "bottom" }}
      initial={{ opacity: 1, rotateZ: -80 }}
      animate={{
        opacity: 1,
        rotateZ: [-70, 50, 50, -70],
        transition: {
          repeat: Infinity,
          delay: 10,
          duration: 7,
          ease: "easeInOut",
          times: [0, 0.25, 0.75, 1],
          repeatDelay: 10,
        },
      }}
    />
  );
};

export default HelloAlien;
