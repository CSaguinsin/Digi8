"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function OurStory() {
  const images = [
    { src: "/assets/graphics/Digi8-WebMat1.jpg", alt: "Image 1" },
    { src: "/assets/graphics/Digi8-WebMat2.jpg", alt: "Image 2" },
    { src: "/assets/graphics/Digi8-WebMat3.jpg", alt: "Image 3" },
    { src: "/assets/graphics/Digi8-WebMat4.jpg", alt: "Image 4" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-center font-bold font-archivo-black text-3xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Story
      </motion.h1>
      <div className="max-w-7xl mx-auto">
        <Card className="border-transparent">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-6">
              {/* Stacked Carousel Container */}
              <div className="lg:w-1/2">
                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full mb-6 sm:mb-8">
                  <AnimatePresence initial={false}>
                    {images.map(
                      (image, index) =>
                        currentImage === index && (
                          <motion.div
                            key={index}
                            className="absolute inset-0 h-full w-full"
                            initial={{ scale: 0.9, y: 30, opacity: 0 }}
                            animate={{
                              scale: 1,
                              y: 0,
                              opacity: 1,
                              zIndex: 40,
                            }}
                            exit={{
                              scale: 0.9,
                              y: -30,
                              opacity: 0,
                              zIndex: 10,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <div className="relative h-full w-full">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-3xl shadow-lg sm:shadow-2xl border border-gray-700 sm:border-2"
                                priority={index === 0}
                              />
                            </div>
                          </motion.div>
                        )
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:w-1/2 flex flex-col justify-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <p className="text-gray-300 font-sans text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 leading-relaxed sm:leading-loose text-justify">
      <strong className="font-semibold text-white">Digi-8 Studios</strong> has 
      a unique pool of talents — the very best and seasoned voice actors/dubbers 
      in the country as well as{' '}
      <strong className="font-semibold text-white">scriptwriters, translators, 
      captionists, and sound engineers</strong>. Our voice actors and dubbers 
      can work effectively not only in Filipino and English, but also in different 
      Filipino languages such as Ilocano and Cebuano.
    </p>

    <p className="text-gray-300 font-sans text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-loose text-justify">
      Armed with these resources, as well as up-to-date hardware and software, 
      we are committed to providing the best production services to our clients.
    </p>
  </motion.div>
</div>

            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
