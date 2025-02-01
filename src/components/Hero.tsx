import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Hero Image with equal left-right margin and responsive sizing */}
      <div className="w-full max-w-[1200px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative">
  <Image
    src={"/Image (1).png"}
    width={1200}
    height={500}
    alt="jota"
    className="w-full h-full object-cover rounded-md"
  />
</div>



      {/* Text Section */}
      <div className="flex flex-col justify-center items-center mt-10 px-4">
        <h1 className="font-medium text-[15px] sm:text-[18px] leading-6 text-center">First Look</h1>
        
        <h1 className="font-medium text-[32px] sm:text-[40px] md:text-[56px] leading-[40px] sm:leading-[50px] md:leading-[60px] text-center mt-2">
          Nike Air Max Pulse
        </h1>
        
        <p className="font-normal text-[14px] sm:text-[15px] leading-6 mt-5 text-center">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          <br className="hidden sm:block" />
          —designed to push you past your limits and help you go to the max.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-5 mb-10"> {/* Added bottom margin */}
          <button className="bg-black text-white rounded-full py-2 px-4 w-full sm:w-auto">
            Notify Me
          </button>
          <button className="bg-black text-white rounded-full py-2 px-4 w-full sm:w-auto">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
