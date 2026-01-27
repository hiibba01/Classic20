import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm'>
            <div>
                <img src={assets.c209} className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-pink-500 text-xs'>Classic20 brings you quality products crafted for style, comfort, <br/> and everyday use.
We focus on secure payments, fast delivery,<br/> and a seamless shopping experience.
Every order is handled <br/>with care to ensure complete customer satisfaction.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 text-pink-700'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-pink-500 text-xs'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5 text-pink-700'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-pink-500 text-xs'>
                    <li>+1-675-987-8903</li>
                    <li>contact@classic20.com</li>

                </ul>
            </div>
            
        </div>
        <div>
            <hr className='text-pink-500'/>
            <p className='py-5 text-sm text-center text-pink-500'>&copy; 2026 Classic20 -All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer