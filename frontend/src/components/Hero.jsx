import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-pink-500 '>
        {/* left side of hero  */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-pink-700'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-pink-200'></p>
                <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>

            </div>
            <h1 className='caveat-normal text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Our Latest Arrivals</h1>
            <div className='flex items-center gap-2'>
                <p className='font-semibold text-sm md:text-base text-pink-700'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[2px] bg-pink-200'></p>

            </div>
 
        </div>

        </div>

        {/* Right side of hero section  */}
        <img className='w-full sm:w-1/2 h-[500px]' src={assets.c10} alt="" />


    </div>
  )
}

export default Hero