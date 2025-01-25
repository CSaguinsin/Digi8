"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurEdge() {
  return (
    <>
      <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-center font-bold font-archivo-black text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Edge
        </motion.h1>

        <div className="max-w-7xl mx-auto">
          <motion.p
            className="text-gray-300 text-lg mb-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Honed by years of experience in the Philippine movie industry,{" "}
            <span className="text-white font-semibold">Digi-8 Studios</span> has the staff and expertise needed to
            generate fresh and dynamic audio-visual projects for television, utilizing skill and discipline for regular
            production, and a welldeveloped instinct for content that draws viewers in.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              className="text-gray-300 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div>
                <h2 className="text-white text-xl font-semibold mb-4">Mrs. Lucy Quinto de Guzman</h2>
                <p className="text-gray-300">
                  The Founder of Digi-8 Studios can be counted as a pioneer in motion picture dubbing in the
                  Philippines. She was the founding President of the Film Dubbers Association of the Philippines
                  (FILMDAP), and has to her name about 80 percent of dubbing projects in the Philippine motion picture
                  industry for major film studios such as Regal Films, Star Cinema, Viva, and other production outfits
                  including independent film studios.
                </p>
              </div>
              <p className="text-gray-300">
                She has consistently been the most sought-after dubbing supervisor among the country's top caliber and
                award-winning actors
              </p>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Image
                src="/assets/graphics/Digi8-WebMat1.jpg"
                alt="Digi-8 Studios Office"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

