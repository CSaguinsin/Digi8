"use client"

import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const images = [
    { src: "/assets/graphics/Digi8-WebMat1.jpg", alt: "Image 1" },
    { src: "/assets/graphics/Digi8-WebMat2.jpg", alt: "Image 2" },
    { src: "/assets/graphics/Digi8-WebMat3.jpg", alt: "Image 3" },
    { src: "/assets/graphics/Digi8-WebMat4.jpg", alt: "Image 4" }
]

export function StudioCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!api) return

    let interval: NodeJS.Timeout
    if (!isHovered) {
      interval = setInterval(() => {
        api.scrollNext()
      }, 2000)
    }

    return () => clearInterval(interval)
  }, [api, isHovered])

  return (
    <div className="w-full max-w-5xl mx-auto px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "center",
        }}
        className="relative w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 100 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <Card className="relative overflow-hidden rounded-lg border-0">
                  <div className="absolute inset-0 p-[2px] rounded-lg bg-gradient-to-r from-[#F4B301]/80 to-[#CACACA]/80">
                    <div className="absolute inset-0 bg-gray-900 rounded-lg" />
                  </div>

                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[16/9] object-cover rounded-lg relative z-10"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  />
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious 
          className="absolute -left-12 h-12 w-12 border-2 border-[#F4B301]/20 bg-gray-900/90 hover:bg-gray-900 hover:border-[#F4B301]/40 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-[#F4B301]" />
        </CarouselPrevious>
        <CarouselNext 
          className="absolute -right-12 h-12 w-12 border-2 border-[#F4B301]/20 bg-gray-900/90 hover:bg-gray-900 hover:border-[#F4B301]/40 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-[#F4B301]" />
        </CarouselNext>
      </Carousel>
    </div>
  )
}