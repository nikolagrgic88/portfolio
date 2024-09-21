import { useScroll } from "../context/ScrollProvider";
import { inView } from "framer-motion";
import Animation from "../Animation";
import { motion } from "framer-motion";
import { useState } from "react";
import { EXPERIENCE } from "../util/util";

import SectionHeading from "../Components/SectionHeading";
import ExperienceCard from "../Components/ExperienceCards";

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
      className="min-h-fit md:min-h-screen flex flex-col items-center relative justify-center w-full mb-10 "
    >
      <SectionHeading>Experience</SectionHeading>
      <div className="hidden lg:flex justify-center gap-10 cursor-auto mt-14 w-full ">
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
      <ExperienceCard activeSection={activeSection} />
      <div className="lg:hidden  flex flex-col items-center w-4/6 h-fit gap-20 mt-32 ">
        {EXPERIENCE.map((content, i) => (
          <Animation.SmallExperienceCard card={content} />
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
