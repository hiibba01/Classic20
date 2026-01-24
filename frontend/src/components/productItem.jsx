import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const productItem = ({id,image,name,price}) => {


    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-pink-700 cursor-pointer'>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out w-full h-68 border border-pink-400' src={image[0]}  />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>

    </Link>
  )
}

export default productItem