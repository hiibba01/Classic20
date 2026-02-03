import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-pink-700 text-2xl text-center pt-8 border-t border-pink-500'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.c1} className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-pink-500'>
        <p>Classic20 is a modern fashion brand designed for every style, every age, and every moment. We offer a wide range of clothing and accessories for men, women, and kids-bringing together comfort, quality, and contemporary design. From everyday essentials to refined statement pieces, our collections are thoughtfully crafted using premium fabrics and careful detailing. We focus on versatility, ensuring our designs fit seamlessly into both casual and elevated lifestyles.</p>
        <p>At Classic20, fashion is about confidence and individuality. Our goal is to create clothing that feels effortless, looks timeless, and moves with you-no matter the occasion. Classic20 is where modern style meets everyday living.</p>
        <b className='text-pink-900'>Our Mission</b>
        <p>Our mission is to create versatile clothing and accessories that empower confidence, self-expression, and comfort for every generation.</p>

        </div>

      </div>

      <div className='text-xl py-4 text-pink-700'>
        <Title text1={'What Sets'} text2={'Us Apart'}/>
        
      </div>

      <div className='flex flex-col md:flex-row text-sm text-pink-700 mb-20'>
        <div className='border border-pink-800 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 mx-2'>
          <b className='border-b text-pink-700'>Premium Quality Materials:</b>
          <p className='text-pink-600'>We use carefully selected fabrics to ensure comfort, durability, and a refined finish in every piece we create.</p>

        </div>
        <div className='border border-pink-800 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 mx-2'>
          <b className='border-b text-pink-700'>Versatile Fashion for All:</b>
          <p className='text-pink-600'>Our collections are designed for men, women, and kids—offering styles that fit every age, lifestyle, and occasion.</p>

        </div>
        <div className='border border-pink-800 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 mx-2'>
          <b className='border-b text-pink-700'>Comfort Meets Style:</b>
          <p className='text-pink-600'>We believe great fashion should feel as good as it looks, delivering effortless comfort without compromising on style.</p>

        </div>

      </div>
      <NewsletterBox />
        
    </div>
  )
}

export default About