"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const images = [
    { src: "/assets/graphics/Digi8-WebMat1.jpg", alt: "Image 1" },
    { src: "/assets/graphics/Digi8-WebMat2.jpg", alt: "Image 2" },
    { src: "/assets/graphics/Digi8-WebMat3.jpg", alt: "Image 3" },
    { src: "/assets/graphics/Digi8-WebMat4.jpg", alt: "Image 4" }
]

export function StudioCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })

    let interval: NodeJS.Timeout
    if (!isHovered) {
      interval = setInterval(() => {
        api.scrollNext()
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [api, isHovered])

  return (
    <div className="w-full max-w-7xl mx-auto px-4" // Increased max-width
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "center",
        }}
        className="relative w-full overflow-visible"
      >
        <CarouselContent className="h-[400px] sm:h-[500px] lg:h-[600px]"> {/* Increased heights */}
          <AnimatePresence initial={false}>
            {images.map((image, index) => (
              <CarouselItem 
                key={index} 
                className="basis-full" // Full width items
              >
                <motion.div
                  className="relative h-full w-full"
                  initial={{ 
                    x: index > current ? "100%" : "-100%",
                    opacity: 0,
                    scale: 0.9
                  }}
                  animate={{
                    x: "0%",
                    opacity: 1,
                    scale: 1,
                    zIndex: 40
                  }}
                  exit={{
                    x: index > current ? "-100%" : "100%",
                    opacity: 0,
                    scale: 0.9
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 150,
                    damping: 20,
                    mass: 0.5
                  }}
                >
                  <div className="relative h-full w-full rounded-lg shadow-2xl border-2 border-gray-700 overflow-hidden">
                    <div className="absolute inset-0 p-[2px] rounded-lg bg-gradient-to-r from-[#F4B301]/80 to-[#CACACA]/80">
                      <div className="absolute inset-0 bg-gray-900 rounded-lg" />
                    </div>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover relative z-10 rounded-lg"
                      priority={index === 0}
                    />
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </AnimatePresence>
        </CarouselContent>
      </Carousel>
    </div>
  )
}