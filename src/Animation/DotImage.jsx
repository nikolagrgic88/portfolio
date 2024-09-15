import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import random from "canvas-sketch-util/random";
import math from "canvas-sketch-util/math";

import interpolate from "color-interpolate";

const DotImage = ({
  imageAUrl,
  imageBUrl,
  numCircles = 20,
  dotRadius = 12,
  gapCircle = 2,
  gapDot = 2,
}) => {
  const canvasRef = useRef(null);
  const controls = useAnimation();
  const [particles, setParticles] = useState([]);
  const [cursor, setCursor] = useState({ x: 9999, y: 9999 });
  let cirRadius = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const loadImage = (url) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject();
        img.src = url;
      });

    const start = async () => {
      const imgA = await loadImage(imageAUrl);
      const imgB = await loadImage(imageBUrl);

      const imgACanvas = document.createElement("canvas");
      const imgAContext = imgACanvas.getContext("2d");
      imgACanvas.width = imgA.width;
      imgACanvas.height = imgA.height;
      imgAContext.drawImage(imgA, 0, 0);
      const imgAData = imgAContext.getImageData(
        0,
        0,
        imgA.width,
        imgA.height
      ).data;

      const imgBCanvas = document.createElement("canvas");
      const imgBContext = imgBCanvas.getContext("2d");
      imgBCanvas.width = imgB.width;
      imgBCanvas.height = imgB.height;
      imgBContext.drawImage(imgB, 0, 0);
      const imgBData = imgBContext.getImageData(
        0,
        0,
        imgB.width,
        imgB.height
      ).data;

      const fitRadius = dotRadius;

      for (let i = 0; i < numCircles; i++) {
        const circumference = Math.PI * 2 * cirRadius;
        const numFit = i
          ? Math.floor(circumference / (fitRadius * 2 + gapDot))
          : 1;
        const fitSlice = (Math.PI * 2) / numFit;

        for (let j = 0; j < numFit; j++) {
          const theta = fitSlice * j;

          let x = Math.cos(theta) * cirRadius + canvas.width * 0.5;
          let y = Math.sin(theta) * cirRadius + canvas.height * 0.5;

          const ix = Math.floor((x / canvas.width) * imgA.width);
          const iy = Math.floor((y / canvas.height) * imgA.height);
          const idx = (iy * imgA.width + ix) * 4;
          const r = imgAData[idx + 0];
          const g = imgAData[idx + 1];
          const b = imgAData[idx + 2];
          const colA = `rgb(${r}, ${g}, ${b})`;
          const radius = math.mapRange(r, 0, 255, 1, dotRadius);

          const rB = imgBData[idx + 0];
          const gB = imgBData[idx + 1];
          const bB = imgBData[idx + 2];
          const colB = `rgb(${rB}, ${gB}, ${bB})`;
          const colMap = interpolate([colA, colB]);

          particles.push({
            id: `${i}-${j}`,
            x,
            y,
            radius,
            color: colMap(0),
            colMap,
            scale: 1,
            ax: 0,
            ay: 0,
            vx: 0,
            vy: 0,
            ix: x,
            iy: y,
            minDist: random.range(100, 200),
            pushFactor: random.range(0.01, 0.02),
            pullFactor: random.range(0.002, 0.006),
            dampFactor: random.range(0.9, 0.95),
          });
        }

        cirRadius += fitRadius * 2 + gapCircle;
      }
      setParticles(particles);
      drawParticles(context);

      const handleMouseMove = (e) => {
        const x = (e.offsetX / elCanvas.offsetWidth) * elCanvas.width;
        const y = (e.offsetY / elCanvas.offsetHeight) * elCanvas.height;
        setCursor({ x, y });
      };

      const handleMouseUp = () => {
        setCursor({ x: 9999, y: 9999 });
      };

      canvas.addEventListener("mousedown", (e) => {
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseup", handleMouseUp);
        handleMouseMove(e);
      });
    };

    start();
  }, [imageAUrl, imageBUrl]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const animate = () => {
      drawParticles(context);
      requestAnimationFrame(animate);
    };

    animate();
  }, [cursor, particles]);

  const drawParticles = (context) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    particles.sort((a, b) => a.scale - b.scale);
    particles.forEach((particle) => {
      particle.update(cursor);
      context.save();
      context.translate(particle.x, particle.y);
      context.fillStyle = particle.color;
      context.beginPath();
      context.arc(0, 0, particle.radius * particle.scale, 0, Math.PI * 2);
      context.fill();
      context.restore();
    });
  };

  return (
    <div style={{ position: "relative" }}>
      <canvas ref={canvasRef} width="1080" height="1080" />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          animate={controls}
          whileHover={{
            scale: 1.2,
            x: particle.x + (Math.random() - 0.5) * particle.radius * 2,
            y: particle.y + (Math.random() - 0.5) * particle.radius * 2,
          }}
          onHoverStart={() =>
            controls.start({
              x: particle.x,
              y: particle.y,
              transition: { duration: 0.8, ease: "easeOut" },
            })
          }
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: particle.radius * 2,
            height: particle.radius * 2,
            borderRadius: "50%",
            backgroundColor: particle.color,
          }}
        />
      ))}
    </div>
  );
};

export default DotImage;
