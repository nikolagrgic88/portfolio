import { motion } from "framer-motion";
import radarBottom from "/assets/logos/radarBody.png";
import radarTop from "/assets/logos/radarHead.png";

const MoonRadar = () => {
  return (
    <motion.div className="absolute w-20 left-3 top-56 md:left-14 md:top-56">
      <motion.img
        src={radarTop}
        alt="radar"
        className="absolute left-4 top-1 w-14 z-30 "
        animate={{
          rotate: -20,
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
      <img src={radarBottom} alt="radar" className="absolute top-0" />
    </motion.div>
  );
};

export default MoonRadar;
