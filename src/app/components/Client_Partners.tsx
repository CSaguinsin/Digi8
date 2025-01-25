'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const clients = [
  '/assets/clients/gma.webp',
  '/assets/clients/meralco.png',
  '/assets/clients/viva.png',
  '/assets/clients/siemens.png',
  '/assets/clients/Jesus.png',
  '/assets/clients/solarfilms.png',
  '/assets/clients/maverick.png',
  '/assets/clients/viden.png',
]

export default function Client_Partners() {
    return(
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
            <motion.h1
                className="text-center font-bold font-archivo-black text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Clients & Partners
            </motion.h1>

            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative aspect-square w-full h-[10rem] flex items-center justify-center"
                        >
                            <Image
                                src={client}
                                alt={`Client ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 p-4"
                                quality={100}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}