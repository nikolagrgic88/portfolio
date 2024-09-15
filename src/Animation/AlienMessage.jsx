import { Fragment } from "react";
import { motion } from "framer-motion";
import nlo from "/assets/logos/nlo.png";
import speechBubble from "/assets/logos/speech-bubble.png";

const AlienMessage = ({ speechBubbleReady, isInView }) => {
  const variants = {
    hidden: {
      x: "-10vw",
      y: "-10vh",
      opacity: 0,
      scale: 0.01, //to do
    },
    appear: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
    hover: {
      rotate: [5, -5],
      scale: [0.6, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };
  const cloudMessageVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const cloudVariants = {
    hidden: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 2,
        ease: "easeInOut",
      },
    },
  };

  const letterAnimationVariants = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  const message =
    "Seeking brave humans for exciting projects? Let's make contact!";
  return (
    <motion.div className="relative -top-20 right-14 md:top-0 md:-left-10">
      <motion.img
        src={nlo}
        className="h-40"
        initial="hidden"
        animate={isInView && ["appear", "hover"]}
        variants={variants}
      />
      <motion.img
        src={speechBubble}
        alt="message cloud"
        variants={cloudVariants}
        initial="hidden"
        animate={isInView && "animate"}
        className="absolute -top-16 left-32 rotate-6 min-w-56 max-h-32"
      />
      <motion.span
        variants={cloudMessageVariants}
        initial="hidden"
        animate={speechBubbleReady && "show"}
        className=" text-dark-violet absolute whitespace-normal inline-block font-bold text-l rotate-6 -top-14 inset-36 "
      >
        {message.split("").map((letter, index) => {
          return letter === " " ? (
            <span key={index}>&nbsp;</span>
          ) : letter === "?" || index === 19 ? (
            <Fragment key={index}>
              <motion.span variants={letterAnimationVariants}>
                {letter}
              </motion.span>
              <br />
            </Fragment>
          ) : (
            <motion.span key={index} variants={letterAnimationVariants}>
              {letter}
            </motion.span>
          );
        })}
      </motion.span>
    </motion.div>
  );
};

export default AlienMessage;
