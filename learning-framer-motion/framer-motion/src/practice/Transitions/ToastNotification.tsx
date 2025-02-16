import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ToastNotification = () => {
  const [visible, setVisible] = useState(false);

  const showToast = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 30000);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="mb-4 p-2 bg-blue-500 text-white rounded"
        onClick={showToast}
      >
        Show Notification
      </button>
      <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-4 right-4 p-4 bg-green-500 text-white rounded"
          initial={{ opacity: 0, translateY: -20 , translateX: 20}}
          animate={{ opacity: 1, translateY: 0, translateX: -10 }}
          exit={{ opacity: 0, translateY: -20 }}
          transition={{ type: "spring", stiffness: 500, damping: 10 }}
        >
          Notification: Action Successful!
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default ToastNotification;