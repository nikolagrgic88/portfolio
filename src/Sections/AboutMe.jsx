import { useInView } from "framer-motion";
import { useScroll } from "../context/ScrollProvider";
import Animation from "../Animation";
import venus from "/assets/planets/ven.png";
const AboutMe = () => {
  const { aboutRef } = useScroll();
  const isInView = useInView(aboutRef, { once: true });

  return (
    <section
      ref={aboutRef}
      id="about"
      className="h-fit md:h-75v flex flex-col items-center justify-center mb-36 "
    >
      <div className="relative w-full">
        <Animation.Planet
          img={venus}
          className={"absolute md:w-96 w-[26rem] top-0 -left-96 opacity-70 "}
          rotate={false}
        />
      </div>
      <Animation.AboutBio />
      <Animation.StarShip isInView={isInView} />
      <div className="absolute w-full z-0">
        <Animation.StarsCanvas />
      </div>
    </section>
  );
};

export default AboutMe;
