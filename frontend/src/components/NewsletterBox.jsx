import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();

    }



  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-pink-700'>Join our style circle & enjoy 15% OFF!</p>
        <p className='text-pink-600 mt-3 caveat-normal text-xl'>Subscribe to our newsletter for exclusive discounts, latest collections, and special updates straight to your inbox.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border border-pink-500 pl-3'>
            <input className='w-full sm:flex-1 outline-none text-pink-600' type="email" placeholder='Enter your email' required/>
            <button className='bg-pink-300 text-pink-800 text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox