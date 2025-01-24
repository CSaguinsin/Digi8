'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function OurStory() {
  const images = [
    { src: '/assets/graphics/Digi8-WebMat1.jpg', alt: 'Image 1' },
    { src: '/assets/graphics/Digi8-WebMat2.jpg', alt: 'Image 2' },
    { src: '/assets/graphics/Digi8-WebMat3.jpg', alt: 'Image 3' },
    { src: '/assets/graphics/Digi8-WebMat4.jpg', alt: 'Image 4' },
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  const handleImageClick = (index: number) => {
    setCurrentImage(index)
  }

  return (
    <section className="bg-[#1e2328] pt-20">
      <h1 className="text-center font-archivo-black text-[4rem] bg-gradient-to-r from-[#F4B301] to-[#999999] bg-clip-text text-transparent px-40">
        Our Story
      </h1>
      <div className="flex flex-col items-center mt-20">
        {/* Main image with transition */}
        <div className="relative h-[500px] w-full max-w-4xl overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImage 
                  ? 'opacity-100 z-10' 
                  : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Thumbnail images */}
        <div className="flex justify-center space-x-4 mt-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative h-24 w-24 cursor-pointer rounded-lg overflow-hidden ${
                index === currentImage ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        {/* Text content */}
        <div className="mt-8 max-w-4xl">
          <p className="text-white text-[1.5rem]">
            Digi-8 Studios has a unique pool of talents — the very best and
            seasoned voice actors/dubbers in the country as well as
            scriptwriters, translators, captionists, and sound engineers. Our
            voice actors and dubbers can work effectively not only in Filipino
            and English, but also in different Filipino languages such as
            Ilocano and Cebuano. Armed with these resources, as well as up-to-
            date hardware and software, we are committed to providing the best
            production services to our clients.
          </p>
        </div>
      </div>
    </section>
  )
}