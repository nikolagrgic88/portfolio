import { motion } from "framer-motion";
import { CONNECT } from "../util/util";
import DownloadIcon from "@mui/icons-material/Download";
import Resume from "/assets/NikolaGrgicResume.pdf";

const ContactLinks = () => {
  return (
    <motion.div className="flex w-full gap-2 absolute justify-center bottom-4  md:bottom-10 md:left-10 md:justify-start  pointer-events-auto ">
      {CONNECT.map((connect, i) => (
        <motion.a
          href={connect.url}
          key={i}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
        >
          <img
            src={connect.image}
            alt={`contact-image-${i}`}
            className="w-12 bg-crimson rounded-full"
          />
        </motion.a>
      ))}
      <motion.div
        className="max-h-12 w-12 bg-crimson rounded-full text-black "
        whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}
      >
        <a
          href={Resume}
          className="flex flex-col items-center text-xl font-bold"
          download="NikolaGrgicResume.pdf"
        >
          <p className="-mb-1">CV</p>
          <DownloadIcon />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ContactLinks;
