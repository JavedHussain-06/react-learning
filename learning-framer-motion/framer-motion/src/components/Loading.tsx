import { motion } from "motion/react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={index}
          className="w-4 rounded-full m-2 flex bg-white  h-4 "
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            delay: index * 0.1,
            reverseType: "reverse",
            ease: "easeInOut",
            duration: 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default Loading;
