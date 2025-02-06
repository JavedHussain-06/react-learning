import { motion } from "motion/react"

const parentVariants = {
    hidden: {
        opacity: 0,
        y:10,
      
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            staggerChildren:0.8,
        },
    }
 
}

const childVariants = {
    hidden: {
        opacity: 0,
        y:10,
    },
    visible: {
        opacity: 1,
        y:0,
    }
}

const StaggerAnimation = () => {
  return (
    <motion.div className="flex items-center justify-center h-screen flex-col" variants={parentVariants}
    initial={"hidden"}
    animate={"visible"}>
        {[...Array(5)].map((_, i) => (
            <motion.div
                className="box m-[1rem] rounded-full"
                key={i}
                variants={childVariants}
                transition={{type: "spring", stiffness: 800, }}
            />
        ))}
    </motion.div>
  )
}

export default StaggerAnimation