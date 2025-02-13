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
import DragMeBox from "./components/useTransform/DragMeBox";
import { AnimationScroll } from "./components/scrollAnimation/Animationscroll";
import UseAnimationScroll from "./components/useScroll/useAnimationScroll";
import UseTransform from "./components/useScroll/UseTransform";
import SlidingBox from "./practice/Transformations/box";
import BouncingCircle from "./practice/Transformations/BouncingCircle";
import SpinningIcon from "./practice/Transformations/SpinningIcon";
import SkewRectangle from "./practice/Transformations/SkewRectangle";
import ComplexAnimation from "./practice/Transformations/ComplexAnimation";
import SequentialBoxes from "./practice/Transformations/SequentialBoxes";
import FadeComponent from "./practice/Transitions/FadeComponent";
import Sidebar from "./practice/Transitions/Sidebar";
import Modal from "./practice/Transitions/Modal";
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
        {/* <RangeSlider /> */}
        {/* <DragMeBox /> */}
        {/* <AnimationScroll /> */}
        {/* <UseAnimationScroll /> */}
        {/* <UseTransform /> */}
        {/* <SlidingBox /> */}
        {/* <BouncingCircle /> */}
        {/* <SpinningIcon/> */}
        {/* <SkewRectangle /> */}
        {/* <ComplexAnimation /> */}
        {/* <SequentialBoxes /> */}
        {/* <FadeComponent /> */}
        {/* <Sidebar /> */}
        <Modal />
    </>
  );
};

export default App;
