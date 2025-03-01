import { motion } from "motion/react";

const DraggableBox = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 50, right: 50, top: 50, bottom: 50 }}
      className="w-32 h-32 bg-green-500 rounded-lg shadow-lg cursor-grabbing flex items-center justify-center"
    >
      Drag me!
    </motion.div>
  );
};

export default DraggableBox;