import { motion } from "framer-motion";

const SectionHeading = ({ children }) => {
  return (
    <h1 className="text-2xl md:text-3xl font-bold text-center">
      <MarqueeText text={children}></MarqueeText>
    </h1>
  );
};

export default SectionHeading;

export const MarqueeText = ({ text }) => {
  return (
    <motion.p
      className="relative overflow-hidden rounded-full p-4 uppercase text-crimson"
      style={{
        transform: "none",
        position: "relative",
        width: "200px",
        height: "40px",
        borderRadius: "15px",
      }}
    >
      <motion.span
        className="absolute left-4 top-4 block"
        style={{
          display: "inline-block",
          position: "absolute",
          whiteSpace: "nowrap",
          top: "0",
        }}
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      >
        {text + " " + "•" + " "}
      </motion.span>

      <motion.span
        className="absolute left-4 top-4 block "
        style={{
          display: "inline-block",
          position: "absolute",
          whiteSpace: "nowrap",
          transform: "translateX(calc(200% + 20px))",
          top: "0",
        }}
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      >
        {text + " " + "•" + " "}
      </motion.span>
      <motion.span
        className="absolute left-4 top-4 block "
        style={{
          display: "inline-block",
          position: "absolute",
          whiteSpace: "nowrap",
          transform: "translateX(calc(200% + 20px))",
          top: "0",
        }}
        initial={{ x: "200%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      >
        {text + " " + "•" + " "}
      </motion.span>
    </motion.p>
  );
};
