import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-pink-700 text-2xl pt-10 border-t border-pink-700'>
        <Title text1={'CONTACT'} text2={'US'}/>

      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact} className='w-full md:max-w-[480px]' />
        <div className='flex flex-col justify-center  items-start gap-6'>
          <p className='font-semibold text-xl text-pink-700 '>Our Store</p>
          <p className='text-pink-500'>45980 Avenue Park Street <br />Sector D, Bombay, India</p>
          <p className='text-pink-500'>(911) 556-023445 <br />Email: classic20@gmail.com</p>
          <p className='font-semibold text-xl text-pink-600'>Careers at Classic20</p>
          <p className='text-pink-500'>Learn more about our teams and job openings.</p>
          <button className='border rounded-md text-pink-600 border-pink-700 px-8 py-4 hover:bg-pink-300 hover:text-pink-900 transition-all duration-500'>Explore Jobs here</button>

        </div>

      </div>
      <NewsletterBox />
        
    </div>
  )
}

export default Contact