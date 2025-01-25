"use client"

import { motion, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"
import { CarouselItem } from "./CarouselItem"

const carouselItems = [
  {
    src: "/assets/carousel/dubbingImage.png",
    alt: "Dubbing service",
  },
  {
    src: "/assets/carousel/translationImage.png",
    alt: "Translation service",
  },
  {
    src: "/assets/carousel/captioningImage.png",
    alt: "Captioning service",
  },
]

export default function OurOffers() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1))
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused])

  useEffect(() => {
    controls.start({
      x: `${-currentIndex * 100}%`,
      transition: { duration: 0.5, ease: "easeInOut" },
    })
  }, [currentIndex, controls])

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-center font-bold font-archivo-black text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Offers
      </motion.h1>
      <p className="text-white font-thin text-center px-[5rem] mb-10">
        Digi-8 Studios has the staff and expertise needed to generate fresh and dynamic audio-visual <br /> projects for
        television, and a well-developed instinct for content that draws viewers in.
      </p>
      {/* Carousel component section */}
      <div
        className="relative overflow-hidden w-full flex flex-col items-center gap-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative overflow-hidden w-full flex justify-center">
          <motion.div className="flex" animate={controls}>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} {...item} />
            ))}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-[#F4B301]" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* End of the Carousel component section */}
    </section>
  )
}

