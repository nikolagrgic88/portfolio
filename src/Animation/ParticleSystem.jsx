import React, { useEffect, useRef, useState } from "react";
import useImageParticleCreator from "../hooks/useImageParticleCreator";
import profile from "/assets/logos/DesignNikolarev.png";
import colors from "/assets/logos/colors1.jpg";
import background from "/assets/logos/DesignNikola.png";

const ParticleSystem = () => {
  const canvasRef = useRef(null);
  const [animationState, setAnimationState] = useState(0);
  const [cursor, setCursor] = useState({ x: 9999, y: 9999 });

  const settings = {
    dimensions: [973, 973],
  };
  const particles = useImageParticleCreator(profile, colors);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const backgroundImage = new Image();
    backgroundImage.src = background;

    const animate = () => {
      setAnimationState((prev) => prev + 1);

      if (backgroundImage.complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
      } else {
        backgroundImage.onload = () => {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        };
      }

      particles.sort((a, b) => a.scale - b.scale);

      particles.forEach((particle) => {
        particle.update(cursor);
        particle.draw(context);
      });
    };
    requestAnimationFrame(animate);

    // Mouse event handlers

    const handleMove = (e) => {
      const isTouch = e.type.startsWith("touch");
      const event = isTouch ? e.touches[0] : e;
      const rect = canvas.getBoundingClientRect();

      const x = ((event.clientX - rect.left) / rect.width) * canvas.width;
      const y = ((event.clientY - rect.top) / rect.height) * canvas.height;
      setCursor({ x, y });

      if (isTouch) e.preventDefault();
    };

    const handleLeave = () => {
      setCursor({ x: 9999, y: 9999 });
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", handleLeave);
    canvas.addEventListener("touchstart", handleMove, { passive: false });
    canvas.addEventListener("touchmove", handleMove, { passive: false });
    canvas.addEventListener("touchend", handleLeave);

    return () => {
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
      canvas.removeEventListener("touchstart", handleMove);
      canvas.removeEventListener("touchmove", handleMove);
      canvas.removeEventListener("touchend", handleLeave);
    };
  }, [cursor, animationState]);

  return (
    <canvas
      ref={canvasRef}
      width={settings.dimensions[0]}
      height={settings.dimensions[1]}
      className="w-full max-h-svh rounded-full"
    />
  );
};

export default ParticleSystem;
