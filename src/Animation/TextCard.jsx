import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

const TextCard = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1.5", "1.33 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        scale,
        boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
        borderRadius: "10px",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className={`w-96 ${className}`}
    >
      {children}
    
    </motion.div>
  );
};

export default TextCard;
