import { AnimatePresence, motion } from "framer-motion";
import ImageSlider from "./ImageSlider";

const ExperienceCard = ({ activeSection }) => {
  const experience = activeSection.id === 1;
 
  return (
    <motion.div
      layoutId={activeSection.id}
      className="hidden md:flex flex-col lg:flex-row w-5/6 min-h-[52vh] mt-14 rounded-lg "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`h-1/2 "w-1/2" ${
          experience ? "w-full" : "w-1/2"
        } lg:h-full p-4 flex items-center justify-center`}
      >
        <AnimatePresence mode="wait">
          {activeSection && (
            <motion.div
              className={`first-letter:flex flex-col gap-8 max-w-[36rem] ${
                experience && "text-center"
              } `}
            >
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
      {!experience && (
        <AnimatePresence mode="wait">
          {activeSection && (
            <motion.div
              className="w-[45%] h-[40rem] py-4"
              key={activeSection.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5 }}
            >
              {!experience && <ImageSlider images={activeSection.images} />}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default ExperienceCard;
