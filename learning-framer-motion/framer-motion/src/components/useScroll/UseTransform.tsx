import {motion, useScroll, useTransform} from "motion/react"
function UseTransform() {
    const {scrollY} = useScroll()
    const scale = useTransform(scrollY, [0,300], [1, 1.5])
    const opacity = useTransform(scrollY , [0,300], [1,0])
    const borderRadius = useTransform(scrollY, [0, 300],["10%", "50%"])
  return (
    <div className="flex justify-center items-center h-[150vh] ">
        <motion.div className="shadow-lg shadow-white bg-blue-500 w-28 h-28" style={{scale, opacity, borderRadius}} />
    </div>
  )
}

export default UseTransform