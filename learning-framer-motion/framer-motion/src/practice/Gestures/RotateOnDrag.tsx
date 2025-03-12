import { useState } from "react";
import { motion, PanInfo } from "motion/react";

const RotateOnDrag = () => {
  const [rotation, setRotation] = useState(0);

  const handleDrag = (_: MouseEvent, info: PanInfo) => {
    const velocityMultiplier = 0.001;
    const newRotation = rotation + info.velocity.x * velocityMultiplier;
    setRotation(newRotation);
  };
  

  return (
    <motion.div
      drag
      onDrag={handleDrag}
      dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
      style={{ rotate: rotation }}
      className="w-32 h-32 bg-red-500 rounded-lg flex items-center justify-center"
    >
      Drag me!
    </motion.div>
  );
};

export default RotateOnDrag;