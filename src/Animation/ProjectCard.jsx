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

  const startX = useRef(null);
  const startY = useRef(null);

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    startX.current = touch.clientX;
    startY.current = touch.clientY;
  };

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

  const handleTouchMove = (event) => {
    if (!ref.current || startX.current === null || startY.current === null)
      return;

    const touch = event.touches[0];
    const deltaX = touch.clientX - startX.current;
    const deltaY = touch.clientY - startY.current;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const rX = deltaX / width;
    const rY = deltaY / height;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const handleTouchEnd = () => {
    x.set(0);
    y.set(0);
    startX.current = null;
    startY.current = null;
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="relative w-72 h-96  md:w-96 md:h-[28rem] rounded-xl bg-gradient-to-b from-dark-violet to-violet "
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
          className="absolute text-center w-full top-5 text-xl md:text-xl font-bold text-crimson"
        >
          {card.name}
        </p>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
