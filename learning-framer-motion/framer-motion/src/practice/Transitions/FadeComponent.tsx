import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const FadeComponent = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center ">
      <button
        className="mb-4 p-2 rounded bg-blue-500"
        onClick={() => setVisible(!visible)}
      >
        Toggle fade
      </button>
    <AnimatePresence >

      {visible && (
        <motion.div
          className="p-4 bg-teal-200 rounded h-24 w-24"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      )}
    </AnimatePresence>

    </div>
  );
};

export default FadeComponent;
