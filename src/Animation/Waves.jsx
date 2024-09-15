import { motion, useInView } from "framer-motion";
import { useEffect, useState } from "react";
import { useScroll } from "../context/ScrollProvider";

const Waves = () => {
  const [waves, setWaves] = useState([]);
  const { skillsRef } = useScroll();
  const isInView = useInView(skillsRef, { once: true });

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newWaves = [];

    for (let i = 0; i < 4; i++) {
      newWaves.push({
        x,
        y,
        key: `${Date.now()}-${i}`,
        delay: i * 0.6,
      });
    }
    setWaves((prevWaves) => [...prevWaves, ...newWaves]);
  };
  const handleClickWave = (event) => {
    const newWaves = [];

    for (let i = 0; i < 4; i++) {
      newWaves.push({
        x: 52,
        y: -400,
        key: `${Date.now()}-${i}`,
        delay: i * 0.6,
      });
    }
    setWaves((prevWaves) => [...prevWaves, ...newWaves]);
  };
  useEffect(() => {
    isInView && handleClickWave();
  }, [isInView]);

  return (
    <div className="absolute h-screen left-0 right-0 " onClick={handleClick}>
      {waves.map((wave) => (
        <motion.div
          key={wave.key}
          className="absolute w-72 h-72 rounded-full -z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 7],
            opacity: [1, 0],
            transition: {
              duration: 10,
              ease: "easeOut",
              delay: wave.delay,
            },
          }}
          style={{
            top: `${wave.y}px`,
            left: `${wave.x}px`,
            backgroundColor: "#3498db",
          }}
        />
      ))}
    </div>
  );
};

export default Waves;
