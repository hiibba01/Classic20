import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart}= useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  },[productId])

  
  return productData ? (
    <div className='border-t-2 pt-10 border-pink-700 transition-opacity ease-in duration-500 opacity-100'>

      {/* product data  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>

        {/* product images  */}
        <div className='flex-1 flex flex-col-reverse sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full mr-2'>
            {
              productData.image.map((item, index)=> (
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex cursor-pointer' alt="" />
              ))
            }

          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full mb-3 h-auto'/>

          </div>

        </div>
        {/* product information  */}

        <div className='flex-1'>
          <h1 className='font-medium text-2xl text-pink-700 mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2 '>
            <img src={assets.gstar}  className="w-3 5" />
            <img src={assets.gstar}  className="w-3 5" />
            <img src={assets.gstar}  className="w-3 5" />
            <img src={assets.gstar}  className="w-3 5" />
            <img src={assets.dstar}  className="w-3 5" />
            <p className='pl-2 text-pink-600'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium text-pink-700'>{currency}{productData.price}</p>
          <p className='mt-5 text-pink-700 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p className='text-pink-600'>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-pink-500 text-pink-600' : ''}`} key={index}>{item}</button>
              ))}

            </div>

          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-pink-200 text-pink-900 px-8 py-3 text-sm active:bg-pink-500'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 text-pink-600'/>
          <div className='text-xs text-pink-400 mt-5 flex flex-col gap-1'>
            <p>Cash on Delivery is available on this product.</p>
            <p>Easy Return & Exchange Policy</p>
            <p>Crafted with Care & Quality</p>

          </div>

        </div>

      </div>
      {/* description and review section  */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm text-pink-600'>Description</b>
          <p className='border px-5 py-3 text-sm text-pink-600'>Reviews (122)</p>

        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-xs text-pink-400'>
          <p>Classic20 is a modern clothing brand that blends classic style with today’s trends. We believe fashion should be comfortable,
             affordable, and confident. Every piece 
            at Classic20 is designed to make you look stylish while feeling at ease, whether it’s for daily wear or special occasions.</p>
          <p>At Classic20, we focus on quality fabrics, perfect fits, and timeless designs.
             Our collection is inspired by everyday fashion needs and changing trends, ensuring
              you always stay in style. From casual wear to statement outfits,
             Classic20 has something for everyone.</p>
        </div>
      </div>

      {/* display related products  */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product