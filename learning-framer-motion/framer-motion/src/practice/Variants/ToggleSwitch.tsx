import { useState } from "react";
import { motion } from "motion/react";

const switchVariants = {
  off: { x: 0 },
  on: { x: 80 },
};

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const handleToggle = () => setIsOn(!isOn);

  return (
    <div className="relative inline-block w-36 h-16">
      <div
        className={`w-full h-full rounded-full bg-gray-300 cursor-pointer ${
          isOn ? "bg-green-500" : ""
        }`}
        onClick={handleToggle}
      />
      <motion.div
        className={`absolute top-1 left-1 w-14 h-14 rounded-full bg-white shadow drop-shadow-lg shadow-gray-500 ${
          isOn ? "bg-yellow-100" : ""} cursor-pointer`}
        variants={switchVariants}
        animate={isOn ? "on" : "off"}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={handleToggle}
      />
     
    </div>
  );
};

export default ToggleSwitch;