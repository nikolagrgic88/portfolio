import { motion } from "framer-motion";
import { HERO_BIO } from "../util/util";
import ScrollBtn from "./ScrollBtn";

const HeroBio = () => {
  const textHeroVariants = {
    hidden: { opacity: 0, x: 250 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="w-full md:w-2/4 flex flex-col items-center gap-8 lg:gap-16 lg:items-start lg:pt-0 xl:pt-10 h-full z-20 relative">
      <div className="relative flex flex-col h-auto overflow-hidden w-fit sm:items-center ">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-[#df0e35]"
          initial={{ x: 0 }}
          animate={{ x: "120%" }}
          transition={{ delay: 3, duration: 1.5 }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-0 w-full h-full bg-white"
          initial={{ x: 0 }}
          animate={{ x: "120%" }}
          transition={{ delay: 3.5, duration: 1.5 }}
        ></motion.div>
        <h1 className="xl:text-6xl font-bold lg:text-5xl text-4xl text-center lg:text-start ">
          {HERO_BIO.heading}
        </h1>
        <h2 className="xl:text-4xl lg:text-3xl text-2xl  font-bold text-[#df0e35] ">
          {HERO_BIO.headingTwo}
        </h2>
      </div>
      <motion.p
        className="xl:text-xl lg:text-xl sm:text-l lg:max-w-fit w-4/5 text-center lg:text-start"
        variants={textHeroVariants}
      >
        {HERO_BIO.description}
      </motion.p>
      <motion.div
        className="w-full z-30 md:mt-10 lg:mt-0 flex justify-center lg:justify-start"
        variants={textHeroVariants}
      >
        <ScrollBtn direction={"down"} text="Lets Explore More" />
      </motion.div>
    </div>
  );
};

export default HeroBio;
