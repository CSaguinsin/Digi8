"use client"

import { motion, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

interface CarouselItemProps {
  src: string
  label?: string
}

const CarouselItem = ({ src, label }: CarouselItemProps) => (
  <div className="relative overflow-hidden rounded-xl border border-yellow-500 shadow-lg w-full">
    <div className="relative w-full aspect-[3/4]">
      <Image
        src={src}
        fill
        alt={label || "Service Image"}
        className="object-cover rounded-xl transition-transform duration-300 hover:scale-105"
      />
      {/* Yellow Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-yellow-500/40 to-transparent rounded-b-xl" />
    </div>

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />

    {/* Label */}
    {label && (
      <div className="absolute inset-0 flex justify-center text-white font-bold text-center z-10 px-4 pt-[2rem]">
        <span className="text-xl sm:text-[45px] pt-[20rem] font-sans leading-tight max-w-[90%]">
          {label}
        </span>
      </div>
    )}
  </div>
)

// Carousel Images
const carouselItems = [
  { src: "/assets/carousel/img1.jpg", label: "Dubbing" },
  { src: "/assets/carousel/img2.jpg", label: "Translation" },
  { src: "/assets/carousel/img3.jpg", label: "Captioning" },
  { src: "/assets/carousel/img4.jpg", label: "Recording" },
  { src: "/assets/carousel/img5.jpg", label: "Audio Visual" },
  { src: "/assets/carousel/img6.jpg", label: "Script Writing" },
]

export default function OurOffers() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isMobile = windowWidth <= 768
  const itemsPerSlide = isMobile ? 1 : 3
  const numSlides = Math.ceil(carouselItems.length / itemsPerSlide)

  useEffect(() => {
    if (currentIndex >= numSlides) setCurrentIndex(0)
  }, [numSlides, currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) => (prev === numSlides - 1 ? 0 : prev + 1))
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
    <section id="service" className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-center font-bold font-archivo-black text-3xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Offers
      </motion.h1>

      <p className="text-gray-300 font-sans text-center px-4 md:px-[5rem] mb-10 italic">
        Digi-8 Studios has the staff and expertise needed to generate fresh and dynamic audio-visual <br className="hidden md:block" /> 
        projects for television, and a well-developed instinct for content that draws viewers in.
      </p>

      <div
        className="relative overflow-hidden w-full flex flex-col items-center gap-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex flex-nowrap w-full"
            animate={controls}
          >
            {Array.from({ length: numSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex flex-shrink-0 gap-4">
                {carouselItems.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((item, index) => (
                  <div key={index} className="w-1/3 px-2 md:px-4">
                    <CarouselItem {...item} />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-2">
          {Array.from({ length: numSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-yellow-500" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
