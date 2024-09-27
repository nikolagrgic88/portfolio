import { useEffect, useState } from "react";
import { useScroll } from "../context/ScrollProvider";
import bottomImg from "/assets/logos/mountains.png";
import { useInView } from "framer-motion";
import Animation from "../Animation";
import Components from "../Components";

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
      className="h-65v flex flex-col items-center justify-center relative mt-20 "
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
        <img src={bottomImg} alt="mars surf" className="w-full h-full z-0" />
      </div>
      <div className="absolute bottom-10 right-10 max-md:bottom-5 max-sm:hidden">
        <Components.ScrollBtn direction={"up"} text={"Bact to the top"} />
      </div>
    </section>
  );
};

export default Contact;
