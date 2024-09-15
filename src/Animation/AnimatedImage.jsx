import { motion } from "framer-motion";

const AnimatedImage = ({ src, className, color }) => {
  return (
    <motion.div className="inline-block w-16" transition={{ duration: 2 }}>
      <motion.img
        src={src}
        alt="Animated"
        className={`w-full h-full rounded-full object-fill ${className} `}
        initial={{
          opacity: 0,
          boxShadow: "0 0 0px rgba(255, 255, 255, 0)",
        }}
        animate={{
          opacity: [0, 1],
          boxShadow: [
            "0 0 0px rgba(255, 255, 255, 0)",
            "0 0 15px rgba(255, 255, 255, 0.8)",
            "0 0 30px rgba(255, 255, 255, 1)",
            "0 0 15px rgba(255, 255, 255, 0.8)",
          ],
          backgroundColor: color,
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.div>
  );
};
export default AnimatedImage;
