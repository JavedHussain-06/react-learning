import { useState } from "react";
import { motion } from "motion/react";

const RotateOnDrag = () => {
  const [rotation, setRotation] = useState(0);

  const handleDrag = (_: MouseEvent, info: { offset: { x: number} }) => {
    const newRotation = rotation + info.offset.x;
    setRotation(newRotation);
  };
  

  return (
    <motion.div
      drag
      onDrag={handleDrag}
      style={{ rotate: rotation }}
      className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center"
    >
      Drag me!
    </motion.div>
  );
};

export default RotateOnDrag;