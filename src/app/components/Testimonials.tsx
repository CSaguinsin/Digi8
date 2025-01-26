'use client'

import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react'

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    breakpoints: {
      '(max-width: 767px)': { containScroll: 'trimSnaps' }
    }
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

  // Navigation handlers
  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
    setAutoPlay(false)
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
    setAutoPlay(false)
  }, [emblaApi])

  // Update selected index
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
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "This SaaS solution has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, InnovateTech",
      content: "I'm impressed by the scalability and performance. It's rare to find a product that excels in both areas.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager, StartupX",
      content: "The customer support is outstanding. Any issues we've had were resolved quickly and efficiently.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder, GrowthLab",
      content: "This platform has been a game-changer for our startup. It's helped us streamline operations and focus on what truly matters.",
      rating: 5,
    },
  ]

  const TestimonialCard = ({ name, role, content, rating }: { 
    name: string
    role: string
    content: string
    rating: number
  }) => {
    const initials = name.split(' ').map(n => n[0]).join('')
    
    return (
      <div className="relative p-6 md:p-8 rounded-2xl backdrop-blur-lg border border-white/10 bg-gradient-to-b from-white/5 to-white/0 shadow-2xl hover:shadow-3xl transition-all flex-1 min-w-0">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F4B301]/30 to-[#CACACA]/30 -z-10 blur-[1px]" />
        
        <div className="mb-4 md:mb-6 flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-[#F4B301] to-[#CACACA] flex items-center justify-center">
            <span className="font-bold text-gray-900 text-sm md:text-base">{initials}</span>
          </div>
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-transparent bg-gradient-to-r from-[#F4B301] to-[#CACACA] bg-clip-text" />
        </div>
        
        <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 leading-relaxed">{content}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#F4B301] to-[#CACACA] bg-clip-text text-transparent">
              {name}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 mt-1">{role}</p>
          </div>
          <div className="flex space-x-1">
            {[...Array(rating)].map((_, i) => (
              <Star 
                key={i} 
                className="w-5 h-5 md:w-6 md:h-6 text-transparent bg-gradient-to-r from-[#F4B301] to-[#CACACA] bg-clip-text"
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center font-bold font-archivo-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-8 md:mb-12">
        Testimonials
      </h1>

      <div className="max-w-7xl mx-auto relative"
           onMouseEnter={() => setAutoPlay(false)}
           onMouseLeave={() => setAutoPlay(true)}
           onTouchStart={() => setAutoPlay(false)}>
        
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-10 px-1 md:px-2">
          <button 
            onClick={scrollPrev}
            className="p-1 md:p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-[#F4B301]" />
          </button>
          <button 
            onClick={scrollNext}
            className="p-1 md:p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#F4B301]" />
          </button>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.reduce<React.ReactElement[]>((acc, _, i, arr) => {
              if (i % 2 === 0) {
                const pair = arr.slice(i, i + 2)
                return [
                  ...acc,
                  <div key={i} className="embla__slide flex flex-col md:flex-row gap-4 md:gap-8 min-w-full px-2 md:px-4">
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

        {/* Progress Indicator */}
        <div className="mt-8 md:mt-12 relative h-1 bg-gray-700 rounded-full max-w-7xl mx-auto">
          <motion.div
            className="absolute h-full bg-gradient-to-r from-[#F4B301] to-[#CACACA] rounded-full"
            animate={{ 
              width: `${100 / (testimonials.length / 2)}%`,
              left: `${(100 / (testimonials.length / 2)) * selectedIndex}%`
            }}
            transition={{ type: 'spring', stiffness: 100 }}
          />
        </div>
      </div>
    </section>
  )
}