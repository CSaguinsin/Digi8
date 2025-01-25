"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CarouselItemProps {
  src: string
  alt: string
}

export function CarouselItem({ src, alt}: CarouselItemProps) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-[30rem] h-[30rem] mx-2"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <motion.h2
          className="absolute bottom-10 left-10 text-white text-6xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
        </motion.h2>
      </div>
    </motion.div>
  )
}

