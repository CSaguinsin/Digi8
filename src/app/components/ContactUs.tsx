"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Smartphone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactUs() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-center font-bold font-archivo-black text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-[#F4B301DB]/100 to-[#CACACA]/100 bg-clip-text text-transparent mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start space-x-3">
            <MapPin className="w-6 h-6 text-[#F4B301DB] flex-shrink-0 mt-1" />
            <p className="text-white text-lg">
              #8 Kamagong Street, Violago Homes 3, Visayas Avenue, Quezon City, Manila, Philippines.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="w-6 h-6 text-[#F4B301DB]" />
            <div>
              <span className="text-[#F4B301DB] text-lg font-medium">Telephone</span>
              <span className="text-white text-lg ml-2">: +632 83563948</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Smartphone className="w-6 h-6 text-[#F4B301DB]" />
            <div>
              <span className="text-[#F4B301DB] text-lg font-medium">Cell phone</span>
              <span className="text-white text-lg ml-2">: +63917 1446462</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="w-6 h-6 text-[#F4B301DB]" />
            <div>
              <span className="text-[#F4B301DB] text-lg font-medium">Email</span>
              <span className="text-white text-lg ml-2">: digi8studios@yahoo.com</span>
            </div>
          </div>

          <Button className="mt-8 bg-gray-200 text-gray-800 hover:bg-gray-300 px-8 py-2 rounded-md text-lg">
            Contact Us
          </Button>
        </div>

        <div className="w-full h-[400px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.401914450549!2d121.03674631531906!3d14.657089589775277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b70e6d4a4e3f%3A0x6d5c6d8c0c0c0c0c!2sViolago%20Homes%20Phase%20III!5e0!3m2!1sen!2sph!4v1625147614439!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

