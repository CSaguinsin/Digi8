import Image from "next/image";

export default function HeroComponent() {
  return(
    <div className="flex flex-col justify-center items-center relative z-20 pt-6 lg:pt-0 md:pt-[7rem] px-4 pb-10">
      {/* ON AIR Button */}
      <button
        type="button"
        className="rounded-xl border-2 font-archivo-black border-white 
                 focus:outline-none text-white py-2 px-4 md:py-5 md:px-5 
                 inline-flex items-center justify-center whitespace-nowrap 
                 bg-red-700 hover:bg-red-800 transition-all duration-300
                 text-3xl md:text-4xl leading-none min-w-[180px] md:min-w-none
                 mb-4 md:mb-0"
      >
        ON AIR
      </button>

      {/* Image container */}
      <div className="w-full max-w-[800px] mt-6 md:mt-12 px-2 sm:px-4">
        <Image 
          src="/assets/digi_1.png"
          alt="Digi8 Logo" 
          width={960}
          height={960}
          priority 
          className="w-full h-auto object-contain"
        />
      </div>
      
      {/* Text content */}
      <div className="flex flex-col items-center gap-4 md:gap-6 mt-4 md:mt-8">
        <h1 className="text-white text-center font-sans text-base md:text-2xl leading-normal md:leading-tight max-w-[90%]">
          One of the leading companies in the Philippines<br className="hidden md:block" />
          Offering complete audio-visual post-production services
        </h1>
      </div>

      {/* Buttons Container */}
      <div className="flex flex-row flex-wrap justify-center gap-3 md:gap-6 w-full px-4 mt-6 md:mt-8">
      <button
        className="rounded-full font-sans py-2 px-4 md:py-4 md:px-8 border-2 border-transparent 
                  text-sm md:text-base font-semibold text-white 
                  transition-all duration-300 shadow-lg hover:shadow-xl 
                  bg-gradient-to-r from-[#F4B301] to-[#7373739E]
                  hover:from-[#F4B301CC] hover:to-[#737373CC]
                  active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50
                  min-w-[140px] md:min-w-[160px] flex items-center justify-center gap-2"
        type="button"
      >
        View Our Work
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-4 h-4 md:w-5 md:h-5 ml-2" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </button>

        <button
          className="rounded-full font-sans py-2 px-4 md:py-4 md:px-8 border-2 border-white 
                    text-sm md:text-base font-semibold text-white 
                    transition-all duration-300 hover:bg-white/10 
                    active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50
                    min-w-[140px] md:min-w-[160px]"
          type="button"
        >
          Contact Us
        </button>
      </div>
    </div> 
  )
}