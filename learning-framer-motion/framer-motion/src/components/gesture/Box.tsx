import { motion } from "motion/react";

const Box = () => {
  return (
    // Drag the box within the constraints of the parent element also hover and tap animations
    <motion.div
      className="box flex justify-center items-center text-black text-2xl font-bold rounded-md"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileHover={{ scale: 1.5, borderRadius: "20%" }}
      whileTap={{ scale: 0.9, borderRadius: "50%" }}
      transition={{ type: "spring", stiffness: 500 }}
    >
        Box 
    </motion.div>
  );
};

export default Box;
