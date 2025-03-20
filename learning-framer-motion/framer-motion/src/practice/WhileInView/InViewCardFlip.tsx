import { motion,useInView, useAnimation } from "framer-motion";

import { useEffect, useRef } from "react";

const InViewCardFlip = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ rotateY: 180 });
    } else {
      controls.start({ rotateY: 0 });
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="perspective-1000 w-64 h-64">
      <motion.div
        className="relative w-full h-full"
        animate={controls}
        initial={{ rotateY: 0 }}
        transition={{ duration: 1 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center rounded-lg backface-hidden">
          Front
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-green-500 text-white flex items-center justify-center rounded-lg"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          Back
        </div>
      </motion.div>
    </div>
  );
};

export default InViewCardFlip;