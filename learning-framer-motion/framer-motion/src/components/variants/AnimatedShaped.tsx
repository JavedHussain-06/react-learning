import {motion} from "motion/react"
import {shapeVariants} from "./variant"
export const AnimatedShaped = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
      className="w-40 h-40 bg-blue-500 shadow-xl shadow-white"
      variants={shapeVariants}
      initial="initial"
      whileHover={"hover"}
      whileTap={"click"}
      whileDrag={"drag"}
      dragConstraints={{ left: 0, right: 500, top: 0, bottom: 500 }}
      drag
      />
    </div>
  )
}
