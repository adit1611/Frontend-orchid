import React from 'react';
import { motion } from "framer-motion";

function Marque() {
  return (
    <div  data-scroll data-scroll-section
    data-scroll-speed=".1" className='w-full h-[80vh] bg-[#004d43] rounded-t-3xl overflow-hidden'>
     
    <div className="overflow-hidden w-full h-full text-[12vw] text-white flex items-center leading-tight space-x-10">
      {/* First H1 - No delay */}
      <motion.h1 
        initial={{ x: "100vw" }}  // Starts off-screen (right side)
        animate={{ x: "-100vw" }}  // Moves off-screen (left side)
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}  // Infinite repeat, smooth animation, 10s duration
        className="font-bold whitespace-nowrap"
      >
        We Are Orchi
      </motion.h1>
  
      {/* Second H1 - With a delay */}
      <motion.h1 
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10, delay: 2 }}  // 2s delay
        className="font-bold whitespace-nowrap"
      >
      We Are Orchi
      </motion.h1>
  
      {/* Third H1 - With a further delay */}
      <motion.h1 
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10, delay: 4 }}  // 4s delay
        className="font-bold whitespace-nowrap"
      >
      We Are Orchi
      </motion.h1>
    </div>
</div>


  );
}

export default Marque;
