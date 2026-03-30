"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center text-center pointer-events-auto w-full">
      
      <motion.div
        initial={{ opacity: 1, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_40px_rgba(220,38,38,0.8)] leading-tight px-2 break-words">
          HIMANSHU BIPIN<br className="md:hidden"/> PANDEY<span className="text-red-600 drop-shadow-[0_0_20px_rgba(220,38,38,1)]">.</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 1, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        className="mt-6 text-sm sm:text-base md:text-2xl tracking-wide font-bold text-red-500 max-w-3xl px-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
      >
        Software Developer <span className="text-gray-500 px-1 sm:px-2">|</span> Web Developer <span className="text-gray-500 px-1 sm:px-2">|</span> AI Developer
      </motion.p>

      <motion.div
        initial={{ opacity: 1, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-5"
      >
        <a 
          href="#projects" 
          className="px-10 py-4 rounded-full border border-red-600 bg-red-600/20 backdrop-blur-md text-red-100 hover:bg-red-600 hover:text-white hover:shadow-[0_0_20px_rgba(220,38,38,0.8)] transition-all font-bold tracking-widest text-sm uppercase"
        >
          VIEW WORK
        </a>
        <a 
          href="#contact" 
          className="px-10 py-4 rounded-full border border-black bg-black/50 text-white backdrop-blur-md hover:bg-black hover:border-red-600 hover:text-red-400 transition-all font-bold tracking-widest text-sm uppercase"
        >
          CONTACT ME
        </a>
      </motion.div>
    </div>
  );
}