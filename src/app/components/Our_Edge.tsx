"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurEdge() {
  return (
    <section className="bg-gray-900 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-left font-bold font-archivo-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Edge
        </motion.h1>
        <motion.p
  className="text-gray-300 font-sans text-base sm:text-lg md:text-lg mb-8 md:mb-12 text-left max-w-none"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <span className="ml-8">
    Honed by years of experience in the Philippine movie industry,{" "}
    <span className="text-white font-semibold">
      Digi-8 Studios
    </span>{" "}
    has the staff and
  </span>{" "}
  expertise needed to generate fresh and dynamic audio-visual projects for television, utilizing skill and discipline for regular production, and a well-developed instinct for content that draws viewers in.
</motion.p>


        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            className="text-gray-300 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-4">
              <p className="text-gray-300 font-sans text-base">
                <span className="ml-8">
                <span className="text-white font-semibold">
                    Mrs. Lucy Quinto de Guzman {" "}
                  </span>
                  The Founder of Digi-8 Studios can be counted as a pioneer in motion picture{" "}
                </span>                
                dubbing in the Philippines. She was the founding President of the Film Dubbers Association of the Philippines (FILMDAP), and has to her name about 80 percent of dubbing projects in the Philippine motion picture industry for major film studios such as Regal Films, Star Cinema, Viva, and other production outfits including independent film studios.
              </p>
            
              <p className="text-gray-300 font-sans text-base">
                She has consistently been the most sought-after dubbing supervisor among the countrys top-tier, award-winning actors, earning a stellar reputation for her expertise and dedication. With her skillful direction, she has contributed to countless successful projects, elevating the standards of voice work in the industry.
              
                GMA Network Inc. is proud to be one of their long-standing and satisfied clients, further highlighting the lasting impact of her work and the trust she has built with leading networks.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              src="/assets/graphics/Digi8-WebMat1.jpg"
              alt="Digi-8 Studios Office"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}