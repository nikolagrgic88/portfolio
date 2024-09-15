import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState } from "react";
import { ABOUTb, ABOUTc } from "../util/util";
import TextCard from "./TextCard";

const AboutBio = () => {
  const heroVariants = {
    hidden: { opacity: 0, x: "200vw" },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };
  const textHeroVariants = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  const headingVariants = {
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
    rest: {
      transition: {
        staggerChildren: 0.07,
        staggerDirection: -1,
      },
    },
  };
  const letterVariants = {
    initial: { opacity: 1, rotateX: 0 },
    animate: {
      color: "#df0e35",
      opacity: 1,
      rotateX: 360,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
    rest: {
      color: "#fcf2e8",
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
  };

  const headingText = ["Passionate", "Front-End", "Developer"];
  const [animationState, setAnimationState] = useState("animate");
  return (
    <motion.div className="flex flex-col h-full w-full z-20 gap-20 items-center content-center">
      <motion.div
        className="flex flex-col mt-20 "
        variants={heroVariants}
        initial="hidden"
        animate="animate"
      >
        <motion.div variants={textHeroVariants}>
          <motion.h1
            className="text-2xl mt-5 md:text-4xl lg:text-5xl font-bold"
            variants={headingVariants}
            // initial="initial"
            animate={animationState}
            onAnimationComplete={() => {
              setAnimationState((prev) =>
                prev === "animate" ? "rest" : "animate"
              );
            }}
          >
            <div className="flex flex-row content-center align-middle">
              {headingText.map((text, index) => (
                <Fragment key={index}>
                  <div className="flex flex-row ">
                    {text.split("").map((l, i) => (
                      <motion.span
                        key={i}
                        variants={letterVariants}
                        className="inline-block min"
                      >
                        {l}
                      </motion.span>
                    ))}
                  </div>
                  <p>&nbsp;</p>
                </Fragment>
              ))}
            </div>
          </motion.h1>
        </motion.div>
      </motion.div>
      <motion.div className="flex flex-col text-center  md:text-left md:flex-row relative justify-between w-4/6 md:w-5/6 gap-10">
        <AnimatePresence>
          <TextCard key={1}>{ABOUTb}</TextCard>
          <TextCard key={2}>{ABOUTc}</TextCard>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
export default AboutBio;
