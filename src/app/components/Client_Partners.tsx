'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const clients = [
  {
    image: '/assets/clients/Jesus.png',
    name: 'THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS'
  },
  {
    image: '/assets/clients/meralco.png',
    name: 'MERALCO'
  },
  {
    image: '/assets/clients/viva.png',
    name: 'VIVA FILMS'
  },
  {
    image: '/assets/clients/siemens.png',
    name: 'SIEMENS'
  },
  {
    image: '/assets/clients/solarfilms.png',
    name: 'SOLAR FILMS'
  },
  {
    image: '/assets/clients/maverick.png',
    name: 'MAVERICK MEDIA'
  },
  {
    image: '/assets/clients/viden.png',
    name: 'JUITA VIDEN'
  }
]

const additionalClients = [
  "Sowers of the Word Ministry",
  "Asia Pacific Radio Ministry",
  "God's Little Creations",
  "Kaizz Ventures",
  "Lucida DS",
  "GMA Network Inc."
]

export default function Client_Partners() {
    return(
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
            <motion.h1
                className="text-center font-bold font-archivo-black text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-16"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Clients & Partners
            </motion.h1>

            <div className="container mx-auto max-w-7xl">
                {/* First row of logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-16">
                    {clients.slice(0, 4).map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex flex-col items-center"
                        >
                            <div className="relative aspect-square w-full h-[12rem] md:h-[14rem] lg:h-[16rem] flex items-center justify-center">
                                <Image
                                    src={client.image}
                                    alt={client.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300 p-4"
                                    quality={100}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Second row of logos */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-16">
                    {clients.slice(4).map((client, index) => (
                        <motion.div
                            key={index + 4}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (index + 4) * 0.1 }}
                            className="relative flex flex-col items-center"
                        >
                            <div className="relative aspect-square w-full h-[12rem] md:h-[14rem] lg:h-[16rem] flex items-center justify-center">
                                <Image
                                    src={client.image}
                                    alt={client.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300 p-4"
                                    quality={100}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                {/* Text clients in groups of three */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-8 text-center">
                    {[0, 1, 2].map((row) => (
                        <div key={row} className="space-y-4">
                            {additionalClients.slice(row * 2, row * 2 + 2).map((client, index) => (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: (row * 2 + index) * 0.1 }}
                                    className="text-white font-sans text-lg"
                                >
                                    {client}
                                </motion.p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}