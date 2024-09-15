import { motion } from "framer-motion";

const Planet = ({ img, rotate, className }) => {
  return (
    <motion.div className="">
      <motion.img
        src={img}
        alt="planets"
        className={`w-24 h-auto rounded-full ${className}`}
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
