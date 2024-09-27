import { motion } from "framer-motion";

const Planet = ({ img, rotate, className, glowColor }) => {
  return (
    <motion.div>
      <motion.img
        src={img}
        alt="planets"
        className={`w-24 h-auto rounded-full ${className}`}
        style={{ filter: `drop-shadow(0 0 3em ${glowColor})` }}
        animate={{
          rotateZ: rotate && 360,
          x: 2,
          y: -2,

          transition: {
            duration: 60,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
      />
    </motion.div>
  );
};

export default Planet;
