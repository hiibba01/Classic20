import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const {products, currency} = useContext(ShopContext);
  return (
    <div className='border-t border-pink-700 pt-16'>

      <div className='text-2xl text-pink-600'>
        <Title text1={'MY'} text2={'ORDERS'}/>

      </div>
      <div>
        {
          products.slice(1,4).map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-pink-700 border-pink-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>

              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} className='w-16 sm:w-20'/>
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-pink-700'>
                    <p>{currency}{item.price}</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>

                  </div>
                  <p className='mt-2'>Date: <span className='text-pink-400'>3, Feb, 2026</span></p>
                </div>

              </div>

              <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-300'></p>
                <p className='md:text-sm text-base text-pink-700'>Ready to Ship</p>
              </div>
              <button className='border px-4 py-2 text-sm font-medium rounded-sm text-pink-700'>Track Your Order</button>

              </div>

            </div>
          
          ))
        }
      </div>
        
    </div>
  )
}

export default Orders