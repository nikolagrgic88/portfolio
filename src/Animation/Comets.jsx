import { motion } from "framer-motion";
import comet from "/assets/logos/comet.png";
import { useRef } from "react";

const Comets = ({ isInView }) => {
  const ref = useRef(null);
  const getRandomInRange = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  return (
    <motion.div className="absolute -z-20 -top-20 right-44">
      {isInView &&
        Array(6)
          .fill(0)
          .map((_, i) => {
            const initialX = getRandomInRange(0, 350);
            const initialY = getRandomInRange(0, 350);

            const finalX = initialX - 1800;
            const finalY = initialY + 800;
            const variants = {
              initial: {
                x: initialX,
                y: initialY,
              },
              animate: {
                x: finalX,
                y: finalY,
                transition: {
                  repeat: Infinity,
                  duration: 60,
                },
              },
            };
            return (
              <motion.img
                ref={ref}
                key={i}
                src={comet}
                alt="comet"
                className="w-20 animate-pulse "
                initial="initial"
                animate="animate"
                variants={variants}
              />
            );
          })}
    </motion.div>
  );
};
export default Comets;
