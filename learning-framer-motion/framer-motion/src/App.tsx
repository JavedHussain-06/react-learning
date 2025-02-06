import { motion } from "motion/react";
import Loading from "./components/Loading";
import Ball from "./components/variants/Ball";
import Box from "./components/gesture/Box";
import FlippingCard from "./components/variants/FlippingCard";
import { AnimatedCard } from "./components/gesture/AnimatedCard";
import ImageGallery from "./components/gesture/ImageGallery";
import { AnimatedShaped } from "./components/variants/AnimatedShaped";
import StaggerAnimation from "./components/staggerAnimation/StaggerAnimation";
import AnimatedGallery from "./components/staggerAnimation/AnimatedGallery";
import RangeSlider from "./components/useMotion/RangeSlider";
const App = () => {
  return (
    <>
      {/* <motion.div className="box" animate={
      {
        scale: [1, 1.5, 1.5, 1, 1],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        rotate: [0, 0, 270, 270, 0],
        backgroundColor: ["#FF0000", "#00FF00", "#0000FF", "#FF0000"],
      }
    } 
      transition={{repeat: Infinity, duration: 2 , delay: 0.5, ease: "easeInOut"}}
    /> */}

      {/* <Loading /> */}
      {/* <FlippingCard />
    <Ball /> */}
      {/* <Box /> */}
      {/* <AnimatedCard /> */}
      {/* <ImageGallery /> */}
      {/* <AnimatedShaped /> */}
      {/* <StaggerAnimation/> */}
        {/* <AnimatedGallery /> */}
        <RangeSlider />
    </>
  );
};

export default App;
