import Animation from "../Animation";

const SkillsBio = ({ isInView }) => {
  return (
    <div className="relative flex flex-col items-center mt-10 xl:flex-row xl:justify-center xl:gap-36 w-5/6 xl:mt-20 gap-20">
      <div className="flex flex-col h-aut0 w-[45%] gap-5 whitespace overflow-hidde h-[25rem] justify-center max-md:w-[75%]">
        <div>
          <h3 className="text-center xl:text-start">
            I&apos;m constantly expanding my skill set and exploring new technologies
            to create the best user experience
          </h3>
        </div>
        <div>
          <h3 className="text-center xl:text-start">Frontend</h3>
          <p className="text-center xl:text-start">
            JavaScript / React / TypeScript / Redux / React Router / Motion
            / Jest / CSS / SCSS / Tailwind CSS / MUI / Three.js / Spline / Zustand
          </p>
        </div>
        <div>
          <h3 className="text-center xl:text-start">Backend</h3>
          <p className="text-center xl:text-start">
            PostgreSQL / Firebase / Auth0 / Kotlin / Express / Mongoose / MongoDB / NodeJS
          </p>
        </div>
        <div>
          <h3 className="text-center xl:text-start">Tools</h3>
          <p className="text-center xl:text-start">
            GitHub / GitLab / VSCode / JetBrains / Splunk / Salesforce
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
