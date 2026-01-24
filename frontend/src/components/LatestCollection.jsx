import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Product from '../pages/Product';
import ProductItem from './productItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);

    const [latestProducts, setLatestProducts] = useState([]);


    useEffect(() => {
      setLatestProducts(products.slice(0,10));
    },[])
    
    
  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='caveat-normal w-3/4 m-auto text-sm sm:text-md md:text-base text-pink-600'>Step into the season with our latest collection, crafted for comfort, confidence, and style.</p>

      </div>


      {/* We will be Rendering our products here  */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />

          ))
        }

      </div>




    </div>
  )
}

export default LatestCollection