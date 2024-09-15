import { useRef, useState, useEffect } from "react";
import Particle from "../Animation/Particle";
import { math } from "canvas-sketch-util";
import eases from "eases";
import { scaleLinear } from "d3-scale";

const useImageParticleCreator = (imageA, imageB) => {
  const [particles, setParticles] = useState([]);
  const particlesInitialized = useRef(false);

  useEffect(() => {
    const loadImageData = (imageA, imageB) => {
      return new Promise((resolve, reject) => {
        const imgA = new Image();
        const imgB = new Image();

        let imgACanvas, imgAContext, imgAData, imgBData;

        // Load Image A
        imgA.src = imageA;
        imgA.onload = () => {
          imgACanvas = document.createElement("canvas");
          imgACanvas.width = imgA.width;
          imgACanvas.height = imgA.height;
          imgAContext = imgACanvas.getContext("2d");
          if (!imgAContext) {
            reject(new Error("Could not get canvas context for image A"));
            return;
          }

          imgAContext.drawImage(imgA, 0, 0);
          imgAData = imgAContext.getImageData(
            0,
            0,
            imgA.width,
            imgA.height
          ).data;

            if (imgBData) {
            resolve({ imgAData, imgA, imgACanvas, imgAContext, imgBData });
          }
        };
        imgA.onerror = () => reject(new Error("Error loading image A"));

        // Load Image B
        imgB.src = imageB;
        imgB.onload = () => {
          const imgBCanvas = document.createElement("canvas");
          imgBCanvas.width = imgB.width;
          imgBCanvas.height = imgB.height;
          const imgBContext = imgBCanvas.getContext("2d");
          if (!imgBContext) {
            reject(new Error("Could not get canvas context for image B"));
            return;
          }
          imgBContext.drawImage(imgB, 0, 0);
          imgBData = imgBContext.getImageData(
            0,
            0,
            imgB.width,
            imgB.height
          ).data;

          if (imgAData) {
            resolve({ imgAData, imgA, imgACanvas, imgAContext, imgBData });
          }
        };
        imgB.onerror = () => reject(new Error("Error loading image B"));
      });
    };

    loadImageData(imageA, imageB)
      .then(({ imgAData, imgA, imgACanvas, imgBData }) => {
        if (!particlesInitialized.current) {
          const newParticles = createParticles(
            imgACanvas,
            imgAData,
            imgA,
            imgBData
          );
          setParticles(newParticles);
          particlesInitialized.current = true;
        }
      })
      .catch((error) => console.error("Failed to load image", error));
  }, [imageA, imageB]);

  const createParticles = (canvas, imgAData, imgA, imgBData) => {
    const newParticles = [];
    const { width, height } = canvas;

    let radius;
    const maxRadius = Math.max(height / 2, width / 2);
    const numCircles = 20;
    const gapCircle = 10;
    const gapDot = 8;
    let dotRadius = 7;
    let cirRadius = 2;
    const fitRadius = dotRadius;

    for (let i = 0; cirRadius < maxRadius; i++) {
      const circumference = Math.PI * 2 * cirRadius;
      const numFit = i
        ? Math.floor(circumference / (fitRadius * 2 + gapDot))
        : 1;
      const fitSlice = (Math.PI * 2) / numFit;

      for (let j = 0; j < numFit; j++) {
        const theta = fitSlice * j;

        let x = Math.cos(theta) * cirRadius;
        let y = Math.sin(theta) * cirRadius;

        x += width * 0.55;
        y += height * 0.5;

        const ix = Math.max(
          0,
          Math.min(Math.floor((x / width) * imgA.width), imgA.width - 1)
        );
        const iy = Math.max(
          0,
          Math.min(Math.floor((y / height) * imgA.height), imgA.height - 1)
        );

        const idx = (iy * imgA.width + ix) * 4;

        const colorA = `rgba(${imgAData[idx]}, ${imgAData[idx + 1]}, ${
          imgAData[idx + 2]
        }`;
        const colorB = `rgba(${imgBData[idx]}, ${imgBData[idx + 1]}, ${
          imgBData[idx + 2]
        }`;

        const colorMap = scaleLinear()
          .domain([1, 10])
          .range([colorA, colorB])
          .clamp(true);

        radius = math.mapRange(imgAData[idx], 0, 280, 1, 12);
        const particle = new Particle({
          x,
          y,
          radius,
          colorMap,
        });
        newParticles.push(particle);
      }
      cirRadius += fitRadius * 2 + gapCircle;
      dotRadius = (1 - eases.quadOut(i / numCircles)) * fitRadius;
    }

    return newParticles;
  };

  return particles;
};

export default useImageParticleCreator;
