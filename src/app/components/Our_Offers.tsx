"use client"

import { motion, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"

interface CarouselItemProps {
  src: string
  className?: string
  imgClassName?: string
}

const CarouselItem = ({ src, className = "", imgClassName = "" }: CarouselItemProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        className={`${imgClassName} filter transition-transform duration-300 hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-6 left-4 right-4 text-white">
      </div>
    </div>
  )
}

const carouselItems = [
  { src: "/assets/carousel/dubbingImage.png" },
  { src: "/assets/carousel/translationImage.png" },
  { src: "/assets/carousel/captioningImage.png" },
  { src: "/assets/carousel/recording.png" },
  { src: "/assets/carousel/scriptWriting.png" },
  { src: "/assets/carousel/audioVisual.png" },
]

export default function OurOffers() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth <= 768
  const itemsPerSlide = isMobile ? 1 : 3
  const numSlides = Math.ceil(carouselItems.length / itemsPerSlide)

  useEffect(() => {
    if (currentIndex >= numSlides) setCurrentIndex(numSlides - 1)
  }, [numSlides, currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex(prev => prev === numSlides - 1 ? 0 : prev + 1)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused, numSlides])

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
      
      <p className="text-white font-sans text-center px-4 md:px-[5rem] mb-10">
        Digi-8 Studios has the staff and expertise needed to generate fresh and dynamic audio-visual <br className="hidden md:block" /> 
        projects for television, and a well-developed instinct for content that draws viewers in.
      </p>

      <div
        className="relative overflow-hidden w-full flex flex-col items-center gap-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative overflow-hidden w-full">
          <motion.div className="flex" animate={controls}>
            {carouselItems.map((item, index) => (
              <div 
                key={index} 
                className="w-full md:w-1/3 flex-shrink-0 h-[400px] md:h-[630px] px-4"
              >
                <CarouselItem 
                  {...item}
                  className="brightness-110 contrast-110"
                  imgClassName="h-full w-full object-cover rounded-lg"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex gap-2">
          {Array.from({ length: numSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-[#F4B301]" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}