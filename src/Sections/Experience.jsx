import { useScroll } from "../context/ScrollProvider";
import { AnimatePresence, inView } from "framer-motion";
import Animation from "../Animation";
import { motion } from "framer-motion";
import { useState } from "react";
import { EXPERIENCE } from "../util/util";

import ImageSlider from "../Components/ImageSlider";
import SectionHeading from "../Components/SectionHeading";

const Experience = () => {
  const { experienceRef } = useScroll();
  const isInView = inView(experienceRef, { once: true });
  const [activeSection, setActiveSection] = useState(
    EXPERIENCE.find((i) => i.id === 1)
  );

  return (
    <section
      ref={experienceRef}
      id="experience"
      className="min-h-screen flex flex-col items-center relative justify-center w-full mb-10 "
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="hidden lg:flex gap-5 cursor-auto mt-14">
        {EXPERIENCE.map((field) => (
          <motion.div
            key={field.id}
            className={`w-fit rounded-lg bg-dark-violet px-8 py-2 cursor-auto flex items-center `}
            onHoverStart={() => setActiveSection(field)}
          >
            <p
              className={`cursor-default font-bold ${
                activeSection?.id === field.id ? "text-crimson" : "text-white"
              }`}
            >
              {field.name}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        layoutId={activeSection.id}
        className="hidden lg:flex flex-col lg:flex-row w-full h-50v mt-14 rounded-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-1/2 lg:w-1/2  lg:h-full p-4 ">
          <AnimatePresence mode="wait">
            {activeSection && (
              <motion.div className="flex flex-col gap-8 ">
                <motion.h2
                  className="text-2xl"
                  key={activeSection.id}
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
                  transition={{ duration: 0.5 }}
                >
                  {activeSection.heading}
                </motion.h2>
                <motion.div
                  key={`content-${activeSection.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  transition={{ duration: 3 }}
                >
                  <p className="leading-8">{activeSection.content}</p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          {activeSection && (
            <motion.div
              className="h-1/2 lg:w-1/2  lg:h-full py-4 pr-4 "
              key={activeSection.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5 }}
            >
              <ImageSlider images={activeSection.images} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="lg:hidden  flex flex-col w-4/6 h-fit gap-20 ">
        {EXPERIENCE.map((content, i) => (
          <Animation.SmallExperienceCard card={content} key={i} />
        ))}
      </div>

      <Animation.Comets isInView={isInView} />
      <div className="absolute w-full ">
        <Animation.StarsCanvas />
      </div>
    </section>
  );
};

export default Experience;
