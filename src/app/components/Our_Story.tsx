"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function OurStory() {
  const images = [
    { src: "/assets/graphics/Digi8-WebMat1.jpg", alt: "Image 1" },
    { src: "/assets/graphics/Digi8-WebMat2.jpg", alt: "Image 2" },
    { src: "/assets/graphics/Digi8-WebMat3.jpg", alt: "Image 3" },
    { src: "/assets/graphics/Digi8-WebMat4.jpg", alt: "Image 4" },
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const handleImageChange = (direction: "next" | "prev") => {
    if (direction === "next") {
      setCurrentImage((prev) => (prev + 1) % images.length)
    } else {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1
    className="text-center font-bold font-archivo-black text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-12"
    initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Story
      </motion.h1>
      <div className="max-w-7xl mx-auto">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full mb-8">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImage ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleImageChange("prev")}
                  className="bg-black/50 hover:bg-black/70 text-white"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleImageChange("next")}
                  className="bg-black/50 hover:bg-black/70 text-white"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <div className="flex justify-center space-x-2 mb-8">
              {images.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`w-3 h-3 rounded-full p-0 ${index === currentImage ? "bg-yellow-400" : "bg-gray-600"}`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
            <motion.p
              className="text-gray-300 text-lg sm:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Digi-8 Studios boasts a unique pool of talents — the very best and seasoned voice actors and dubbers in
              the country, alongside skilled scriptwriters, translators, captionists, and sound engineers. Our voice
              actors and dubbers excel not only in Filipino and English but also in various Filipino languages such as
              Ilocano and Cebuano. Equipped with these exceptional resources and cutting-edge hardware and software, we
              are dedicated to delivering unparalleled production services to our clients.
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

