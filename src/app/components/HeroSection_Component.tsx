import Image from "next/image";


export default function HeroComponent() {
  return(
    <div className="flex flex-col justify-center items-center relative z-20 pt-[7rem]"> {/* Added z-index */}
<button
  type="button"
  className="rounded-xl border-2 font-archivo-black text-4xl border-white focus:outline-none text-[2rem] text-white py-5 leading-none px-5 inline-flex items-center justify-center whitespace-nowrap bg-red-700 hover:bg-red-800 transition-all"
>
  ON AIR
</button>

      {/* Image container with constrained size */}
      <div className="w-full max-w-[800px]"> {/* Better size control */}
        <Image 
          src="/assets/digi_1.png"
          alt="Digi8 Logo" 
          width={960}
          height={960}
          priority 
          className="w-full h-auto object-contain" // Responsive image
        />
      </div>
      
      {/* Text content with proper spacing */}
      <div className="flex flex-col items-center gap-6"> {/* Nested container */}
        <h1 className="text-white text-center px-4 text-2xl leading-tight"> {/* Improved typography */}
          One of the leading companies in the Philippines<br />
          Offering complete audio-visual post-production services
        </h1>
      </div>
    </div> 
  )
}