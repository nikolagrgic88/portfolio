import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { createPortal } from "react-dom";
import { Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";

const ProjectCard = ({ card }) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

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
    <>
      <motion.div
        ref={ref}
        layoutId={`card-${card.name}`}
        onClick={() => setIsOpen(true)}
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-72 h-96 md:w-96 md:h-[28rem] rounded-xl bg-gradient-to-b from-dark-violet to-pink-300 z-40 "
      >
        <motion.div
          // layout
          href={card.href}
          style={{
            transform: "translateZ(35px)",
            transformStyle: "preserve-3d",
          }}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
        >
          <motion.div>
            <motion.img
              layoutId={`image-${card.name}`}
              src={card.img}
              alt={card.name}
              style={{
                // transform: "translateZ(95px)",
                transformStyle: "preserve-3d",
              }}
            />
          </motion.div>
          <motion.p
            layoutId={`title-${card.name}`}
            style={{
              transform: "translateZ(50px)",
            }}
            className="absolute text-center w-full top-5 text-xl md:text-xl font-bold text-violet"
          >
            {card.name}
          </motion.p>
        </motion.div>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div key={`modal-${card.name}`}>
              {/* modal overlay */}
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />

              {/* Expanded card */}
              <motion.div
                layoutId={`card-${card.name}`}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 90, damping: 20 }}
                className="flex flex-col items-center fixed inset-0 m-auto w-[28rem] h-[50rem] bg-white rounded-xl z-50 shadow-xl overflow-hidden md:w-[50rem] md:h-[50rem]"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 hover:text-violet text-pink-700 text-2xl font-bold"
                >
                  ✕
                </button>
                {/* top card */}
                <div className="flex w-full bg-gray-100 h-[60%] overflow-hidden content-center justify-center ">
                  <motion.img
                    // layoutId={`image-${card.name}`}
                    src={card.img}
                    alt={card.name}
                    className="w-[80%] h-full  mt-10  mb-4 rounded-xl z-50 shadow-2xl"
                  />
                </div>
                {/* bottom card */}
                <div className="flex flex-col h-full justify-around mx-10 my-5 ">
                  <div className="">
                    <motion.h2
                      // layoutId={`title-${card.name}`}
                      className="text-2xl font-bold text-violet mb-2"
                    >
                      {card.name}
                    </motion.h2>
                    <p className="font-bold">{card.stack}</p>
                    <p className="py-3">{card.description}</p>
                    <h3 className="font-bold">Key Features</h3>
                    <ol className="text-gray-700 list-disc list-inside mt-2">
                      {card.features.map((i, n) => (
                        <li key={n}>{i}</li>
                      ))}
                    </ol>
                    {card.login && (
                      <div className=" border-dashed border-2 m-3 p-2">
                        <h3>Demo Credentials</h3>
                        <div className="flex gap-10">
                          <div>
                            <p
                              onClick={() =>
                                navigator.clipboard.writeText(
                                  card.login.company.id
                                )
                              }
                              className="cursor-pointer hover:text-violet transition"
                              title="Click to copy"
                            >
                              {" "}
                              <strong>Company Id: </strong>
                              {card.login.company.id}
                            </p>
                            <p
                              onClick={() =>
                                navigator.clipboard.writeText(
                                  card.login.company.password
                                )
                              }
                              className="cursor-pointer hover:text-violet transition"
                              title="Click to copy"
                            >
                              <strong>Password: </strong>
                              {card.login.company.password}
                            </p>
                          </div>
                          <div>
                            <p
                              onClick={() =>
                                navigator.clipboard.writeText(
                                  card.login.user.id
                                )
                              }
                              className="cursor-pointer hover:text-violet transition"
                              title="Click to copy"
                            >
                              <strong>User Id: </strong>
                              {card.login.user.id}
                            </p>
                            <p
                              onClick={() =>
                                navigator.clipboard.writeText(
                                  card.login.user.password
                                )
                              }
                              className="cursor-pointer hover:text-violet transition"
                              title="Click to copy"
                            >
                              <strong>Password: </strong>
                              {card.login.user.password}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-5">
                    {card.isLive && (
                      <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<LanguageIcon />}
                        onClick={() => window.open(card.websiteRef, "_blank")}
                      >
                        View Live Project
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<CodeIcon />}
                      onClick={() => window.open(card.gitHubRef, "_blank")}
                    >
                      View Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default ProjectCard;
