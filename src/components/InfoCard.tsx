import { motion } from "framer-motion";

const InfoCard = () => {
  return (
    <motion.div
      initial={{ y: "1rem", filter: "blur(5px)", opacity: 0 }}
      animate={{ y: "0rem", filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 0.75, ease: "circInOut", delay: 0.7 }}
      className="w-[90%] max-w-96 rounded-[1.8rem] border-zinc-800 border-[0.05rem] bg-[#151515] flex items-center justify-center"
    >
      <div className="flex flex-col gap-3 items-center justify-center p-10">
        <h1 className="text-gray-100 font-black text-4xl tracking-tight">
          EXCITED FOR YOUR FRESHERS PARTY?
        </h1>
        <p className="text-gray-400 text-lg">
          Get ready to groove and celebrate as we gear up for an unforgettable
          Freshers' Party! Join us at the most happening event of the year,
          where fun, music, and memories await. Let's make this party a day to
          remember!🥰
        </p>
        <p className="animated-gradient-text text-left w-full text-lg">
          #FreshersPartyExcitement
        </p>
      </div>
    </motion.div>
  );
};

export default InfoCard;
