import { useState } from "react";
import "./TwitterLike.css";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";

const TwitterLike = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleDisplay = () => {
    if (likeCount === 0) {
      setLikeCount((prevCount) => {
        const newCount = prevCount + 1;
        toast.success(`Thanks! you liked my work. (＾▽＾)`, {
          style: { fontFamily: "Inter", fontSize: "1rem" },
        });
        return newCount;
      });
      setLiked(true);
    } else {
      setLikeCount((prevCount) => {
        const newCount = prevCount - 1;
        toast.error(`! !(╥﹏╥) ! !`, {
          style: { fontFamily: "Inter", fontSize: "1rem" },
        });
        return newCount;
      });
      setLiked(false);
    }
  };

  return (
    <div>
      <Toaster
        richColors
        position="top-center"
        toastOptions={{
          style: { fontFamily: "Inter", fontSize: "1rem" },
        }}
      ></Toaster>
      <div className="heart-bg w-12 h-12 ">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={` heart-icon w-12 h-12 rounded-full border-zinc-800 border-[0.05rem] bg-[#000000] ${
            liked ? "liked" : ""
          }`}
          onClick={toggleDisplay}
        ></motion.div>
      </div>
    </div>
  );
};

export default TwitterLike;
