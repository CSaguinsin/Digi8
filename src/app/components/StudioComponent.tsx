"use client"

import { motion } from "framer-motion"
import { StudioCarousel } from "./studio-carousel"

export default function Studio() {
  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-center font-bold font-archivo-black text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Studio
      </motion.h1>
      <p className="text-white font-sans text-center text-base sm:text-lg md:text-xl px-4 sm:px-12 md:px-20 lg:px-40 mb-10 leading-relaxed">
        For over 25 years, Digi-8 Studios has established itself as a company that produces
        excellent work quality, has sound business ethics, and delivers what it promises.
      </p>      
      <StudioCarousel />
    </section>
  )
}
