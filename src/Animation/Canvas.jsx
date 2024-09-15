import { useRef, useEffect } from "react";

const Canvas = ({ sketch, settings }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const resize = () => {
      canvas.width = settings.dimensions[0];
      canvas.height = settings.dimensions[1];
    };

    resize();
    window.addEventListener("resize", resize);

    const loop = sketch({
      context,
      width: canvas.width,
      height: canvas.height,
      canvas,
    });

    const animate = () => {
      loop({ context, width: canvas.width, height: canvas.height });
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [sketch, settings]);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
