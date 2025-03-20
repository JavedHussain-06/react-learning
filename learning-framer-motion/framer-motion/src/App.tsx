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
import ResponsiveButton from "./practice/Transitions/ResponsiveButton";
import Accordion from "./practice/Transitions/Accordion";
import CopyButton from "./practice/Transitions/CopyButton";
import ToastNotification from "./practice/Transitions/ToastNotification";
import BouncingBall from "./practice/keyframes/BouncingBall";
import PulsatingButton from "./practice/keyframes/PulsatingButton";
import ColorChangeSquare from "./practice/keyframes/ColorChangeSquare";
import SlidingText from "./practice/keyframes/SlidingText";
import ZigzagAnimation from "./practice/keyframes/ZigZagAnimation";
import WaveEffect from "./practice/keyframes/WaveEffect";
import AnimatedBackground from "./practice/keyframes/AnimatedBackground";
import FadeInComponent from "./practice/Variants/FadeInComponent";
import ToggleSwitch from "./practice/Variants/ToggleSwitch";
import SlidingMenu from "./practice/Variants/SlidingMenu";
import Tooltip from "./practice/Variants/ToolTip";
import DynamicList from "./practice/Variants/DynamicList";
import SwipeableCard from "./practice/Gestures/SwipeableCard";
import DraggableBox from "./practice/Gestures/DraggableBox";
import RotateOnDrag from "./practice/Gestures/RotateOnDrag";
import TapToChangeColor from "./practice/Gestures/TapToChangeColor";
import LongPressToChangeSize from "./practice/Gestures/LongPressToChangeSize";
import GestureBasedImageGallery from "./practice/Gestures/GestureBasedImageGallery";
import StaggeredList from "./practice/StaggerAnimation/StaggeredList.tsx";
import StaggeredButtonPress from "./practice/StaggerAnimation/StaggeredButtonPress.tsx";
import StaggeredImageGallery from "./practice/StaggerAnimation/StaggeredImageGallery.tsx";
import StaggeredTextReveal from "./practice/StaggerAnimation/StaggerredTextReaveal.tsx";
import StaggeredGridLayout from "./practice/StaggerAnimation/StaggeredGridLauyout.tsx";
import UseDraggableBox from "./practice/UseMotionValue/UseDraggableBox.tsx";
import HoverLinkedScale from "./practice/UseMotionValue/HoverLinkedScale.tsx";
import SpringAnimatedPosition from "./practice/UseMotionValue/SpringAnimatedPostion.tsx";
import DynamicRotation from "./practice/UseMotionValue/DynamicRotation.tsx";
import InViewStaggeredList from "./practice/WhileInView/InViewStaggeredList.tsx";
import InViewCardFlip from "./practice/WhileInView/InViewCardFlip.tsx";
import TimelineAnimation from "./practice/WhileInView/TimeLineAnimation.tsx";
import InteractiveCards from "./practice/WhileInView/InteractiveCard.tsx";
const App = () => {
  return (
    <div className="w-screen h-[2000vh] flex items-center flex-col justify-center bg-gray-800">
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
        {/* <Modal /> */}
        {/* <ResponsiveButton /> */}
        {/* <Accordion /> */}
        {/* <CopyButton /> */}
        {/* <ToastNotification /> */}
        {/* <BouncingBall /> */}
        {/* <PulsatingButton /> */}
        {/* <ColorChangeSquare /> */}
        {/* <SlidingText /> */}
        {/* <ZigzagAnimation /> */}
        {/* <WaveEffect /> */}
        {/* <AnimatedBackground /> */}
        {/* <FadeInComponent /> */}
        {/* <SlidingMenu /> */}
        {/* <Tooltip /> */}
        {/* <ToggleSwitch /> */}
        {/* <DynamicList /> */}
        {/* <SwipeableCard /> */}
        {/* <DraggableBox /> */}
        {/* <RotateOnDrag /> */}
        {/* <TapToChangeColor /> */}
        {/* <LongPressToChangeSize /> */}
        {/* <GestureBasedImageGallery /> */}
        {/* <StaggeredList  /> */}
        {/* <StaggeredButtonPress /> */}
        {/* <StaggeredImageGallery /> */}
        {/* <StaggeredTextReveal /> */}
        {/* <StaggeredGridLayout /> */}
        <UseDraggableBox />
        {/* <HoverLinkedScale /> */}
        {/* <SpringAnimatedPosition /> */}
        {/* <DynamicRotation /> */}
        {/* <InViewStaggeredList /> */}
        <InViewCardFlip />
        <TimelineAnimation />
        <InteractiveCards />
    </div>
  );
};

export default App;
