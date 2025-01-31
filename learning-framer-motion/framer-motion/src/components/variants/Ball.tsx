import { motion } from "motion/react"
import { useState } from "react"
import { ballVariants } from "./variant"

const Ball = () => {
    const Variants = ballVariants
    const [isVisible, setIsVisible] = useState(false)
  return (
    <motion.div 
    className="bg-yellow-400 rounded-full border-none w-20 h-20 shadow-lg shadow-orange-600"
     variants={Variants}
     initial="visible"
     animate= {isVisible ?"visible" :"hidden"}
     transition={{duration: 2 , ease: "easeIn", }}
     onClick={() => setIsVisible(!isVisible)}
    />
  )
}

export default Ball