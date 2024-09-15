import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ImageSlider from "../Components/ImageSlider";

const SmallExperienceCard = ({ card }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      className="flex flex-col-reverse min-h-[34rem] min-w-4/5 mt-5 rounded-2xl"
      key={card.id}
      initial={{ opacity: 0, x: 100 }}
      animate={
        isInView && {
          opacity: 1,
          x: 0,
          transition: { duration: 3 },
        }
      }
    >
      <div className="text-sm p-4">
        <p className="text-center ">{card.content}</p>
      </div>
      <div className="h-30w">
        <ImageSlider images={card.images} />
      </div>
    </motion.div>
  );
};

export default SmallExperienceCard;
