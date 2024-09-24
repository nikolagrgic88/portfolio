import Animation from "../Animation";

const SkillsBio = ({ isInView }) => {
  return (
    <div className="relative flex flex-col items-center mt-10 xl:flex-row xl:justify-center xl:gap-36 w-5/6 xl:mt-20 gap-20">
      <div className="flex flex-col h-aut0 w-[45%] gap-5 whitespace overflow-hidde h-[25rem] justify-center max-md:w-[75%]">
        <div>
          <h3 className="text-center xl:text-start">
            I'm constantly expending my skill set and exploring new technologies
            to create the best user experience
          </h3>
        </div>
        <div>
          <h3 className="text-center xl:text-start">Frontend</h3>
          <p className="text-center xl:text-start">
            JavaScrip / React / TypeScript / Redux React Router / Framer Motion
            / Jest / Redux Css / SCSS / Tailwind CSS / MUI / Three.js
          </p>
        </div>
        <div>
          <h3 className="text-center xl:text-start">Backend end</h3>
          <p className="text-center xl:text-start">
            PostgreSQL / Firebase / Auth0 / Kotlin
          </p>
        </div>
        <div>
          <h3 className="text-center xl:text-start">Tools</h3>
          <p className="text-center xl:text-start">
            GitHub / GitLab / VSCode / JetBrains / Splunk / SalesForce
          </p>
        </div>
      </div>
      <div className="mt-10 w-96 h-[25rem]">
        {isInView && <Animation.SkillsImages />}
        <div className="relative">
          <Animation.Waves />
        </div>
      </div>
    </div>
  );
};

export default SkillsBio;
