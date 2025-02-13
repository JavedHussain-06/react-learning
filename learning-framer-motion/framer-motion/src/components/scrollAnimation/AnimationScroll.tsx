import { motion } from "motion/react";
export const AnimationScroll = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center w-[100vw] relative">
      <h1 className="absolute top-0 text-2xl font-bold decoration-double underline decoration-red-300">
        scroll to see animation
      </h1>
      <div className="flex items-center relative justify-center w-full h-[400vh]">
        <motion.div
          className="w-20 h-20 bg-yellow-300 shadow-sm shadow-yellow-300 absolute bottom-[30%]"
          initial={{ scale: 0, opacity: 0, x: 380 }}
          transition={{ duration: 1.2 }}
          whileInView={{
            scale: 1.5,
            x: 0,
            borderRadius: "50%",
            border: "2px solid white",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};
