'use client'

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"


export default function Testimonials() {
    const testimonials = [
        {
          id: 1,
          name: "Sarah Johnson",
          role: "CEO, TechCorp",
          content:
            "This SaaS solution has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours.",
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
          content:
            "This platform has been a game-changer for our startup. It's helped us streamline operations and focus on what truly matters.",
          rating: 5,
        },
      ]

      const TestimonialCard = ({ name, role, content, rating }: { 
        name: string
        role: string
        content: string
        rating: number
    }) => (
        <motion.div
            className="relative p-8 rounded-2xl backdrop-blur-lg border border-white/10 bg-gradient-to-b from-white/5 to-white/0 shadow-2xl hover:shadow-3xl transition-all"
            whileHover={{ y: -10, rotateZ: -0.5 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
        >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F4B301]/30 to-[#CACACA]/30 -z-10 blur-[1px]" />
            
            <Quote className="w-10 h-10 mb-6 text-transparent bg-gradient-to-r from-[#F4B301] to-[#CACACA] bg-clip-text" />
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">{content}</p>
            
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#F4B301] to-[#CACACA] bg-clip-text text-transparent">
                        {name}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{role}</p>
                </div>
                <div className="flex space-x-1">
                    {[...Array(rating)].map((_, i) => (
                        <Star 
                            key={i} 
                            className="w-6 h-6 text-transparent bg-gradient-to-r from-[#F4B301] to-[#CACACA] bg-clip-text"
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1
            className="text-center font-bold font-archivo-black text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-12"
            initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Testimonials
            </motion.h1>

            <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </section>
    )
}