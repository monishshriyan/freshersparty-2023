import { motion } from "framer-motion";

import backgroundImage from "../assets/hi-background.jpg";
import "./HiCard.css";
const HiCard = () => {
  return (
    <motion.div
      initial={{ y: "1rem", filter: "blur(5px)", opacity: 0 }}
      animate={{ y: "0rem", filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.75, ease: "circInOut", delay: 0.3 }}
      className="w-[90%] max-w-96 h-52 rounded-[1.8rem] relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Adjusted to 'contain'
        backgroundRepeat: "no-repeat", // Prevents repeating of the image
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-gray-900 text-6xl font-extrabold tracking-tighter">
        Hi!
      </div>
    </motion.div>
  );
};

export default HiCard;
