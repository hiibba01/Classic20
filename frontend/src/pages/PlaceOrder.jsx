import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'

const PlaceOrder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-pink-700'>
         {/* left side  */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
 
        <div className='text-xl sm:text-2xl my-3 text-pink-700'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>

        </div>

        <div className='flex gap-3'>
          <input type="text" placeholder='First Name' className='border-2 border-pink-300 rounded py-1.5 px-3.5 text-pink-700 w-full bg-pink-100'/>
          <input type="text" placeholder='Last Name' className='border-2 border-pink-300 rounded py-1.5 text-pink-700 px-3.5 w-full bg-pink-100'/>
        </div>

        <input type="email" placeholder='Email Address' className='border-2 border-pink-300 rounded py-1.5 text-pink-700 px-3.5 w-full bg-pink-100'/>
        <input type="text" placeholder='Street' className='border-2 border-pink-300 rounded py-1.5 text-pink-700 px-3.5 w-full bg-pink-100'/>

        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border-2 border-pink-300 rounded py-1.5 px-3.5 text-pink-700 w-full bg-pink-100'/>
          <input type="text" placeholder='State' className='border-2 border-pink-300 rounded py-1.5 text-pink-700 px-3.5 w-full bg-pink-100'/>
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='Pincode' className='border-2 border-pink-300 rounded py-1.5 px-3.5 text-pink-700 w-full bg-pink-100'/>
          <input type="text" placeholder='Country' className='border-2 border-pink-300 rounded py-1.5 text-pink-700 px-3.5 w-full bg-pink-100'/>
        </div>
        <input type="number" placeholder='Phone Number' className='border-2 border-pink-300 rounded py-1.5 px-3.5 text-pink-700 w-full bg-pink-100'/>

      </div>

      {/* right side  */}
      <div className='mt-8'> 
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>

          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          {/* diff payment methods  */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div className='flex items-center gap-3 border border-pink-700 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-pink-700 rounded-full`}></p>
              <img src={assets.gp} className='h-7 mx-5' />

            </div>

            <div className='flex items-center gap-3 border border-pink-700 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-pink-700 rounded-full`}></p>
              <img src={assets.phonepe} className='h-10 mx-7' />

            </div>
            <div className='flex items-center gap-3 border border-pink-700 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-pink-700 rounded-full`}></p>
              <img src={assets.paytm} className='h-5 mx-4' />

            </div>
            <div className='flex items-center gap-3 border border-pink-700 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-pink-700 rounded-full`}></p>
              <p className='text-pink-600 text-xs font-medium mx-4'>CASH ON DELIVERY</p>

            </div>

            


          </div>

        </div>

      </div>
        
    </div>
  )
}

export default PlaceOrder