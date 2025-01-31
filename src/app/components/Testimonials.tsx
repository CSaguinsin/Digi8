'use client'

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start'
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  // Auto-rotation effect
  useEffect(() => {
    if (!emblaApi || !autoPlay) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [emblaApi, autoPlay])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const testimonials = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Independent Artist",
      content: "The team at Digi8 transformed my vision into reality! The sound quality is impeccable, and the entire process was seamless. From recording to mixing, their attention to detail and creativity brought my music to life. I cant wait to work with them again!",
      rating: 5,
      image: "/alex-rivera.jpg" 
    },
    {
      id: 2,
      name: "Alex Rivera",
      role: "Independent Artist",
      content: "Ive never experienced such a professional and welcoming studio environment. The engineers at [Studio Name] are experts in their craft, offering valuable insights that took my podcast to the next level. Highly recommend them for anyone looking to create top-notch content!",
      rating: 5,
      image: "/alex-rivera.jpg" 
    },
    {
      id: 3,
      name: "Alex Rivera",
      role: "Independent Artist",
      content: "The team at Digi8 transformed my vision into reality! The sound quality is impeccable, and the entire process was seamless. From recording to mixing, their attention to detail and creativity brought my music to life. I cant wait to work with them again!",
      rating: 5,
      image: "/alex-rivera.jpg" 
    },
    {
      id: 4,
      name: "Alex Rivera",
      role: "Independent Artist",
      content: "The team at Digi8 transformed my vision into reality! The sound quality is impeccable, and the entire process was seamless. From recording to mixing, their attention to detail and creativity brought my music to life. I cant wait to work with them again!",
      rating: 5,
      image: "/alex-rivera.jpg" 
    },
  ]

  const TestimonialCard = ({ name, role, content, rating, image }: {
    name: string
    role: string
    content: string
    rating: number
    image: string
  }) => {
    return (
      <div className="relative p-8 rounded-3xl bg-gray-700/80 backdrop-blur-lg shadow-xl flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400">
              <Image
                src={image}
                alt={name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-gray-300 text-sm">{role}</p>
            <div className="flex gap-1 mt-1">
              {[...Array(rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>
        
        <blockquote className="text-gray-200 italic leading-relaxed">
          &ldquo;{content}&rdquo;
        </blockquote>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 py-20 px-4">
      <h1 className="text-left px-20 font-bold font-archivo-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-8 md:mb-12">
        Testimonials
      </h1>

      <div className="max-w-7xl mx-auto relative"
           onMouseEnter={() => setAutoPlay(false)}
           onMouseLeave={() => setAutoPlay(true)}
           onTouchStart={() => setAutoPlay(false)}>
        
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.reduce<React.ReactElement[]>((acc, _, i, arr) => {
              if (i % 2 === 0) {
                const pair = arr.slice(i, i + 2)
                return [
                  ...acc,
                  <div key={i} className="embla__slide flex flex-col md:flex-row gap-6 min-w-full px-4">
                    {pair.map((testimonial) => (
                      <TestimonialCard key={testimonial.id} {...testimonial} />
                    ))}
                  </div>
                ]
              }
              return acc
            }, [])}
          </div>
        </div>

        <div className="mt-8 relative h-1 bg-gray-700 rounded-full">
          <motion.div
            className="absolute h-full bg-yellow-400 rounded-full"
            animate={{ 
              width: `${100 / (testimonials.length / 2)}%`,
              left: `${(100 / (testimonials.length / 2)) * selectedIndex}%`
            }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </div>
      </div>
    </section>
  )
}