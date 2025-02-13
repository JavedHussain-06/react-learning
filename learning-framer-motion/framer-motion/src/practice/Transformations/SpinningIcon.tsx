import { motion } from "motion/react";

const SpinningIcon = () => (
  <motion.img
    src="https://framerusercontent.com/images/PW7TZzsRuEq5sLfu3FYVeD6Kcg.png"
    className="w-20 h-20"
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
  />
);

export default SpinningIcon;