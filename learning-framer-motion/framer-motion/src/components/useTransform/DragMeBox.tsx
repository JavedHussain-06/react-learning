import {motion,useMotionValue, useTransform} from "motion/react"

const DragMeBox = () => {
const x = useMotionValue(0)
const y = useMotionValue(0)
const backgroundColor = useTransform(x, [-200, 200], ["#ff0000", "#7700ff"])
  return (
    <motion.div className="box text-black text-2xl flex justify-center items-center rounded shadow-orange-100 shadow-sm cursor-pointer font-bold p-2 " style={{x, y, backgroundColor}}
    drag
    dragConstraints={{left: -200, right: 200, top: -200, bottom: 200}}>
        Drag me
    </motion.div>
  )
}

export default DragMeBox