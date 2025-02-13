import {motion, useMotionValueEvent, useScroll} from "motion/react"

function UseAnimationScroll() {
  const {scrollY} = useScroll()
  console.log(scrollY)
  useMotionValueEvent(scrollY , "change" , (latest)=>(
    console.log("page scroll", latest)
  ))
  return (
    <motion.div className="h-[200vh] ">UseAnimationScroll</motion.div>
  )
}

export default UseAnimationScroll