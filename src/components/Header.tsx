import React from "react";
import "./Header.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type HeaderProps = {
  text: string;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ text, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ y: "1rem", filter: "blur(5px)", opacity: 0 }}
      animate={isInView ? { y: "0rem", filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 0.75, ease: "circInOut" }}
    >
      <header>
        <h1
          className={`w-80 text-center header-title text-7xl text-gray-200 tracking-tighter ${className}`}
        >
          {text}
        </h1>
      </header>
    </motion.div>
  );
};

export default Header;
