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
    With years of experience in the Philippine film industry, {" "}
    <span className="text-white font-semibold">
      Digi-8 Studios
    </span>{" "}
    boasts a talented team
  </span>{" "}
  equipped to produce innovative and engaging audio-visual content for television. Their
  approach combines skillful execution and disciplined production with a finely tuned intuition for
  creating captivating content that attracts viewers.</motion.p>


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
                  the Founder and General Manager of Digi8 Studios,{" "}
                </span>                
                is recognized
                as one of the pioneers of motion picture dubbing in the Philippines. As the founding President of
                the Film Dubbers Association of the Philippines (FILMDAP), she has been instrumental in
                approximately 80 percent of the dubbing projects within the Philippine film landscape,
                collaborating with major studios like Regal Films, Star Cinema, Viva, and many independent
                production companies.               </p>
            
              <p className="text-gray-300 font-sans text-base">
              Renowned for her expertise, she has remained the most in-demand
              dubbing supervisor for the country's elite and award-winning actors.Digi8 Studios takes pride in being one of the foremost providers of
              comprehensive audio-video post-production services in the Philippines, including script
              translation, dubbing, and closed captioning.               
                
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