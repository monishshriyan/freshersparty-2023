import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type InstructionsCardProps = {
  heading?: string;
  para1?: string;
  para2?: string;
};

const InstructionsCard: React.FC<InstructionsCardProps> = ({
  heading,
  para1,
  para2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ y: "1rem", filter: "blur(5px)", opacity: 0 }}
      animate={isInView ? { y: "0rem", filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 0.75, ease: "circInOut" }}
      className="flex flex-col items-center justify-center gap-5"
    >
      <div className="w-[90%] max-w-96 flex flex-col gap-3 items-center justify-center p-10 rounded-[1.8rem] bg-[#151515] border-zinc-800 border-[0.05rem] ">
        {heading && (
          <h1 className="text-gray-100 font-bold text-4xl">{heading}</h1>
        )}
        {para1 && (
          <p className="text-gray-400 text-lg leading-tight">{para1}</p>
        )}
        {para2 && (
          <p className="text-gray-400 text-lg leading-tight">{para2}</p>
        )}
      </div>
    </motion.div>
  );
};

export default InstructionsCard;
