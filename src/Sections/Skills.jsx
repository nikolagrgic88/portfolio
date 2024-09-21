import { useInView } from "framer-motion";
import Animation from "../Animation";
import { useScroll } from "../context/ScrollProvider";
import Components from "../Components";
import neptun from "/assets/planets/nept.png";

const Skills = () => {
  const { skillsRef } = useScroll();
  const isInView = useInView(skillsRef, { once: true });
  return (
    <section
      ref={skillsRef}
      id="skills"
      className="min-w-full flex flex-col justify-center items-center pt-20 md:pt-0"
    >
      <Components.SectionHeading>Skills</Components.SectionHeading>
      <div className="relative w-full">
        <Animation.Planet
          img={neptun}
          className={"absolute w-80 -top-36 -right-96 opacity-70 "}
          rotate={false}
        />
      </div>
      <Components.SkillsBio isInView={isInView} />
      <div className="absolute right-0 left-0 -z-50">
        <Animation.StarsCanvas />
      </div>
    </section>
  );
};

export default Skills;
