import { useScroll } from "../context/ScrollProvider";
import Animation from "../Animation";
import Components from "../Components";
const Hero = () => {
  const { heroRef } = useScroll();

  return (
    <section
      ref={heroRef}
      id="hero"
      className="flex flex-col-reverse justify-center items-center h-screen md:flex-row italic relative pt-20 md:mt-24  xl:pt-40 z-10 cursor-default"
    >
      <Components.HeroBio />
      <div className="relative md:w-2/5 xl:w-2/5 lg:w-3/5 h-full z-10 pt-10 w-4/6 sm:content-center md:content-baseline ">
        <Animation.HelloAlien />
        <Animation.ParticleSystem />
      </div>
      <div className="absolute w-full z-0 top-0 left-0">
        <Animation.StarsCanvas />
      </div>
    </section>
  );
};

export default Hero;
