import { AnimatePresence, motion } from "framer-motion";
import ImageSlider from "./ImageSlider";

const ExperienceCard = ({ activeSection }) => {
  return (
    <motion.div
      layoutId={activeSection.id}
      className="hidden lg:flex flex-col lg:flex-row w-5/6 h-50v mt-14 rounded-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-1/2 lg:w-1/2  lg:h-full p-4 ">
        <AnimatePresence mode="wait">
          {activeSection && (
            <motion.div className="flex flex-col gap-8 max-w-[36rem]">
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
            className="w-[45%] h-full py-4 pr-4 "
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
  );
};

export default ExperienceCard;
