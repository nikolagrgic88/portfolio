import { useScroll } from "../context/ScrollProvider";
import Animation from "../Animation";
import { PROJECTS } from "../util/util";
import SectionHeading from "../Components/SectionHeading";
import earth from "/assets/planets/earth.png";
import mars from "/assets/planets/mars.png";

const Projects = () => {
  const { projectsRef } = useScroll();
  return (
    <section
      ref={projectsRef}
      id="projects"
      className="h-fit md:h-screen flex flex-col items-center justify-center gap-24"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="w-full flex flex-col items-center gap-10 md:flex-row md:justify-center">
        {PROJECTS.map((project, index) => (
          <Animation.ProjectCard card={project} key={index} />
        ))}
      </div>
      {/* <Animation.StarsCanvas /> */}
      <div className="flex w-full relative justify-between mb-20">
        <Animation.Planet
          img={earth}
          rotate={true}
          className={"absolute top-20 opacity-70"}
          glowColor={"white"}
        />
        <Animation.Planet
          img={mars}
          rotate={true}
          className={" opacity-1 max-w-12"}
          glowColor={'brown'}
        />
      </div>
    </section>
  );
};

export default Projects;
