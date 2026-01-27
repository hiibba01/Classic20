import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-pink-700 text-sm sm:text-md md:text-base'>

        <div>
            <img src ={assets.exchange} className='w-17 h-10 m-auto mb-5' />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-pink-600 caveat-normal'> Exchange it easily and get what feels just right for you.</p>
        </div>

        <div>
            <img src ={assets.re} className='w-17 h-10 m-auto mb-5' />
            <p className='font-semibold'>10 Days Return Policy</p>
            <p className='text-pink-600 caveat-normal'> If something isn't right, return it within 10 days of delivery for a smooth and easy return process.</p>
        </div>

        <div>
            <img src ={assets.f} className='w-15 h-13 m-auto mb-5' />
            <p className='font-semibold'>24/7 Customer Support</p>
            <p className='text-pink-600 caveat-normal'> Our support team is always ready to assist you with quick and reliable solutions 24/7 .</p>
        </div>

    </div>
  )
}

export default OurPolicy