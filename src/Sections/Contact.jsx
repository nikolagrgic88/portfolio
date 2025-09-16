import { useEffect, useState } from "react";
import { useScroll } from "../context/ScrollProvider";
import bottomImg from "/assets/logos/mountains.png";
import { useInView } from "framer-motion";
import Animation from "../Animation";
import Components from "../Components";
import Astronaut from "../Animation/Astronaut";

const Contact = () => {
  const { contactRef } = useScroll();
  const [speechBubbleReady, setSpeechBubbleReady] = useState(false);
  const isInView = useInView(contactRef, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setSpeechBubbleReady(true);
      }, 3000);
    }
  }, [isInView]);

  return (
    <section
      ref={contactRef}
      id="contact"
      className="flex flex-col items-center justify-center relative mt-20 "
    >
      <Animation.AlienMessage
        speechBubbleReady={speechBubbleReady}
        isInView={isInView}
      />
      <div className="flex items-center justify-center absolute mb-36 md:mb-0">
        <Components.ContactMeForm />
      </div>
      <Animation.MoonRocket isInView={isInView} />
      <Animation.MoonRadar />
      <div className="relative pointer-events-none w-full h-96 ">
        <Animation.ContactLinks />
        <img src={bottomImg} alt="mars surf" className="w-full h-full -z-10" />
      </div>

      <div className="absolute bottom-[10rem] right-10 max-md:bottom-5 max-sm:hidden z-10">
        <Components.ScrollBtn direction={"up"} text={"Back to the top"} />
      </div>
      <Astronaut />
    </section>
  );
};

export default Contact;
