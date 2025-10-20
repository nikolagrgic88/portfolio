import { motion } from "framer-motion";
import { IMAGES } from "../util/images";
import AnimatedImage from "./AnimatedImage";

const SkillsImages = () => {
  return (
    <motion.ul className=" relative grid grid-cols-5 gap-5 md:gap-7 grid-rows-5 -z-50">
      {IMAGES.map((src, i) => (
        <AnimatedImage
          key={i}
          src={src}
          color="#3498db"
          className={`${
            i === 0
              ? "relative translate-x-4 translate-y-4"
              : i === 1
              ? "relative  -translate-y-4"
              : i === 2
              ? "relative  -translate-y-6"
              : i === 3
              ? "relative  -translate-y-4"
              : i === 4
              ? "relative -translate-x-4 translate-y-4"
              : i === 5
              ? "relative  -translate-x-3"
              : i === 9
              ? "relative  translate-x-3"
              : i === 10
              ? "relative  -translate-x-3"
              : i === 14
              ? "relative  translate-x-3"
              : i === 15
              ? "relative translate-x-4 -translate-y-4"
              : i === 16
              ? "relative translate-y-4"
              : i === 17
              ? "relative -translate-y-12"
              : i === 18
              ? "relative translate-y-4 "
              : i === 19
              ? "relative -translate-x-4 -translate-y-4"
              : i === 7
              ? "relative -translate-y-8"
              : i === 12
              ? "relative -translate-y-10"
              : i === 20
              ? "relative -translate-y-14 translate-x-42"
              : ""
          }`}
        />
      ))}
    </motion.ul>
  );
};

export default SkillsImages;
