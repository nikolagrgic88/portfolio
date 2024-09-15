import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ProjectCard = ({ card }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { damping: 35, stiffness: 70 });
  const ySpring = useSpring(y, { damping: 35, stiffness: 70 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = mouseX / width - 0.5;
    const rY = mouseY / height - 0.5;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="relative w-72 h-96 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <a
        href={card.href}
        style={{
          transform: "translateZ(35px)",
          transformStyle: "preserve-3d",
        }}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      >
        <div>
          <img src={card.img} alt={card.name} />
        </div>
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="absolute text-center w-full text-xl md:text-xl font-bold text-crimson"
        >
          {card.name}
        </p>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
