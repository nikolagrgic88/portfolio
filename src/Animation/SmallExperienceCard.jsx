import { useRef } from "react";
import ImageSlider from "../Components/ImageSlider";
import TextCard from "./TextCard";

const SmallExperienceCard = ({ card }) => {
  const ref = useRef(null);

  console.log("card", card.id);

  // return (
  //   <motion.div
  //     ref={ref}
  //     className="flex flex-col-reverse min-h-[34rem] min-w-4/5 mt-5 rounded-2xl"
  //     key={card.id}
  //     initial={{ opacity: 0, x: 100 }}
  //     animate={
  //       isInView && {
  //         opacity: 1,
  //         x: 0,
  //         transition: { duration: 3 },
  //       }
  //     }
  //   >
  //     <div className="text-sm p-4">
  //       <p className="text-center ">{card.content}</p>
  //     </div>
  //     <div className="h-30w">
  //       <ImageSlider images={card.images} />
  //     </div>
  //   </motion.div>
  // );
  return (
    <TextCard>
      <h2 className="text-center text-2xl mb-5 mt-5">{card.name}</h2>
      <div className="text-sm p-4">
        <p className="text-center">{card.content}</p>
      </div>
      {card.id !== 1 && (
        <div className="h-30w">
          <ImageSlider images={card.images} />
        </div>
      )}
    </TextCard>
  );
};

export default SmallExperienceCard;
