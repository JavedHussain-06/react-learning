import { motion } from "motion/react";
import { useState } from "react";
import { flipVariants } from "./variant";
const FlippingCard = () => {
  const [isFlipped, setIsFlipped] = useState(true);
 
  return (
    <motion.div
      className="perspective-1000 rounded-lg overflow-hidden w-64 h-64  mb-8 shas"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variants={flipVariants}
      initial="front"
      onClick={() => setIsFlipped(!isFlipped)}
      animate={isFlipped ? "front" : "back"}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <motion.div className="transform-style-preserve-3d w-full h-full relative overflow-hidden bg-white ">
        <motion.div
          className={`absolute w-full h-full  flex justify-center items-center text-white text-2xl font-bold ${
            isFlipped
              ? "bg-gradient-to-r from-blue-500 to-blue-700"
              : "bg-gradient-to-r from-red-500 to-red-700"
          }`}
        >
          {isFlipped ? "Front" : "Back"}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FlippingCard;
