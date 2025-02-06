import { motion } from "motion/react";

export const AnimatedCard = () => {
  return (
    <motion.div
      className="max-w-sm bg-gray-400/10 backdrop-blur-lg  h-68 border-2  border-red-50 rounded-xl cursor-pointer"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 650 }}
    >
      <motion.div
        className=" h-68  overflow-hidden rounded-xl"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 3}}
      
      >
        <img
          src="https://images.unsplash.com/photo-1728408828574-70a460530093?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card image"
          className="w-fit object-cover rounded-lg"
        />
    <div className="p-4 m-2">
        <h2 className="text-2xl  text-center  underline ">Card Title</h2>
        <p className="text-center">This ids as animated card using gesture.</p>
        </div>
      </motion.div>
    </motion.div>
  );
};
