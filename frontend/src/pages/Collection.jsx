import React, { useContext, useEffect, useState} from 'react'
import { assets, products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {


  const {products} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item=>item !== e.target.value));
  }
  else{
    setCategory(prev=> [...prev, e.target.value]);
  }
}

  useEffect(()=>{
    setFilterProducts(products);
  },[])

  useEffect(()=> {
console.log(category);

  },[category])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>


      {/* filter options  */}
      <div className='min-w-60'>
        
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 text-pink-700'>FILTERS
          <img src={assets.drop} className={`h-3 sm:hidden ${showFilter ? 'rotate-270' : ''}`} />
        </p>
        {/* Category filter  */}
        <div className={`border border-pink-400 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-pink-700'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-pink-700'>
            <label className="flex items-center gap-2 text-pink-600">
              <input type="checkbox" className="w-4 h-4 accent-pink-500" value={'men'} onChange={toggleCategory}/>
                Men
           </label>

            <label className="flex items-center gap-2 text-pink-600">
              <input type="checkbox" className="w-4 h-4 accent-pink-500" value={'women'}  onChange={toggleCategory}/>
                Women
            </label>

            <label className="flex items-center gap-2 text-pink-600">
              <input type="checkbox" className="w-4 h-4 accent-pink-500" value={'kids'}  onChange={toggleCategory}/>
                Kids
              </label>

            <label className="flex items-center gap-2 text-pink-600">
              <input type="checkbox" className="w-4 h-4 accent-pink-500" value={'accessories'} onChange={toggleCategory}/>
                Accessories
            </label>


          </div>

        </div>

        {/* subcategory filter  */}

        <div className={`border border-pink-400 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium text-pink-700'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-pink-700'>
            <label className="flex items-center gap-2 text-pink-600">
              <input type="checkbox" className="w-4 h-4 accent-pink-500" value={'Topwear'}/>
                Topwear
           </label>

            <label className="flex items-center gap-2 text-pink-600">
              <input type="checkbox" className="w-4 h-4 accent-pink-500" value={'Bottomwear'} />
                Bottomwear
            </label>

            <label className="flex items-center gap-2 text-pink-600">
              <input type="checkbox" className="w-4 h-4 accent-pink-500" value={'Winterwear'} />
                Winterwear
              </label>

            <label className="flex items-center gap-2 text-pink-600">
              <input type="checkbox" className="w-4 h-4 accent-pink-500" value={'ring'}/>
                Rings
            </label>
            <label className="flex items-center gap-2 text-pink-600">
              <input type="checkbox" className="w-4 h-4 accent-pink-500" value={'pendant'}/>
                Pendant
            </label>
            <label className="flex items-center gap-2 text-pink-600">
              <input type="checkbox" className="w-4 h-4 accent-pink-500" value={'bracelet'}/>
                Bracelet
            </label>
            <label className="flex items-center gap-2 text-pink-600">
              <input type="checkbox" className="w-4 h-4 accent-pink-500" value={'earrings'}/>
                Earrings
            </label>


          </div>

        </div>

      </div>
      {/* Right side  */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>

          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* product sorting  */}
          <select className='border border-pink-700 text-sm px-2 text-pink-700'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>

        </div>

        {/* Map products  */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }


        </div>

      </div>
        
    </div>
  )
}

export default Collection